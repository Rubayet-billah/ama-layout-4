"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import CustomContainer from "../ui/CustomContainer";
import Link from "next/link";
import Tabs from "./Tabs";
import ScrollProgressBar from "./components/ScrollProgressBar";
import logo2 from "@/assets/logo.jpg";
import MRFImage from "../ui/Image";

const StickyNav = ({ basic }) => {
  const router = useRouter();
  const params = useParams();
  const titleRef = useRef(null);
  const [isStickyNavShow, setIsStickyNavShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const {
    ref: summaryTabRef,
    inView,
    entry,
  } = useInView({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const selectedPlan = "corporate";

  useEffect(() => {
    // Check if the device width is below a certain threshold to determine mobile
    const isMobileDevice = window.innerWidth < 768;
    setIsMobile(isMobileDevice);

    if (params.slug !== basic?.slug) {
      router.replace(`/reports/${basic?.slug}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (entry) {
      const boundingClientRect = entry.boundingClientRect;
      const isOutOfViewFromTop = boundingClientRect.top < 0;
      if (isOutOfViewFromTop && !inView) {
        setIsStickyNavShow(true);
      } else {
        setIsStickyNavShow(false);
      }
    }
  }, [inView, entry]);

  const titleStyles = {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxHeight: "3em", // Adjust this based on your line height
    lineHeight: "1.5em", // Line height * 2 = max-height
  };

  return (
    <div className="relative">
      <div
        className={`fixed top-2 left-0 w-full py-2 z-30 bg-white  shadow-lg transition-all duration-300 ease-in-out transform ${
          isStickyNavShow
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <CustomContainer classNames="lg:flex gap-5 items-center">
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="block w-full max-w-20 lg:max-w-28 md:pr-4"
            >
              <MRFImage
                src={logo2}
                alt="Main Logo"
                placeholder="empty"
                classNames="max-w-20 lg:min-w-28 lg:max-w-28 lg:py-2"
              />
            </Link>
            <h2 className="font-bold uppercase xl:text-lg" style={titleStyles}>
              {basic?.title}
            </h2>
          </div>
          <div className="flex gap-2 mt-4 text-sm lg:justify-center lg:w-fit">
            <Tabs basic={basic} />
          </div>
        </CustomContainer>
      </div>
      <section className={`${isStickyNavShow ? "block" : "hidden"}`}>
        <ScrollProgressBar />
      </section>

      <hr ref={summaryTabRef} className="w-full border-none" />
    </div>
  );
};

export default StickyNav;
