import LucidIcon from "@/components/ui/icons/LucidIcons";
import Link from "next/link";
import React from "react";

const IndustryCard = ({ industry }) => {
  const { label, summary, icon, link } = industry;

  const truncateText = (text, maxLength) => {
    return text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <Link
      href={`/industries/${link}`}
      className="p-6 transition-transform duration-300 bg-white rounded shadow hover:scale-105 min-h-60 group"
    >
      {/* Icon */}
      {icon && (
        <div className="w-20">
          <LucidIcon name={icon} classNames="text-primary" size={48} />
        </div>
      )}

      {/* Reports Info */}
      <div className="mt-2">
        <p className="text-sm">200+ reports</p>
      </div>

      {/* Industry Info */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold">{label}</h3>
        <p className="text-sm">
          {truncateText(
            summary ||
              "Dummy text: Showing because summary is empty now. It will replace when summary comes from backend.",
            130
          )}
        </p>
      </div>
    </Link>
  );
};

export default IndustryCard;
