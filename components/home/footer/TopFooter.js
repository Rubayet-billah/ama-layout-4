/* eslint-disable react/no-unescaped-entities */
import CustomContainer from "@/components/ui/CustomContainer";
import { salesEmail, websiteTitle } from "@/constants/constants";
import React from "react";
import { Mail, MapPin, PhoneCall } from "react-feather";

const TopFooter = () => {
  return (
    <div className="py-10 text-white bg-accent">
      <CustomContainer>
        <h2 className="mb-4 text-lg lg:text-xl text-primary">
          About {websiteTitle}
        </h2>
        <p className="text-sm text-justify">
          Market Insights Reports offers comprehensive market research reports
          and analysis, giving businesses important information about their
          clients, rivals, and sector to help them make well-informed decisions
          on operations, marketing, and business strategy. We offer a variety of
          services in addition to market research, data analysis, and strategy
          planning. In order to find opportunities and learn more about our
          competitors and the industry at large, we employ competitive analysis.
          To identify areas for development, we also evaluate our performance
          against that of our rivals. We can determine the places at which we
          can offer our clients the most value by performing value chain
          analysis.
          <br /> <br />
          Additionally, clients receive a thorough overview of their industry
          business environment. We can find trends that help us forecast future
          possibilities and threats by examining global macroeconomic dynamics
          and consumer behavior patterns. By analyzing their features and
          advantages, contrasting them with comparable items on the market, and
          evaluating both their quantitative and qualitative performance, we
          comprehensively evaluate our clients' products. This allows us to
          assist customers in determining how their goods compare to those of
          their rivals and in creating successful marketing plans. Our group has
          been successful in gaining a thorough grasp of our clients'
          requirements and offering them creative solutions. We currently
          provide services to more than 50 nations in Europe, the Middle East,
          Africa, Latin America, Asia Pacific, and North America. Because of our
          global reach, we have been able to establish trusting bonds with our
          partners and clients in various nations, improving customer service
          and forging a more cohesive worldwide presence.
        </p>
      </CustomContainer>
    </div>
  );
};

export default TopFooter;
