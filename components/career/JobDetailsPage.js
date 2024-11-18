/* eslint-disable react/no-unescaped-entities */
import { jobDetails } from "@/constants/constants";
import CustomContainer from "../ui/CustomContainer";
import SectionTitle from "../ui/SectionTitle";
import JobApplictionForm from "./component/JobApplictionForm";

const JobDetailsPage = ({ jobId }) => {
  const currentJob = jobDetails.find((job) => job.id == jobId);
  const { id, title, jobDescription, aboutCompany, vacancy } = currentJob;
  return (
    <div className="pb-10">
      <SectionTitle>Job Description</SectionTitle>
      <CustomContainer>
        <section className="relative gap-5 space-y-3 md:flex lg:gap-8 md:space-y-0">
          <div className="lg:w-2/3">
            <div>
              <h3 className="text-lg font-bold md:text-2xl text-primary">
                {title}
              </h3>
              <div className="flex gap-5 text-sm">
                <p>
                  Vacancy: <span className="font-bold">{vacancy}</span>
                </p>
                <p>
                  Posted: <span className="font-bold">3 days ago</span>
                </p>
              </div>
            </div>
            <div className="mt-3">
              <div>{jobDescription}</div>
            </div>
            <div className="mt-3">
              <h1 className="mb-2 text-xl font-bold">About our company</h1>
              <p>
                Consulting WP is a global consulting powerhouse. We began our
                operations a few decades ago and have grown due to excellent
                relationships with our clients. We started out small, with just
                a few people and a small office, but today we have offices in
                multiple countries with hundreds of people working inside them.{" "}
                <br />
                We achieved our success because of how successfully we integrate
                with our clients. One compl- aint many people have about
                consultants is that they can be disruptive. Employees fear
                outside consultants coming in and destroying the workflow. Our
                clients face no such issues.
              </p>
            </div>
          </div>
          <div className="sticky top-0 h-full lg:w-1/3">
            <h1 className="mb-4 text-xl font-bold">Apply for this job</h1>
            <JobApplictionForm />
          </div>
        </section>
      </CustomContainer>
    </div>
  );
};

export default JobDetailsPage;
