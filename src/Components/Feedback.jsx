import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import usePublic from "../Hook/usePublic";
import LoadingSpinner from "./LoadingSpinner";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Parallax } from "react-parallax";

const Feedback = () => {
  const axiosSecure = usePublic();
  const { data: feedback, isLoading } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/get-feedback-data`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <Parallax
      bgImage="https://i.ibb.co.com/0yKbZRmL/medical-good-team-hospital-staff-doctors-nurse-illustration-1284-53038.jpg"
      strength={500}
    >
      <div className="relative bg-slate-950 bg-opacity-50 py-20">
        <div className="mb-20 container mx-auto">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-white">
              What Our Campers Say
            </h2>
            <p className="text-lg text-white max-w-md mx-auto">
              Discover the experiences of our happy campers and get inspired by
              their stories.
            </p>
          </div>

          {/* Swiper Section */}
          <div className="relative mx-2 xl:mx-20">
            <Swiper
              spaceBetween={30}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Navigation]}
              className="mySwiper"
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {Array.isArray(feedback) &&
                feedback.reverse().map((feedback, index) => (
                  <SwiperSlide
                    key={index}
                    className="p-6 bg-white rounded-lg text-left flex flex-col items-start gap-3 shadow-lg"
                  >
                    <div className="">
                      <p className="text-2xl text-gray-900 font-bold">
                        {feedback.campName}
                      </p>
                      <p className="text-gray-600 text-lg">
                        {feedback.feedback.slice(0, 80)}
                      </p>
                    </div>

                    <hr className="my-2" />

                    <div className="flex items-center gap-3">
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
                  </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="absolute left-0 right-0 z-10 flex justify-center gap-6 mt-8">
              <button className="custom-prev bg-blue-400 text-white p-2.5 rounded-full hover:bg-blue-600 duration-700">
                <IoIosArrowBack />
              </button>

              <button className="custom-next bg-blue-400 text-white p-2.5 rounded-full hover:bg-blue-600 duration-700">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Feedback;
