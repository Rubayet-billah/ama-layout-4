"use client";
// import Swiper core and required modules
import { Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import quotation from "@/assets/report/quotation.png";
import userAvatar from "@/assets/contact/user/user1.png";

export default function Testimonials({ testimonials = [] }) {
  return (
    <div className="remove_arrow">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        centerInsufficientSlides={true}
        centeredSlidesBounds={true}
        modules={[Autoplay]}
      >
        {testimonials?.map((testimonial, index) => (
          <SwiperSlide className="flex flex-col" key={index}>
            <div className="relative p-4 pt-16 pb-8 mt-24 rounded shadow-lg bg-neutral">
              <div className="absolute -translate-x-1/2 bg-white border-2 rounded-full w-28 h-28 -top-14 left-1/2 border-primary">
                <Image
                  className="border rounded-full border-primary"
                  src={testimonial?.image || userAvatar}
                  alt="avatar"
                  height={500}
                  width={500}
                  // style={{ height: "50px", width: "50px", minWidth: "50px" }}
                />
              </div>
              <div className="flex items-center justify-center gap-4 mb-5">
                <div>
                  <p className="text-sm">{testimonial?.occupation}</p>
                  <h3 className="text-lg italic font-semibold">
                    {testimonial?.name}
                  </h3>
                </div>
              </div>
              <p className="text-sm">{testimonial?.testimonial} </p>
              <div className="w-16 ml-auto"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
