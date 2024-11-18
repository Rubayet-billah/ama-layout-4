import React from "react";
import IndustryCard from "./industry/IndustryCard";
import SectionTitle from "../ui/SectionTitle";
import CustomContainer from "../ui/CustomContainer";
import Link from "next/link";
import { ArrowRight } from "react-feather";

const Industries = ({ industries }) => {
  return (
    <div className="pb-5 lg:pb-10 bg-neutral">
      <SectionTitle subtitle="Upto 5000+ categorized reports">
        Browse reports by categories
      </SectionTitle>

      <CustomContainer>
        <div className="flex justify-end mb-5 lg:mb-10">
          <Link
            href="/industries"
            className="flex items-center gap-1 text-sm font-semibold duration-100 hover:text-primary"
          >
            All categories <ArrowRight size={16} />
          </Link>
        </div>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries?.map((industry) => {
            return <IndustryCard key={industry.id} industry={industry} />;
          })}
        </section>
      </CustomContainer>
    </div>
  );
};

export default Industries;
