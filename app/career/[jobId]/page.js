import JobDetailsPage from "@/components/career/JobDetailsPage";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import React from "react";

const JobDescription = ({ params }) => {
  return (
    <>
      <Header />
      <JobDetailsPage jobId={params.jobId} />
      <Footer />
    </>
  );
};

export default JobDescription;
