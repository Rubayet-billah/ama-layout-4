import Image from "next/image";
import React from "react";
import { CheckCircle } from "react-feather";
import Link from "next/link";
import reportThumbnail from "@/assets/report/newReportThumbnail.jpeg";
import ReportThumbnail from "@/components/common/report/ReportThumbnail";
import Button from "@/components/ui/Button";

const ReportCard = ({ report }) => {
  const {
    id,
    title,
    summery,
    createdAt,
    publishedAt,
    baseyear,
    noOfPages,
    category,
    marketKeyword,
    price,
    slug,
  } = report;
  return (
    <div>
      <section className="gap-5 p-2 my-5 space-y-3 duration-300 rounded shadow md:flex md:space-y-0 hover:shadow-lg lg:p-4">
        <div>
          <Link href={`/reports/${slug}`}>
            <ReportThumbnail displayText={marketKeyword} />
          </Link>
        </div>
        <div className="md:flex-1">
          <div className="space-y-2 md:space-y-2">
            <h2 className="font-bold text-secondary md:text-xl">
              <Link href={`/reports/${slug}`}>{title}</Link>{" "}
            </h2>
            <p className="text-sm text-accent">{summery}</p>
          </div>
          <div className="flex items-center mt-1 text-sm gap-x-3">
            <span>
              {new Date(publishedAt || createdAt).toDateString("month", "year")}
            </span>
            <hr className="w-0 h-6 border-2 border-secondary" />
            <span>Base Year: {new Date().getFullYear() - 1}</span>
            <hr className="w-0 h-6 border-2 border-secondary" />
            <span>No Of Pages: {noOfPages}</span>
          </div>
        </div>
        <hr className="hidden w-0 h-auto border min-h-32 lg:block" />
        <div className="min-w-[20%]">
          <section className="space-y-2">
            <h4 className="font-bold">Price: {price?.singlePrice}</h4>
            <div className="text-xs">
              <p className="flex items-center gap-1">
                <CheckCircle size={10} color="green" />{" "}
                <span>PDF, PPT, XLS</span>
              </p>
              <p className="flex items-center gap-1">
                <CheckCircle size={10} color="green" />{" "}
                <span>UPDATE AVAILABLE ON DEMAND</span>
              </p>
              <p className="flex items-center gap-1">
                <CheckCircle size={10} color="green" />{" "}
                <span>Online Licence</span>
              </p>
            </div>
            <div className="space-y-2">
              <Link href={`/report/${slug}/sample-report`} className="block">
                <Button classNames="btn-sm w-full">Download Sample</Button>
              </Link>
              <Link
                href={`/report/${slug}/checkout?type=single`}
                className="block"
              >
                <Button variant="secondary" classNames="btn-sm w-full">
                  Buy Now
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ReportCard;
