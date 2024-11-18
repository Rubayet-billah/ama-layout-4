/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Tabs({ basic }) {
  const router = useRouter();
  const params = useParams();

  const [activeTab, setActiveTab] = useState("summary");
  const [isMobile, setIsMobile] = useState(false);

  const tabs = [
    {
      label: "Summary",
      value: "summary",
    },
    {
      label: "Segmentation",
      value: "segments",
    },
    {
      label: isMobile ? "TOC" : "Table of Content",
      value: "toc",
    },
    // {
    //   label: "FAQ",
    //   value: "faq",
    // },
    {
      label: "Methodology",
      value: "methodology",
    },
  ];

  useEffect(() => {
    const isMobileDevice = window.innerWidth < 768;
    setIsMobile(isMobileDevice);

    if (params.slug !== basic.slug) {
      router.replace(`/reports/${basic.slug}`);
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (tabs.find((tab) => tab.value === hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [params.slug, basic.slug, router]);

  const handleTabClick = (tabValue) => {
    setActiveTab(tabValue);
    localStorage.setItem("isClickScroll", "true");
    // router.replace(`#${tabValue}`, undefined, { shallow: true });
    const targetSection = document.getElementById(tabValue);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.location.hash = `#${tabValue}`;
        localStorage.setItem("isClickScroll", "false");
      }, 1000); // Adjust the timeout duration based on the scroll duration
    }
    router.refresh();
  };

  return (
    <div className="relative">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(tab.value)}
            className={`px-2 lg:px-6 text-sm text-nowrap font-semibold text-secondary text-left py-2 hover:bg-primary hover:text-white rounded-sm duration-100 ${
              activeTab === tab.value
                ? "bg-secondary text-white hover:text-secondary"
                : "text-secondary bg-neutral"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
