import React from "react";
import IndustryCard from "./industry/IndustryCard";
import SectionTitle from "../ui/SectionTitle";
import CustomContainer from "../ui/CustomContainer";
import Link from "next/link";
import { ArrowRight } from "react-feather";
import MRFImage from "../ui/Image";
import artWorkUnderline from "@/assets/artWorks/artWorkUnderline.png";
import industryCircle from "@/assets/artWorks/industryCircle.gif";

const Industries = ({ industries }) => {
  return (
    <div className="relative py-5 overflow-hidden lg:py-16">
      <CustomContainer>
        <header className="mb-10 lg:mb-16">
          <div className="relative w-fit">
            <span className="font-bold mrf-secondary-heading">
              Market Research By Category
            </span>
            <div className="absolute w-56 -bottom-4 lg:w-80 -right-16 ">
              <MRFImage src={artWorkUnderline} alt="artwork underline" />
            </div>
          </div>
        </header>
        <section className="grid grid-cols-1 gap-6 lg:pr-96">
          {industries?.map((industry) => {
            return <IndustryCard key={industry.id} industry={industry} />;
          })}
        </section>
      </CustomContainer>
      <section className="absolute hidden w-full max-w-2xl top-10 -right-0 lg:block">
        <MRFImage
          src={industryCircle}
          alt="industry circle"
          classNames="translate-x-1/2"
        />
      </section>
    </div>
  );
};

export default Industries;
