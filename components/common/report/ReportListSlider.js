"use client";
import React from "react";
import Link from "next/link";
import ReportThumbnail from "./ReportThumbnail";
import CustomSlider from "@/components/ui/slider/CustomSlider";
import { textElipsisStyles } from "@/utils/helper";

const ReportListSlider = ({ relatedReports }) => {
  const renderReport = (report) => (
    <div className="flex-shrink-0 p-2">
      <div>
        <div>
          <Link href={`/reports/${report.slug}`}>
            <ReportThumbnail displayText={report.marketKeyword} />
          </Link>
        </div>
        <hr className="w-20 my-5 border-2 rounded-lg border-secondary" />
        <h3 className="text-xs font-semibold">
          <Link className="hover" href={`/reports/${report.slug}`}>
            <span style={textElipsisStyles(2)}>{report.title}</span>
          </Link>
        </h3>
      </div>
    </div>
  );

  return (
    <CustomSlider
      items={relatedReports}
      renderItem={renderReport}
      slidesPerViewConfig={{ 1024: 6, 768: 3, 0: 2 }}
      showAdjacent
    />
  );
};

export default ReportListSlider;
