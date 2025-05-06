import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import desco from "../assets/desco.png";
import nesco from "../assets/nesco.png";
import dwasa from "../assets/wasa.png";
import titas from "../assets/titas.png";
import link3 from "../assets/link3.png";
import carnival from "../assets/carnival.png";

const Banner = () => {
  return (
    <div className="w-full h-96 bg-slate-900">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {[desco, nesco, dwasa, titas, link3, carnival].map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full">
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className="w-full h-full p-10 object-fill transition-transform duration-500 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
