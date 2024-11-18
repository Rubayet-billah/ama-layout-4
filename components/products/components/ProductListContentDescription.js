/* eslint-disable react/no-unescaped-entities */
import React from "react";
import allCategoryThumbnail from "@/assets/report/reportCategoryThumbnail/allCategory.jpeg";
import Link from "next/link";
import MRFImage from "@/components/ui/Image";
import ExpandedText from "./ExpandedText";
import Button from "@/components/ui/Button";

const ProductListContentDescription = ({ isAllReports, currentCategory }) => {
  return (
    <>
      <div>
        <ExpandedText>
          {isAllReports
            ? "Stay informed with our comprehensive research reports covering a wide range of topics and industries. Our reports provide valuable insights and analysis to help you navigate today's dynamic business landscape."
            : currentCategory?.summary}
        </ExpandedText>
      </div>
      <MRFImage
        src={
          isAllReports
            ? allCategoryThumbnail
            : currentCategory?.parent?.banner ||
              currentCategory?.banner ||
              allCategoryThumbnail
        }
        alt="All  Category Thumbnail"
        classNames="w-full"
        quality={75}
        loading="eager"
        priority
        bgImage
      >
        <div className="flex flex-col gap-5 p-5 text-white bg-gradient-to-r from-black/80 via-black/65 to-transparent md:p-12">
          <h3 className="max-w-lg text-xl lg:text-2xl">
            Explore Our Comprehensive Research Methodologies Across Various
            Industries
          </h3>
          <Link href={"/request-industry-insights"}>
            <Button>Speak to an Expert</Button>
          </Link>
        </div>
      </MRFImage>
    </>
  );
};

export default ProductListContentDescription;
