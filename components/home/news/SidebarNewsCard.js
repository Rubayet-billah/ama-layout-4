import MRFImage from "@/components/ui/Image";
import Link from "next/link";
import React from "react";
import defaultThumb from "@/assets/report/reportCategoryThumbnail/allCategory.jpeg";

const SidebarNewsCard = ({ news }) => {
  const truncateStyles = (lines, lineHeight = 1.5) => ({
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxHeight: `${lines * lineHeight}em`,
    lineHeight: `${lineHeight}em`,
  });
  return (
    <div className="flex gap-4 overflow-hidden bg-white rounded shadow">
      <div className="w-full max-w-48">
        <MRFImage
          src={defaultThumb}
          alt={"news image"}
          classNames="h-full object-cover"
        />
      </div>
      <div className="p-2">
        <Link href="/" className="hover:text-primary">
          <h2 className="text-sm font-bold" style={truncateStyles(2)}>
            {news.title}
          </h2>
        </Link>
        <p className="text-sm" style={truncateStyles(2)}>
          {news.summary}
        </p>
      </div>
    </div>
  );
};

export default SidebarNewsCard;
