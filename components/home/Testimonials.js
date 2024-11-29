import React from "react";
import SectionTitle from "../ui/SectionTitle";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import TestimonialSlider from "./testimonial/TestimonialSlider";
import MRFImage from "../ui/Image";
import artWorkWave from "@/assets/artWorks/artWorkWave.png";
import CustomContainer from "../ui/CustomContainer";

const Testimonials = ({ testimonials }) => {
  return (
    <div id="testimonial">
      <header className="my-10 lg:my-16">
        <div className="relative mx-auto w-fit">
          <span className="font-bold mrf-secondary-heading relative z-[1] lg:px-6">
            What Are Clients Say About MIR ?
          </span>
          <div className="absolute w-full -bottom-4">
            <MRFImage src={artWorkWave} alt="artwork underline" />
          </div>
        </div>
      </header>
      <CustomContainer>
        <TestimonialSlider testimonials={testimonials} />
      </CustomContainer>
    </div>
  );
};

export default Testimonials;
