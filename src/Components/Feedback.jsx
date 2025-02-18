import React from "react";
import profileImg from "../assets/banner-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import usePublic from "../Hook/usePublic";
import LoadingSpinner from "./LoadingSpinner";

const Feedback = () => {
  const axiosSecure = usePublic();
  const { data: feedback, Loading } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/get-feedback-data`);
      return data;
    },
  });

  if (Loading) return <LoadingSpinner />;
  console.log(feedback);

  return (
    <div className="container mx-auto mb-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          What Our Campers Say
        </h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Discover the experiences of our happy campers and get inspired by
          their stories.
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {[...Array.isArray(feedback) ? feedback : []]?.reverse()?.map((feedback, index) => (
          <SwiperSlide
            key={index}
            className="p-6 bg-white rounded-lg text-left flex flex-col items-start gap-3"
          >
            <div className="flex items-center gap-3 flex-grow">
              <img
                src={feedback.image}
                alt={`${feedback.name}'s profile`}
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />

              <div>
                <h4 className="font-semibold text-lg text-gray-800">
                  {feedback.name}
                </h4>
                <div className="flex items-center text-yellow-400">
                  {"★".repeat(feedback.rating)}
                  {"☆".repeat(5 - feedback.rating)}
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <p className="text-lg text-gray-900 font-bold">
                {feedback.campName}
              </p>
              <p className="text-gray-600 text-sm">
                {feedback.feedback.slice(0, 80)}...
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
