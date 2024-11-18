"use client";
import React, { useCallback } from "react";
import SectionTitle from "../ui/SectionTitle";
import NewsCard from "./news/NewsCard";
import CustomContainer from "../ui/CustomContainer";
import CustomSlider from "../ui/slider/CustomSlider";
import RecentReportCard from "./recentReports/RecentReportCard";
import Link from "next/link";
import { ArrowRight, Clock } from "react-feather";
import StarNewsCard from "./news/StarNewsCard";
import MRFImage from "../ui/Image";
import defaultThumb from "@/assets/report/reportCategoryThumbnail/allCategory.jpeg";
import SidebarNewsCard from "./news/SidebarNewsCard";

const pressReleases = [
  {
    title: "Launch of Comprehensive Online Business Startup Guide",
    summary:
      "Explore immediate strategies and insights for launching your online business, with tools and support available right from day one.",
    category: "Tech",
    tags: ["Business", "Startup", "Guide"],
    publishDate: "2024-09-22",
  },
  {
    title: "New AI Breakthrough in Healthcare Diagnostics",
    summary:
      "A recent study unveils a groundbreaking AI technology designed to transform diagnostic processes in the healthcare industry.",
    category: "Healthcare",
    tags: ["AI", "Healthcare", "Diagnostics"],
    publishDate: "2024-09-20",
  },
  {
    title: "Tech Giants Join Forces to Combat Cybersecurity Threats",
    summary:
      "Leading tech companies have partnered to introduce a global initiative aimed at reducing the impact of cyber threats on businesses.",
    category: "Security",
    tags: ["Cybersecurity", "Tech", "Partnership"],
    publishDate: "2024-09-18",
  },
  {
    title: "Sustainable Energy Solutions Powering the Future",
    summary:
      "A deep dive into innovative sustainable energy technologies that are set to drive the next wave of clean energy globally.",
    category: "Environment",
    tags: ["Energy", "Sustainability", "CleanTech"],
    publishDate: "2024-09-15",
  },
  {
    title: "Financial Trends to Watch in the Post-Pandemic Era",
    summary:
      "Financial experts weigh in on the most important trends that businesses need to monitor in the aftermath of the pandemic.",
    category: "Finance",
    tags: ["Finance", "Post-Pandemic", "Trends"],
    publishDate: "2024-09-12",
  },
  {
    title: "New Regulations Impacting Global Trade Policies",
    summary:
      "Changes in trade regulations are likely to affect the way international businesses operate. Here's what you need to know.",
    category: "Trade",
    tags: ["Global Trade", "Regulations", "Business"],
    publishDate: "2024-09-10",
  },
  {
    title: "Advancements in Quantum Computing Set to Reshape Tech Industry",
    summary:
      "Quantum computing is gaining momentum, with recent developments signaling a major shift in the capabilities of future tech.",
    category: "Tech",
    tags: ["Quantum Computing", "Tech", "Innovation"],
    publishDate: "2024-09-08",
  },
  {
    title: "New Study Shows Shift in Consumer Behavior Post-COVID",
    summary:
      "Research reveals how the COVID-19 pandemic has permanently altered consumer preferences and purchasing habits.",
    category: "Market Research",
    tags: ["Consumer Behavior", "COVID-19", "Research"],
    publishDate: "2024-09-05",
  },
  {
    title: "AI-Powered Tools Revolutionize Online Learning Platforms",
    summary:
      "Educational institutions are adopting AI-driven tools to enhance learning experiences and improve student outcomes.",
    category: "Education",
    tags: ["AI", "Online Learning", "Education"],
    publishDate: "2024-09-03",
  },
  {
    title: "Healthcare Systems Embrace Digital Transformation",
    summary:
      "Digital tools and platforms are transforming the way healthcare is delivered, improving efficiency and patient outcomes.",
    category: "Healthcare",
    tags: ["Digital Transformation", "Healthcare", "Technology"],
    publishDate: "2024-09-01",
  },
];

const Newses = () => {
  const renderReport = useCallback(
    (news) => (
      <div className="flex-shrink-0 h-full p-2" key={news?.title}>
        <NewsCard news={news} />
      </div>
    ),
    []
  );

  return (
    <div className="pb-10 lg:pb-36 bg-neutral">
      <SectionTitle subtitle="See the latest press releases">
        Press releases
      </SectionTitle>
      {/* <CustomSlider
        items={pressReleases}
        renderItem={renderReport}
        slidesPerViewConfig={{ 1279: 4, 1024: 3, 768: 2, 0: 1 }}
        showAdjacent
      /> */}
      <CustomContainer>
        <div className="flex justify-end mb-5 lg:mb-10">
          <Link
            href="/industries"
            className="flex items-center gap-1 text-sm font-semibold duration-100 hover:text-primary"
          >
            More blogs <ArrowRight size={16} />
          </Link>
        </div>
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <StarNewsCard news={pressReleases[0]} />
          </div>
          <div className="space-y-5">
            {[...pressReleases].slice(0, 5).map((news, idx) => (
              <SidebarNewsCard key={idx} news={news} />
            ))}
          </div>
        </section>
        {/* <section className="grid grid-cols-1 gap-10 mt-5 lg:grid-cols-3 lg:mt-10">
          {[...pressReleases].slice(0, 6).map((news) => (
            <NewsCard key={news?.title} news={news} />
          ))}
        </section> */}
      </CustomContainer>
    </div>
  );
};

export default Newses;
