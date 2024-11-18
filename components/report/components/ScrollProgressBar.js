import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-2 bg-gray-200">
      <div
        style={{ width: `${Math.min(scrollPercentage, 100)}%` }}
        className="h-2 bg-primary"
      />
    </div>
  );
};

export default ScrollProgressBar;
