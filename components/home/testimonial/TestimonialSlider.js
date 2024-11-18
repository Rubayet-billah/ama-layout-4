"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "./TesimonialSlider.css";
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = ({ testimonials }) => {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial screen width on client-side
    setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenWidth === null) {
    return null; // Or a loading indicator
  }

  let slidesPerView = 1;

  // Set size conditionally based on screen width
  if (screenWidth >= 768) {
    slidesPerView = 1;
  }

  return (
    <div className="py-5 lg:pb-24">
      <Swiper
        navigation={true}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode, Navigation]}
      >
        {testimonials?.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
