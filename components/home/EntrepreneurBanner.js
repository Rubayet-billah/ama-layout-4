/* eslint-disable react/no-unescaped-entities */
import React from "react";
import image1 from "@/assets/banner/image2.jpg";
import image2 from "@/assets/banner/image3.jpg";
import MRFImage from "../ui/Image";
import CustomContainer from "../ui/CustomContainer";
import { ArrowRight, Check } from "react-feather";
import Link from "next/link";
import Button from "../ui/Button";

const EntrepreneurBanner = () => {
  return (
    <section className="py-10 xl:py-24 bg-secondary">
      <CustomContainer>
        <main className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
          {/* Left Side - Images */}
          <div className="flex mb-8 space-x-6 lg:mb-0 lg:mr-8">
            <div className="w-1/2 h-40 lg:h-80 mt-auto overflow-hidden rounded-md rounded-tl-[50px] xl:rounded-tl-[80px]">
              <MRFImage
                src={image1}
                alt="Customer Support"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-1/2 overflow-hidden rounded-md h-auto rounded-tr-[50px] xl:rounded-tr-[80px]">
              <MRFImage
                src={image2}
                alt="Business Professional"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Side - Text and Call-to-Action */}
          <div className="text-white lg:ml-8 lg:text-left">
            <h1 className="mb-4 text-3xl font-bold">
              Access World-Class Market Insights for Business Growth
            </h1>
            <p className="mb-6 text-lg">
              Make data-driven decisions with comprehensive, expert research
              reports tailored to your industry’s needs. From emerging trends to
              actionable forecasts, we've got you covered.
            </p>

            {/* Bullet Points */}
            <ul className="mb-8 space-y-2">
              <li className="flex lg:items-center">
                <span className="mr-2 text-primary">
                  <Check />
                </span>
                Discover in-depth market reports with proven insights.
              </li>
              <li className="flex lg:items-center">
                <span className="mr-2 text-primary">
                  <Check />
                </span>
                Get matched with the perfect report for your business goals.
              </li>
              <li className="flex lg:items-center">
                <span className="mr-2 text-primary">
                  <Check />
                </span>
                Discover in-depth market reports with proven insights.
              </li>
            </ul>

            {/* Call-to-Action Button */}
            <Link href="/industries">
              <Button classNames="rounded-full">
                Explore Reports <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </main>
      </CustomContainer>
    </section>
  );
};

export default EntrepreneurBanner;
