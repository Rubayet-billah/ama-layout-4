import MRFImage from "@/components/ui/Image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "react-feather";
import defaultThumb from "@/assets/report/reportCategoryThumbnail/allCategory.jpeg";

const RecentReportCard = ({ report }) => {
  const truncateStyles = (lines, lineHeight = 1.5) => ({
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxHeight: `${lines * lineHeight}em`,
    lineHeight: `${lineHeight}em`,
  });

  return (
    <div className="flex flex-col h-full mx-auto bg-white border rounded-lg shadow-lg max-w-96">
      <div className="relative">
        <MRFImage
          src={
            report?.category?.parent?.banner ||
            report?.category?.banner ||
            defaultThumb
          }
          classNames="w-full h-40 rounded-t-lg"
          alt="report thumbnail"
        />
        <span className="absolute px-2 py-0 text-xs font-semibold text-white rounded -bottom-2 left-12 bg-primary">
          New
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5 text-sm">
        <div className="flex-grow">
          <h1 className="font-semibold lg:text-lg" style={truncateStyles(3)}>
            <Link
              className="hover:text-primary"
              href={`/reports/${report?.slug}`}
            >
              {report?.title}
            </Link>
          </h1>
          <p className="mt-3 text-sm text-accent" style={truncateStyles(4)}>
            {report?.summery}
          </p>
        </div>
        <section className="mt-12">
          <div className="flex items-center justify-between mt-1 font-semibold text-center gap-x-3">
            <span>
              {new Date(
                report?.publishedAt || report?.createdAt
              ).toLocaleDateString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>No Of Pages: {report?.noOfPages || 80}</span>
          </div>
          <hr className="my-2 border border-accent" />
          <div className="flex items-center justify-between mt-1 font-semibold text-center gap-x-3">
            <span>
              Price: $
              <span className="font-bold">
                {report?.price?.singlePrice || 0}
              </span>
            </span>
            <Link
              className="hover:text-primary"
              href={`/reports/${report?.slug}`}
            >
              <button className="flex items-center gap-1 text-primary hover:text-secondary">
                <span>
                  <ArrowRight />
                </span>
                <span>Report Info</span>
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecentReportCard;
