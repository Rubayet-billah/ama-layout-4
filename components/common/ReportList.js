import { fetchRecentReports, fetchReports } from "@/utils/fetchFunctions";
import moment from "moment";
import React from "react";
import { Clock } from "react-feather";
import Link from "next/link";
import ReportListSlider from "./report/ReportListSlider";
import SectionTitle from "../ui/SectionTitle";
export default async function ReportList({ limit = 12, categorySlug }) {
  // const reports = await fetchRecentReports(limit);

  const { data: reports } = await fetchReports({
    categorySlug,
    searchParams: { page: 1 },
  });

  return (
    <div className="mb-5 lg:mb-12">
      <SectionTitle subtitle="See the similar reports">
        Related Reports
      </SectionTitle>
      <ReportListSlider relatedReports={reports} />
    </div>
  );
}
