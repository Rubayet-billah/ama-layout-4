"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./BannerSlide.css";
import { Autoplay, Navigation } from "swiper/modules";
import CustomContainer from "@/components/ui/CustomContainer";
import MRFImage from "@/components/ui/Image";
import { slidesData } from "@/constants/constants";
import { motion } from "framer-motion";
import SearchBar from "@/components/common/search/SearchBar";

const BannerSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        // loop={true}
        modules={[Autoplay, Navigation]}
        speed={1000}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Track active slide index
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <MRFImage
              src={slide.image}
              alt="Banner Image"
              classNames="w-full"
              bgImage
              loading={index === 0 ? "eager" : "lazy"} // Eager load the first image
              priority={index === 0} // Priority set to true for the first slide
            >
              <div className="text-white bg-gradient-to-r from-black/95 via-black/80 to-white/20">
                <CustomContainer
                  classNames={
                    "flex items-center justify-center lg:justify-start min-h-[550px] xl:min-h-[550px]"
                  }
                >
                  {/* Wrapping the text and search bar in a container */}
                  <div className="max-w-4xl mt-12 text-center xl:ml-12 md:text-left">
                    {/* Apply motion to only the text elements */}
                    <motion.div
                      className="slide-content"
                      initial={{ opacity: 0, y: 100 }}
                      animate={{
                        opacity: activeIndex === index ? 1 : 0,
                        y: activeIndex === index ? 0 : 100,
                      }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h2 className="mb-3 mrf-heading lg:mb-7 min-h">
                        {slide.title}
                      </h2>

                      <h3 className="mb-2 font-normal lg:text-xl">
                        Stay ahead of the competition with our comprehensive
                        reports. Explore industry trends, opportunities, and
                        in-depth analysis to fuel your business growth.
                      </h3>
                    </motion.div>
                  </div>
                </CustomContainer>
              </div>
            </MRFImage>
          </SwiperSlide>
        ))}
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </Swiper>

      {/* Render SearchBar outside the Swiper but in the same location visually */}
      <div className="absolute inset-x-0 z-10 justify-center hidden lg:flex top-48 xl:justify-start">
        <CustomContainer>
          <div className="max-w-3xl xl:ml-12">
            <SearchBar />
          </div>
        </CustomContainer>
      </div>
    </div>
  );
};

export default BannerSlide;
