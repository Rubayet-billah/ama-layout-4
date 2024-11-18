"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "./SponsorSlider.css";
import image1 from "@/assets/sponsors/image1.png";
import image2 from "@/assets/sponsors/image2.png";
import image3 from "@/assets/sponsors/image3.png";
import image4 from "@/assets/sponsors/image4.png";
import SponsordCard from "./SponsordCard";

const companyLogos = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
];

const SponsorSlider = ({ sponsors }) => {
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

  let slidesPerView = 2;

  // Set size conditionally based on screen width
  if (screenWidth >= 768) {
    slidesPerView = 6;
  }

  return (
    <div className="flex items-center justify-center h-full">
      <Swiper
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
        {sponsors?.map((sponsor) => (
          <SwiperSlide className="h-full" key={sponsor.id}>
            <SponsordCard image={sponsor.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SponsorSlider;
