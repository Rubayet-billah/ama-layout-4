import React from "react";
import carrerBg from "@/assets/career/careerBg4.jpeg";
import CustomContainer from "../ui/CustomContainer";
import Link from "next/link";
import { ChevronRight } from "react-feather";
import Button from "../ui/Button";
import { jobDetails } from "@/constants/constants";

const CareerPage = () => {
  return (
    <div className="pb-10">
      <section
        className="text-white"
        style={{
          backgroundImage: `url(${carrerBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="py-12 bg-opacity-50 bg-secondary">
          <CustomContainer>
            <p className="flex flex-wrap items-center gap-[2px] text-xs">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <ChevronRight size={10} />
              <Link href="/career" className="hover:text-primary">
                Career
              </Link>
            </p>
            <h1 className="mt-4 text-2xl font-bold text-white lg:text-3xl">
              Career
            </h1>
            <hr className="w-12 mt-2 border-t-4 border-b-4 border-white rounded" />
          </CustomContainer>
        </div>
      </section>
      <section>
        <CustomContainer>
          <div className="my-5 mt-10">
            <h4>
              Supporting Your Operations Throughout the Entire Business Cycle
              with Customized Reports. By its very nature, the Homeland Security
              industry is highly dynamic. You must have the latest knowledge of
              emerging business opportunities that result from new legislation,
              increased competition and change of leadership that could
              translate into key go or no-go business decisions.
            </h4>
          </div>
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {jobDetails?.map((job) => (
              <div
                key={job.id}
                className="p-4 duration-200 bg-white rounded shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold md:text-2xl text-primary">
                  {job.title}
                </h3>
                <div className="flex gap-5 text-sm">
                  <p>
                    Vacancy: <span className="font-bold">{job.vacancy}</span>
                  </p>
                  <p>
                    Posted: <span className="font-bold">3 days ago</span>
                  </p>
                </div>
                <p className="mt-3">{job.jobSummary}</p>
                <div className="mt-3 text-sm">
                  <Link href={`/career/${job.id}`}>
                    <Button variant="secondary">Apply Now</Button>
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </CustomContainer>
      </section>
    </div>
  );
};

export default CareerPage;
