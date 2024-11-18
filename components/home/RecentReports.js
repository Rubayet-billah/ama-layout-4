"use client";
import React from "react";
import SectionTitle from "../ui/SectionTitle";
import NewsCard from "./news/NewsCard";
import CustomContainer from "../ui/CustomContainer";
import CustomSlider from "../ui/slider/CustomSlider";
import RecentReportCard from "./recentReports/RecentReportCard";

const RecentReports = ({ recentReports }) => {
  const renderReport = (report) => (
    <div className="flex-shrink-0 h-full p-2">
      <RecentReportCard key={report.id} report={report} />
    </div>
  );
  return (
    <div className="pb-10 xl:pb-24 bg-neutral">
      <SectionTitle subtitle="Trending business reports accross industries">
        Trending Reports
      </SectionTitle>
      <CustomSlider
        items={recentReports}
        renderItem={renderReport}
        slidesPerViewConfig={{ 1024: 3, 768: 2, 0: 1 }}
        showAdjacent
      />
    </div>
  );
};

export default RecentReports;
