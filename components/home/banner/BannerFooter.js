import Button from "@/components/ui/Button";
import CustomContainer from "@/components/ui/CustomContainer";
import MRFImage from "@/components/ui/Image";
import artWorkStar from "@/assets/artWorks/artWorkStar.png";
import avatar1 from "@/assets/artWorks/Ellipse 152.png";
import avatar2 from "@/assets/artWorks/Ellipse 153.png";
import avatar3 from "@/assets/artWorks/Ellipse 154.png";

import Link from "next/link";
import React from "react";
import { ArrowRight } from "react-feather";

const BannerFooter = () => {
  return (
    <div className="bg-tertiary">
      <CustomContainer
        classNames={`items-center justify-center py-4 lg:flex gap-8 `}
      >
        <div className="flex items-center gap-2">
          <MRFImage src={artWorkStar} alt="art work star" classNames="w-8" />
          <MRFImage src={artWorkStar} alt="art work star" classNames="w-8" />
          <MRFImage src={artWorkStar} alt="art work star" classNames="w-8" />
        </div>
        <div className="flex items-center">
          <MRFImage
            src={avatar1}
            alt="avatar1"
            classNames="w-8 h-8 rounded-full border-2 border-accent -ml-2 first:ml-0"
          />
          <MRFImage
            src={avatar2}
            alt="avatar2"
            classNames="w-8 h-8 rounded-full border-2 border-accent -ml-2"
          />
          <MRFImage
            src={avatar3}
            alt="avatar3"
            classNames="w-8 h-8 rounded-full border-2 border-accent -ml-2"
          />
          <MRFImage
            src={avatar2}
            alt="avatar2"
            classNames="w-8 h-8 rounded-full border-2 border-accent -ml-2"
          />
        </div>

        <div className="text-lg font-bold capitalize lg:text-2xl">
          Trusted by 1000+ brands worldwide
        </div>
        <div className="flex items-center gap-2">
          <MRFImage src={artWorkStar} alt="art work star" classNames="w-8" />
          <MRFImage src={artWorkStar} alt="art work star" classNames="w-8" />
          <MRFImage src={artWorkStar} alt="art work star" classNames="w-8" />
        </div>
      </CustomContainer>
    </div>
  );
};

export default BannerFooter;
