import React from "react";
import statBanner from "@/assets/stats/statBanner.png";
import Stats from "./stat/Stats"; // Import the reusable Stats component
import { CheckCircle, ShoppingCart, Shield } from "react-feather"; // Example icons for features
import CustomContainer from "../ui/CustomContainer";
import MRFImage from "../ui/Image";

const features = [
  {
    icon: CheckCircle,
    title: "Reliable Market Insights",
    description:
      "Access expertly curated research reports, backed by data-driven analysis and trusted by industry leaders.",
  },
  {
    icon: ShoppingCart,
    title: "Pay As You Order",
    description:
      "Browse our extensive library of report summaries, and purchase only the detailed reports that meet your needs.",
  },
  {
    icon: Shield,
    title: "Data You Can Trust",
    description:
      "Your privacy and business information are secure with us, along with 24/7 customer support to assist you.",
  },
];

const StatsSection = () => {
  return (
    <div className="py-12 bg-white lg:py-24">
      <CustomContainer>
        {/* Why Choose Us Section */}
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Side - Textual Content */}
          <div className="lg:w-1/2">
            <h2 className="mb-8 text-3xl font-bold">Why Choose Us</h2>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <feature.icon className="text-primary" size={40} />
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:w-1/2">
            <div className="border-4 rounded-lg xl:border-8 border-primary">
              <MRFImage
                src={statBanner}
                alt="Data security concept"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats Section - Reuse the Stats Component */}
        <Stats />
      </CustomContainer>
    </div>
  );
};

export default StatsSection;
