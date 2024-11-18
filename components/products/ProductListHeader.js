/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CustomContainer from "../ui/CustomContainer";
import LucidIcon from "../ui/icons/LucidIcons";

const ProductListHeader = () => {
  return (
    <header className="py-2 text-white lg:py-4 bg-secondary">
      <CustomContainer>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LucidIcon
              name="FileText"
              classNames="mx-auto text-white"
              size={30}
            />
            <h1 className="text-lg font-bold md:text-xl">
              Explore Our Latest Research Reports
            </h1>
          </div>
          <blockquote className="hidden md:block">
            <p className="text-lg font-bold md:text-xl ">
              "Designing Growth Strategies Is In Our DNA"
            </p>
          </blockquote>
        </div>
      </CustomContainer>
    </header>
  );
};

export default ProductListHeader;
