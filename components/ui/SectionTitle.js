import React from "react";
import clsx from "clsx";
import CustomContainer from "./CustomContainer";

const SectionTitle = ({
  children,
  subtitle = "",
  padding = "px-5 lg:px-10",
  classNames,
}) => {
  return (
    <div className={clsx("py-5 md:py-12", classNames)}>
      <CustomContainer classNames={padding}>
        <h2 className="font-semibold mrf-secondary-heading">{children}</h2>
        <p>{subtitle}</p>
      </CustomContainer>
    </div>
  );
};

export default SectionTitle;
