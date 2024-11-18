/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import SummaryTabFAQAccordion from "./SummaryTabFAQAccordion";

const SummaryTabFAQ = ({ report, marketAnalysis, marketReport }) => {
  const [shuffledFAQS, setShuffledFAQs] = useState([]);
  const FAQS = [
    {
      question: `What is the projected Compound Annual Growth Rate (CAGR) of the ${report.marketKeyword} ?`,
      answer: `The projected CAGR is approximately ${report.marketData.cagr}%.`,
    },
    {
      question: `Which companies are prominent players in the ${report.marketKeyword}?`,
      answer: `Key companies in the market include ${marketAnalysis.companies}`,
    },
    {
      question: `What are the main segments of the ${report.marketKeyword}?`,
      answer: `The market segments include ${
        marketAnalysis.segments_json
          ? marketAnalysis.segments_json.map((item) => item.name).join(", ")
          : ""
      }`,
    },
    {
      question: "Can you provide details about the market size?",
      answer: `The market size is estimated to be USD  ${
        report.marketData.marketSize ? report.marketData.marketSize : "XXX"
      } ${report.marketData.valueUnit} as of 2022.`,
    },
    {
      question: "What are some drivers contributing to market growth?",
      answer: `${marketReport.drivers.split(",").map((item) => `${item}.`)}`,
    },
    {
      question: "What are the notable trends driving market growth?",
      answer: `${marketReport.trends.split(",").map((item) => `${item}.`)}`,
    },
    {
      question: "Are there any restraints impacting market growth?",
      answer: `${marketReport.restrains.split(",").map((item) => `${item}.`)}`,
    },
    {
      question:
        "Can you provide examples of recent developments in the market?",
      answer: `${marketAnalysis.developments[0]}`,
    },
    {
      question: "What pricing options are available for accessing the report?",
      answer: `Pricing options include single-user, multi-user, and enterprise licenses priced at USD ${report.price.singlePrice} , USD ${report.price.multiPrice}, and USD ${report.price.enterprisePrice} respectively.`,
    },
    {
      question: "Is the market size provided in terms of value or volume?",
      answer: `The market size is provided in terms of value, measured in ${
        report.marketData.valueUnit
      } ${
        report.marketData.volumeUnit
          ? `and volume, measured in ${report.marketData.volumeUnit}`
          : ""
      }.`,
    },
    {
      question:
        "Are there any specific market keywords associated with the report?",
      answer: `Yes, the market keyword associated with the report is \"${report.marketKeyword},\" which aids in identifying and referencing the specific market segment covered.`,
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
      question: `How can I stay updated on further developments or reports in the ${report.marketKeyword}?`,
      answer: `To stay informed about further developments, trends, and reports in the ${report.marketKeyword}, consider subscribing to industry newsletters, following relevant companies and organizations, or regularly checking reputable industry news sources and publications.`,
    },
  ];
  useEffect(() => {
    const shuffleAndSliceFAQs = FAQS.sort(() => 0.5 - Math.random()).slice(
      0,
      8
    );
    setShuffledFAQs(shuffleAndSliceFAQs);
  }, []);

  return (
    <section className="mb-8">
      <header className="my-4">
        <h2 className="text-xl font-bold uppercase border-b-4 text-primary border-secondary w-fit">
          Frequently Asked Questions
        </h2>
      </header>
      <main>
        {shuffledFAQS.map((el, index) => (
          <SummaryTabFAQAccordion key={index} item={el} />
        ))}
      </main>
    </section>
  );
};

export default SummaryTabFAQ;
