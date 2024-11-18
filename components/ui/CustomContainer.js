import React from "react";
import { twMerge } from "tailwind-merge";

const CustomContainer = ({ children, classNames = "" }) => {
  return (
    <div
      className={twMerge(
        "w-full max-w-[1440px] mx-auto px-5 lg:px-10",
        classNames
      )}
    >
      {children}
    </div>
  );
};

export default CustomContainer;
