"use client";
import React, { useState, useRef, useEffect } from "react";

const ExpandedText = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const textRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("auto");

  useEffect(() => {
    if (textRef.current) {
      const isMobile = window.innerWidth <= 768;
      const charLimit = isMobile ? 160 : 438;
      setShowToggle(children?.length > charLimit);
    }
  }, [children]);

  useEffect(() => {
    if (textRef.current) {
      setContentHeight(
        isExpanded ? `${textRef.current.scrollHeight}px` : "4.5em"
      );
    }
  }, [isExpanded, children]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div
        className="relative text-sm text-justify"
        ref={textRef}
        style={{
          overflow: "hidden",
          maxHeight: contentHeight,
          transition: "max-height 0.2s ease",
          lineHeight: "1.5em", // Adjust based on your text line height
        }}
      >
        {children}
        {showToggle && (
          <button
            className={`text-sm text-info ${
              !isExpanded && "absolute bottom-0 right-0 bg-white pl-1"
            }`}
            onClick={toggleExpand}
          >
            {isExpanded ? "Read Less" : "...Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ExpandedText;
