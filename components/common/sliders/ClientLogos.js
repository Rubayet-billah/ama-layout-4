"use client";
// import Swiper core and required modules
import { Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";

export default function ClientLogos({ clientLogos = [] }) {
  return (
    <div className="remove_arrow">
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        navigation={true}
        // centerInsufficientSlides={true}
        // centeredSlidesBounds={true}
        modules={[Autoplay]}
      >
        {clientLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <Image
              src={logo}
              height={100}
              width={200}
              alt="client logo"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
