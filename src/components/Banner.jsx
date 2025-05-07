import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import desco from "../assets/sliders/desco-removebg-preview.png";
import nesco from "../assets/sliders/nesco-removebg-preview.png";
import dwasa from "../assets/sliders/wasa-removebg-preview.png";
import titas from "../assets/sliders/titas-removebg-preview.png";
import bashundhara from "../assets/sliders/bashundhara-removebg-preview.png";
import amberIT from "../assets/sliders/amberIT-removebg-preview.png";
import icc from "../assets/sliders/icc-removebg-preview.png";

const Banner = () => {
  return (
    <div className="relative mt-16 mb-16 w-full">
      <div className="absolute z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center text-white bg-black/50">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-4">
          Pay Your Bills Seamlessly
        </h1>
        <p className="max-w-2xl text-base md:text-lg drop-shadow">
          From electricity to gas, water to internet — manage all your utility
          bills effortlessly in one place. With PayBondhu, enjoy a secure,
          smooth, and smart bill payment experience across Bangladesh.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] z-0"
      >
        {[desco, nesco, dwasa, bashundhara, titas, amberIT, icc].map(
          (image, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full">
                <img
                  src={image}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-contain object-center px-8"
                />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Banner;
