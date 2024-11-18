import React from "react";
import reportThumbnail from "@/assets/report/newReportThumbnail.jpeg";
import Image from "next/image";

const ReportThumbnail = ({ displayText }) => {
  return (
    <div className="relative overflow-hidden border-4 shadow max-h-48 border-secondary w-fit max-w-36 min-w-36 xl:min-w-36">
      <Image src={reportThumbnail} alt="report thumbnail" />
      <span className="absolute text-sm font-semibold max-w-[124px] top-12 left-2">
        {displayText}
      </span>
    </div>
  );
};

export default ReportThumbnail;
