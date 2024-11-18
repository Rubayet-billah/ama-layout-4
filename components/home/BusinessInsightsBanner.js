"use client";
import React from "react";
import CustomContainer from "@/components/ui/CustomContainer";
import MRFImage from "@/components/ui/Image";
import Link from "next/link";
import businessImg from "@/assets/banner/business.png";
import Button from "../ui/Button";
import { ArrowRight } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";

const BusinessInsightsBanner = () => {
  return (
    <div className="relative bg-tertiary lg:pt-0">
      <CustomContainer>
        <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between min-h-60 lg:min-h-[300px] px-4 lg:px-8 gap-10">
          {/* Text Section */}
          <div className="flex-1 max-w-2xl mb-10 text-center lg:pr-8 lg:text-left lg:mb-0">
            <h2 className="mb-4 text-xl font-semibold lg:text-3xl text-dark">
              Find the Insights You Need to Elevate Your Business.
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              Access our comprehensive research reports to make informed
              decisions and stay ahead of market trends.
            </p>
            <div className="grid place-items-center lg:place-items-start">
              <Link href="/industries">
                <Button>
                  Explore Reports <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="bottom-0 right-0 flex-shrink-0 w-full mt-8 lg:absolute lg:mt-0 max-w-96">
            <AnimatePresence>
              <motion.div
                initial={{ scale: 0, y: 100 }}
                whileInView={{ scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "anticipate", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <MRFImage
                  src={businessImg}
                  alt="Business Insights"
                  classNames="w-full lg:max-w-sm"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </CustomContainer>
    </div>
  );
};

export default BusinessInsightsBanner;
