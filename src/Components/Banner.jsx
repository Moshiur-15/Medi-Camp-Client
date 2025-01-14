import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner1 from "../assets/banner.jpg";
import banner2 from "../assets/banner.jpg";
import banner3 from "../assets/banner.jpg";

export default function Banner() {
  const banners = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={2000}
        centeredSlides={true}
        className="mySwiper"
        modules={[Autoplay, Pagination, Navigation]}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative">
              <img
                className="w-full h-[350px] md:h-[420px] lg:h-[500px] xl:h-[560px] object-cover"
                src={banner.image}
                alt="img"
              />
              <div className="px-7 md:px-0 absolute bg-opacity-30 bg-black inset-0 text-center flex flex-col items-center justify-center pb-20 gap-2"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
