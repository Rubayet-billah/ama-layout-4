"use client";
import React from "react";
import SectionTitle from "../ui/SectionTitle";
import NewsCard from "./news/NewsCard";
import CustomContainer from "../ui/CustomContainer";
import CustomSlider from "../ui/slider/CustomSlider";
import RecentReportCard from "./recentReports/RecentReportCard";
import artWorkUnderline from "@/assets/artWorks/artWorkUnderline.png";
import artWork4 from "@/assets/artWorks/artWork4.png";
import MRFImage from "../ui/Image";
import Button from "../ui/Button";
import { ArrowRight } from "react-feather";

const RecentReports = ({ recentReports }) => {
  const renderReport = (report) => (
    <div className="flex-shrink-0 h-full p-2">
      <RecentReportCard key={report.id} report={report} />
    </div>
  );
  return (
    <div className="pb-10">
      <header className="my-10 lg:my-16">
        <div className="relative mx-auto w-fit">
          <span className="absolute w-20 -left-10 -top-10 lg:w-28">
            <MRFImage src={artWork4} alt="artwork spiral" />
          </span>
          <span className="absolute w-20 -right-10 -top-10 lg:w-28">
            <MRFImage src={artWork4} alt="artwork spiral" />
          </span>
          <span className="font-bold mrf-secondary-heading relative z-[1]">
            Most Popular Reports
          </span>
          <div className="absolute w-44 -bottom-4 lg:w-72 right-10 ">
            <MRFImage src={artWorkUnderline} alt="artwork underline" />
          </div>
        </div>
      </header>
      {/* <CustomSlider
        items={recentReports}
        renderItem={renderReport}
        slidesPerViewConfig={{ 1024: 3, 768: 2, 0: 1 }}
        showAdjacent
      /> */}
      <CustomContainer>
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {recentReports?.map((report) => (
            <RecentReportCard key={report.id} report={report} />
          ))}
        </section>
      </CustomContainer>
      <div className="grid mt-10 place-items-center lg:mt-16">
        <Button variant="secondary" classNames="rounded-full">
          Explore More <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default RecentReports;
