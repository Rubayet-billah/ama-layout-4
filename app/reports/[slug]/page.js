import DatasetJsonLd from "@/components/common/DatasetJsonLd";
import ErrorPage from "@/components/common/ErrorPage";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import ReportPage from "@/components/report/ReportPage";
import { redirect } from "next/navigation";
import React from "react";
import { generateSummary } from "./generateSummary";

export const generateMetadata = async ({ params }) => {
  const arrays = params.slug.split("-");
  const reportId = arrays[arrays.length - 1];
  const res = await fetch(`${process.env.API_URL}/api/seo/${reportId}`, {
    cache: "no-cache",
  });
  const dataReport = await res.json();
  const { title, description = "", keywords = "", images = [] } = dataReport;
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${process.env.BASE_URL}/reports/${params.slug}`,
    },
    openGraph: {
      images: images.map((img) => img.url),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

const ReportDetails = async ({ params }) => {
  const arrays = params.slug.split("-");
  const reportId = arrays[arrays.length - 1];
  let reportData = null;
  let clientLogos = [];
  let testimonials = [];
  const resSeo = await fetch(`${process.env.API_URL}/api/seo/${reportId}`, {
    cache: "no-cache",
  });
  const dataSeo = await resSeo?.json();
  try {
    const [reportResponse, logoResponse, testimonialResponse] =
      await Promise.all([
        fetch(`${process.env.API_URL}/api/reports/${reportId}`, {
          cache: "no-cache",
        }),
        fetch(
          `${process.env.API_URL}/api/client-logo?catId=${dataSeo?.basic?.category?.parentCategory}`
        ),
        fetch(
          `${process.env.API_URL}/api/testimonial?catId=${dataSeo?.basic?.category?.parentCategory}`
        ),
      ]);

    const dataReport = await reportResponse.json();
    reportData = dataReport.data;

    const logoData = await logoResponse.json();
    clientLogos = logoData.data.map((item) => item.image);

    const testimonialData = await testimonialResponse.json();
    testimonials = testimonialData.data;
  } catch (error) {
    console.log("error fetching report", error);
  }

  if (params?.slug !== reportData?.basic?.slug) {
    redirect(`/reports/${reportData?.basic?.slug}`);
    // redirect(`/about`);
  }

  const report = reportData?.basic;
  const marketAnalysis = reportData?.marketAnalysis;
  const marketReport = reportData?.marketReport;

  const FAQS = [
    {
      question: `What is the projected Compound Annual Growth Rate (CAGR) of the ${report?.marketKeyword} ?`,
      answer: `The projected CAGR is approximately ${report?.marketData.cagr}%.`,
    },
    {
      question: `Which companies are prominent players in the ${report?.marketKeyword}?`,
      answer: `Key companies in the market include ${marketAnalysis?.companies}`,
    },
    {
      question: `What are the main segments of the ${report?.marketKeyword}?`,
      answer: `The market segments include ${
        marketAnalysis.segments_json
          ? marketAnalysis.segments_json.map((item) => item.name).join(", ")
          : ""
      }`,
    },
    {
      question: "Can you provide details about the market size?",
      answer: `The market size is estimated to be USD  ${
        report?.marketData.marketSize ? report?.marketData.marketSize : "XXX"
      } ${report?.marketData.valueUnit} as of 2022.`,
    },
    {
      question: "What are some drivers contributing to market growth?",
      answer: `${marketReport?.drivers.split(",").map((item) => `${item}.`)}`,
    },
    {
      question: "What are the notable trends driving market growth?",
      answer: `${marketReport?.trends.split(",").map((item) => `${item}.`)}`,
    },
    {
      question: "Are there any restraints impacting market growth?",
      answer: `${marketReport?.restrains.split(",").map((item) => `${item}.`)}`,
    },
    {
      question:
        "Can you provide examples of recent developments in the market?",
      answer: `${marketAnalysis?.developments[0]}`,
    },
    {
      question: "What pricing options are available for accessing the report?",
      answer: `Pricing options include single-user, multi-user, and enterprise licenses priced at USD ${report?.price.singlePrice} , USD ${report?.price.multiPrice}, and USD ${report?.price.enterprisePrice} respectively.`,
    },
    {
      question: "Is the market size provided in terms of value or volume?",
      answer: `The market size is provided in terms of value, measured in ${
        report?.marketData.valueUnit
      } ${
        report?.marketData.volumeUnit
          ? `and volume, measured in ${report?.marketData.volumeUnit}`
          : ""
      }.`,
    },
    {
      question:
        "Are there any specific market keywords associated with the report?",
      answer: `Yes, the market keyword associated with the report is \"${report?.marketKeyword},\" which aids in identifying and referencing the specific market segment covered.`,
    },
    {
      question: "How do I determine which pricing option suits my needs best?",
      answer:
        "The pricing options vary based on user requirements and access needs. Individual users may opt for single-user licenses, while businesses requiring broader access may choose multi-user or enterprise licenses for cost-effective access to the report.",
    },
    {
      question:
        "Are there any additional resources or data provided in the report?",
      answer:
        "While the report offers comprehensive insights, it's advisable to review the specific contents or supplementary materials provided to ascertain if additional resources or data are available.",
    },
    {
      question: `How can I stay updated on further developments or reports in the ${report?.marketKeyword}?`,
      answer: `To stay informed about further developments, trends, and reports in the ${report?.marketKeyword}, consider subscribing to industry newsletters, following relevant companies and organizations, or regularly checking reputable industry news sources and publications.`,
    },
  ];

  return (
    <>
      <Header />
      <DatasetJsonLd
        id={reportId}
        images={report?.images || []}
        name={`${report?.marketKeyword} Report`}
        datePublished={report?.updatedAt}
        dateModified={report?.publishedAt}
        keywords={dataSeo?.keywords}
        description={generateSummary(
          dataSeo?.description,
          marketAnalysis?.developments,
          marketReport?.drivers,
          marketReport?.restrains,
          marketReport?.trends
        )}
        url={`${process.env.BASE_URL}/reports/${report?.slug}`}
        price={`${report?.price?.enterprisePrice}`}
        region={`${report?.region || "global"}`}
        marketSize={report?.marketData?.marketSize || "XXX"}
        breadcrumb={[
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "WebPage",
              "@id": `${process.env.BASE_URL}`,
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "WebPage",
              "@id": `{${process.env.BASE_URL}/industries/${reportData?.basic?.category?.link}`,
              name: reportData?.basic?.category?.label,
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "WebPage",
              "@id": `{${process.env.BASE_URL}/reports/${reportData?.basic?.slug}`,
              name: reportData?.basic?.title,
            },
          },
        ]}
        FAQS={FAQS.sort(() => Math.random() - 0.5)
          .slice(0, 4)
          .map((faq) => {
            return {
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            };
          })}
      />
      {reportData?.rd ? (
        <ReportPage
          testimonials={testimonials}
          clientLogos={clientLogos}
          reportData={reportData}
        />
      ) : (
        <div>
          <ErrorPage />
        </div>
      )}
      <Footer />
    </>
  );
};

export default ReportDetails;
