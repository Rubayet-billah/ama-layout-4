import React from "react";
import Link from "next/link";
import MRFImage from "@/components/ui/Image";
import defaultThumb from "@/assets/report/reportCategoryThumbnail/allCategory.jpeg";

const NewsCard = ({ news }) => {
  return (
    <div className="flex flex-col h-full mx-auto bg-white border rounded shadow-lg max-w-96">
      <div className="relative">
        <MRFImage
          src={news?.category?.banner || defaultThumb}
          classNames="w-full h-40 rounded-t-lg"
          alt={`${news?.category} banner`}
        />
      </div>
      <div className="flex flex-col flex-1 p-5 text-sm">
        <div className="flex-grow">
          <p>{news?.category}</p>
          <h1 className="mt-2 text-base font-semibold">
            <Link
              href={`/reports/${news?.slug}`}
              className="hover:text-primary"
            >
              {news?.title}
            </Link>
          </h1>
          {news?.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {news.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-[2px] text-xs font-semibold text-white rounded-sm bg-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className="mt-3 text-sm text-accent">{news?.summary}</p>
        </div>
        <section className="mt-4">
          <div className="flex items-center justify-between font-semibold text-center gap-x-3">
            <span>
              {new Date(news?.publishDate).toLocaleDateString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewsCard;
