import React from "react";
import waveBg2 from "@/assets/artWorks/waveBg2.png";
import artWorkArrow from "@/assets/artWorks/artWorkArrow.png";
import artWorkUnderline from "@/assets/artWorks/artWorkUnderline.png";
import artWorkSpiral from "@/assets/artWorks/artWorkSpiral.png";
import MRFImage from "../ui/Image";

const FlowChartSection = () => {
  const flowChart = [
    {
      id: 1,
      title: "Research Request",
      summary:
        "You submit a research request, specifying your market research needs and objectives",
      icon: "❓",
    },
    {
      id: 2,
      title: "Data Collection & Analysis",
      summary:
        "Our experts gather and analyze data from credible sources, applying industry-leading methodologies",
      icon: "📊",
    },
    {
      id: 3,
      title: "Report Compilation",
      summary:
        "We compile a comprehensive market research report, featuring actionable insights and recommendations",
      icon: "📄",
    },
    {
      id: 4,
      title: "Report Delivery & Support",
      summary:
        "We deliver the report to you, followed by dedicated support to ensure you maximize the insights",
      icon: "🎧",
    },
  ];

  return (
    <div>
      {/* Background Image */}
      <MRFImage
        src={waveBg2}
        alt="wave background"
        style={{
          objectFit: "fill",
          height: "100%",
        }}
        bgImage
      >
        <header className="py-10 pt-24 lg:py-16">
          <div className="relative mx-auto w-fit">
            <span className="absolute w-20 -left-5 -top-10 lg:w-28">
              <MRFImage src={artWorkSpiral} alt="artwork spiral" />
            </span>
            <span className="font-bold mrf-secondary-heading relative z-[1]">
              How It Works
            </span>
            <div className="absolute w-32 -bottom-2 lg:w-56 -right-16 ">
              <MRFImage src={artWorkUnderline} alt="artwork underline" />
            </div>
          </div>
        </header>

        <div className="relative max-w-5xl px-6 py-10 pt-4 pb-24 mx-auto lg:pb-24 lg:pt-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {flowChart.map((step, index) => (
              <div
                key={step.id}
                className={`relative flex flex-col ${
                  step?.id % 2 === 0 ? "lg:pt-24" : "pt-0"
                }`}
              >
                <div className="flex items-center gap-2 lg:block">
                  {/* Step Number */}
                  <div className="flex items-center justify-center w-12 h-12 text-xl font-bold bg-white rounded-full shadow-lg text-secondary">
                    {step.id}
                  </div>
                  {/* Step Icon */}
                  <div className="my-4 text-4xl">{step.icon}</div>
                </div>
                {/* Step Title */}
                <h3 className="text-lg font-semibold text-primary">
                  {step.title}
                </h3>
                {/* Step Summary */}
                <p className="mt-2 text-sm text-accent">{step.summary}</p>
                {/* Arrow SVG */}
                {index < flowChart.length && (
                  <div
                    className={`absolute hidden transform w-48 left-1/4 lg:block ${
                      step.id % 2 === 0 ? "-scale-y-100 top-16" : "top-4"
                    }`}
                  >
                    <MRFImage
                      src={artWorkArrow}
                      alt="Arrow artwork"
                      classNames="w-48"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </MRFImage>
    </div>
  );
};

export default FlowChartSection;
