"use client";
// import Swiper core and required modules
import { Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/scrollbar";
import "swiper/css";
import Image from "next/image";
import quotation from "@/assets/report/quotation.png";
import Button from "../ui/Button";

export default function CaseStudiesSlider({
  caseStudies = [
    {
      id: 1,
      title: "Comprehensive Guide to Launching Your Online Business",
      summary:
        "Explore essential steps and insights to start a successful online business with this in-depth guide.",
      media:
        "https://docs.google.com/gview?url=https://yourdomain.com/path-to-your-pdf.pdf&embedded=true",
    },
  ],
  openModalWithPdf,
}) {
  return (
    <div className="remove_arrow">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        centerInsufficientSlides={true}
        centeredSlidesBounds={true}
        modules={[Autoplay]}
        style={{
          paddingBottom: "8px",
        }}
      >
        {caseStudies?.map((cs, index) => (
          <SwiperSlide className="flex flex-col h-full" key={index}>
            <div className="h-full p-6 space-y-4 text-left rounded shadow-md bg-neutral max-w-96">
              <h4 className="text-lg font-semibold text-gray-800">
                {cs.title}
              </h4>
              <p className="text-sm text-gray-600">{cs.summary}</p>
              <div className="mt-4">
                <Button
                  classNames="btn-sm"
                  onClick={() => openModalWithPdf(cs?.document)} // Pass PDF URL to openModalWithPdf
                >
                  View PDF
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
