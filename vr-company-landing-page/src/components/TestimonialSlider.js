import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// slider css
import "swiper/css";
import "swiper/css/pagination";

import { slider } from "../data";

const TestimonialSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {slider.map((slide, index) => {
        const { message, image, name, email } = slide;
        return (
          <SwiperSlide
            key={index}
            className="rounded-lg p-4 lg:p-6 min-h-[240px] bg-gradient-to-t from-[#130613] via-[#2A1428] to-[#331A35]"
          >
            <p className="mb-8 min-h-[100px] text-[15px]">{message}</p>
            <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
              <div className="w-14">
                <img src={image} alt="" className="mb-3 md:mb-0" />
              </div>
              <div>
                <div className="font-medium text-base">{name}</div>
                <div className="font-medium text-gray-400">{email}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
