"use client";
import React, { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";

const Stats = () => {
  const statsData = [
    { value: 7500, label: "Reports" },
    { value: 2350, label: "Clients" },
    { value: 1050, label: "Managed Reports" },
    { value: 100, label: "Satisfied Customers" },
  ];

  const [isCounting, setIsCounting] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // When 50% of the target is visible in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsCounting(true);
        }
      });
    }, options);

    const currentRef = countRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-2 gap-8 mt-12 font-bold text-center text-gray-900 lg:grid-cols-4 lg:gap-12">
      {statsData.map((stat, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center px-6 py-6"
        >
          <h3
            ref={countRef}
            className="mb-2 text-4xl font-extrabold xl:text-5xl text-secondary"
          >
            {isCounting ? (
              <CountUp end={+stat.value} duration={3} />
            ) : (
              stat.value
            )}
            {idx === 3 ? <span>%</span> : <span>+</span>}
          </h3>
          <h4 className="text-lg font-medium text-gray-600">{stat.label}</h4>
        </div>
      ))}
    </div>
  );
};

export default Stats;
