/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SummaryTabFAQ from "./SummaryTabFAQ";
import SummaryTabHighlight from "./SummaryTabHighlight";

const SummaryTabContent = ({ basic, marketAnalysis, rd, marketReport }) => {
  let chartData = {};
  try {
    chartData = JSON.parse(rd.chart);
  } catch (error) {
    // console.error(error)
  }

  return (
    <div className="mb-5">
      {/* <section id="rd_table">
        <header className="my-4">
          <h2 className="text-xl font-bold uppercase border-b-4 text-primary border-secondary w-fit">
            {basic.marketKeyword} REPORT HIGHLIGHTS
          </h2>
        </header>
        <SummaryTabHighlight basic={basic} marketAnalysis={marketAnalysis} />
      </section> */}
    </div>
  );
};

export default SummaryTabContent;
