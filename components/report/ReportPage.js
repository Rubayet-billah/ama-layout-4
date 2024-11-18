import React from "react";
import reportHeaderBg from "@/assets/report/reportHeaderBg.png";
import CustomContainer from "../ui/CustomContainer";
import PricingCard from "./components/PricingCard";
import { getSubHeading } from "@/utils/helper";
import Forms from "./Forms";
import ReportList from "../common/ReportList";
import Link from "next/link";
import MRFImage from "../ui/Image";
import { cookies } from "next/headers";
import Tabs from "./Tabs";
import TOC from "./components/TOC";
import SummaryTabHighlight from "./components/SummaryTabHighlight";
import MethodologyTabContent from "./components/MethodologyTabContent";
import SummaryTabContent from "./components/SummaryTabContent";
import styles from "./components/rd.module.css";
import RegionData from "./components/RegionData";
import Breadcrumb from "./components/Breadcrumb";
import Testimonials from "../common/sliders/Testimonials";
import ClientLogos from "../common/sliders/ClientLogos";
import Button from "../ui/Button";
import { File, Link2 } from "react-feather";
import reportShopImage1 from "@/assets/report/reportShop.png";
import SummaryTabFAQ from "./components/SummaryTabFAQ";
import HandleHashChange from "./HandleHashChange";
import StickyNav from "./StickyNav";
import ClickAnimation from "./ClickAnimation";
import "./ClickAnimation.css";

const stats = [
  {
    value: "7,500+",
    description:
      "Reports delivered globally, covering a wide range of industries and sectors.",
  },
  {
    value: "2,350+",
    description:
      "Clients who trust our expertise and rely on our insights for business decisions.",
  },
  {
    value: "1,050+",
    description:
      "Managed Reports, ensuring seamless updates and premium service.",
  },
  {
    value: "100%",
    description:
      "Satisfied Customers, committed to delivering exceptional value and quality.",
  },
];

const StatsInsights = () => {
  return (
    <section className="py-4 bg-neutral">
      <CustomContainer>
        <div className="flex gap-8">
          <div className="grid h-auto place-items-center">
            <p className="text-3xl font-semibold">
              Market <br /> Insights
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-start p-2 text-sm border-l-4 border-primary"
              >
                <div className="ml-4">
                  <div className="text-base font-bold text-accent">
                    {stat.value}
                  </div>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

const ReportBanner = ({ basic, breadcrumbItems }) => {
  return (
    <div>
      {" "}
      <MRFImage
        classNames="w-full"
        src={
          basic?.category?.parent?.banner ||
          basic?.category?.banner ||
          reportHeaderBg
        }
        alt="Report banner"
        loading="eager"
        priority
        bgImage
      >
        <div className="py-6 text-white lg:min-h-64 lg:py-10 xl:pb-16 bg-gradient-to-r from-black/95 via-black/80 to-white/20">
          <CustomContainer classNames="space-y-4">
            <Breadcrumb items={breadcrumbItems} />

            <div className="text-2xl font-bold text-white lg:text-3xl">
              {basic.marketKeyword}
            </div>
            <section className="flex gap-4 text-sm">
              <div>
                <span>Updated On</span>
                <p className="font-bold">
                  {new Date(basic?.updatedAt || basic?.createdAt)
                    .toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                    .replace(/,/g, "")}
                </p>
              </div>
              <div className="h-auto border border-white"></div>
              {/* <div>
                <span>Published On</span>
                <p className="font-bold">
                  {new Date(basic?.publishedAt || basic?.createdAt)
                    .toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                    .replace(/,/g, "")}
                </p>
              </div>
              <div className="h-auto border border-white"></div> */}
              <div>
                <span>Total Pages</span>
                <p className="font-bold">{basic?.noOfPages || 0}</p>
              </div>
            </section>

            <div>
              <Link href={`/report/${basic?.slug}/sample-report`}>
                <Button>Download PDF</Button>
              </Link>
            </div>
          </CustomContainer>
        </div>
      </MRFImage>
      <section className="hidden lg:block">
        <StatsInsights />
      </section>
    </div>
  );
};

// Sidebar component defined in the same file
const ReportSidebar = ({ clientLogos, testimonials, basic }) => {
  return (
    <aside className="sticky h-screen py-5 overflow-y-auto top-16 lg:block lg:space-y-10 lg:pb-24">
      {/* segment for free sample */}
      <div className="mx-4 my-5">
        <div className="p-6 space-y-4 text-white bg-secondary">
          <div className="flex gap-4">
            <File className="mt-px font-bold" size={30} />
            <p className="text-2xl font-bold">Get a Free Sample</p>
          </div>
          <p>
            This FREE sample includes data points, ranging from trend analyses
            to estimates and forecasts. See for yourself.
          </p>
          <div>
            <Link href={`/report/${basic?.slug}/sample-report`}>
              <Button classNames="w-full relative animate-shakeme-button">
                Get Free Sample
                <ClickAnimation />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* pricing card */}
      <div className="mx-4 my-10">
        <PricingCard price={basic?.price} slug={basic?.slug} />
      </div>
      {/* custom report section */}
      <div className="mx-4 my-5">
        <div className="py-6 space-y-4">
          <p className="text-2xl font-bold">Looking for a Custom Report?</p>
          <p>
            We offer personalized report customization at no extra cost,
            including the option to purchase individual sections or
            country-specific reports. Plus, we provide special discounts for
            startups and universities. Get in touch with us today!
          </p>
          <div>
            <Link href="/contact">
              <Button classNames="btn-sm">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
      {/* client logos */}
      <div className="mx-4 my-5">
        <div className="text-center bg-white rounded">
          <ClientLogos clientLogos={clientLogos} />
        </div>
      </div>
      {/* tailored section */}
      <div className="my-5 mb-10">
        <div className="pb-5 mx-4">
          <h3 className="py-2 text-lg font-bold capitalize">
            Tailored for you
          </h3>
          <div className="p-4 pl-8">
            <ul className="mb-4 text-sm list-disc">
              <li>
                In-depth Analysis Tailored to Specified Regions or Segments
              </li>
              <li>Company Profiles Customized to User Preferences</li>
              <li>
                Comprehensive Insights Focused on Specific Segments or Regions
              </li>
              <li>
                Customized Evaluation of Competitive Landscape to Meet Your
                Needs
              </li>
              <li>
                Tailored Customization to Address Other Specific Requirements
              </li>
            </ul>
          </div>
          <Link href={`/report/${basic?.slug}/enquiry-before-buy`}>
            <Button variant="secondary" classNames="btn-sm">
              Ask for customization
            </Button>
          </Link>
        </div>
      </div>
      {/* testimonials */}
      <div className="mx-4">
        <Testimonials testimonials={testimonials} />
      </div>
    </aside>
  );
};

const ReportShop = () => (
  <section className="text-white bg-secondary">
    <CustomContainer classNames="py-8 lg:py-16">
      <main className="space-y-8 lg:gap-24 lg:flex lg:items-center lg:space-y-0">
        <section className="space-y-3">
          {/* <p className="font-bold uppercase text-secondary">
            DiMarket Report Shop
          </p> */}
          <h3 className="mrf-secondary-heading">
            Discover the Latest Market Insight Reports
          </h3>
          <p>
            Access in-depth insights on industries, companies, trends, and
            global markets. Our expertly curated reports provide the most
            relevant data and analysis in a condensed, easy-to-read format.
          </p>
          <div className="lg:pt-8">
            {" "}
            <Link href="/industries" className="block">
              <Button>Browse Reports</Button>
            </Link>
          </div>
        </section>
        <section className="lg:w-1/2">
          <div className="">
            <div className="relative z-10 shadow-md max-w-80">
              <MRFImage src={reportShopImage1} alt="shop image 1" />
            </div>
          </div>
        </section>
      </main>
    </CustomContainer>
  </section>
);

const ReportPage = ({
  testimonials = [],
  reportData = {},
  clientLogos = [],
}) => {
  let chartData = {};
  const { basic, marketAnalysis, marketReport, rd } = reportData;
  const subHeading = getSubHeading({
    ...basic,
    ...marketAnalysis,
    ...marketReport,
  });
  const cookieStore = cookies();
  const activeTab = cookieStore.get("tab")?.value || "summary";
  try {
    chartData = JSON.parse(rd.chart);
  } catch (error) {}

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    {
      label: basic?.category?.parent?.label || basic?.category?.label,
      href: `/industries/${
        basic?.category?.parent?.link || basic?.category?.link
      }`,
    },
  ];

  return (
    <div>
      <ReportBanner basic={basic} breadcrumbItems={breadcrumbItems} />

      <section>
        <CustomContainer>
          <main className="relative grid gap-5 mt-5 lg:grid-cols-3 lg:mt-10">
            {/* ---- report tab section ---- */}
            <section className="lg:col-span-2">
              {/* report introduction section  */}
              <section className="gap-5 py-5 space-y-3 md:flex md:space-y-0">
                <div className="space-y-3">
                  <h1 className="text-lg font-bold md:text-2xl">
                    {basic.title}
                  </h1>
                  <p className="text-sm">{subHeading}</p>
                </div>
              </section>
              <Tabs activeTab={activeTab} basic={basic} />
              <StickyNav basic={basic} />
              <main className="space-y-10">
                <section className="block min-w-full space-y-5 prose lg:space-y-10 lg:mb-10">
                  <HandleHashChange prevHashValue="" nextHashValue="summary" />
                  <div
                    className={styles.rd + " " + "text-justify"}
                    id="rd_content"
                    dangerouslySetInnerHTML={{ __html: rd?.rd || "" }}
                  ></div>
                  {chartData?.regional_market_share && (
                    <RegionData
                      regions={chartData?.regional_market_share || {}}
                    />
                  )}
                  <SummaryTabContent
                    basic={basic}
                    marketAnalysis={marketAnalysis}
                    marketReport={marketReport}
                    rd={rd}
                  />
                </section>
                <section>
                  <HandleHashChange
                    prevHashValue="summary"
                    nextHashValue="segments"
                  />
                  <header>
                    <h2 className="text-xl font-bold uppercase border-b-4 text-secondary border-primary w-fit">
                      {basic.marketKeyword} REPORT HIGHLIGHTS
                    </h2>
                  </header>
                  <SummaryTabHighlight
                    basic={basic}
                    marketAnalysis={marketAnalysis}
                  />
                </section>
                <section>
                  <HandleHashChange
                    prevHashValue="segments"
                    nextHashValue="toc"
                  />
                  <TOC
                    marketAnalysis={marketAnalysis}
                    marketReport={marketReport}
                    report={basic}
                  />
                </section>

                <section>
                  <HandleHashChange
                    prevHashValue="toc"
                    nextHashValue="methodology"
                  />
                  <MethodologyTabContent />
                </section>
                <section>
                  <SummaryTabFAQ
                    report={basic}
                    marketAnalysis={marketAnalysis}
                    marketReport={marketReport}
                  />
                </section>
              </main>
            </section>
            {/* ---- report sidebar ---- */}
            <ReportSidebar
              clientLogos={clientLogos}
              testimonials={testimonials}
              basic={reportData.basic}
            />
          </main>
        </CustomContainer>
        <section>
          <ReportList
            categorySlug={
              basic?.category?.parent?.link || basic?.category?.link
            }
          />
        </section>
        <section>
          <ReportShop />
        </section>
      </section>
    </div>
  );
};

export default ReportPage;
