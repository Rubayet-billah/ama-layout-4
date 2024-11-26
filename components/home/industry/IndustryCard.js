"use client";
import LucidIcon from "@/components/ui/icons/LucidIcons";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight, Minus, Plus } from "react-feather";

const IndustryCard = ({ industry }) => {
  const { label, summary, icon, link } = industry;
  const [isOpen, setIsOpen] = useState(false);

  const truncateText = (text, maxLength) => {
    return text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="p-0 mb-2 text-white border rounded bg-neutral collapse">
      <input
        className="p-0"
        onClick={() => setIsOpen(!isOpen)}
        type="checkbox"
      />
      <div className="flex items-center justify-between px-4 py-1 font-medium collapse-title ">
        <div className="flex items-center gap-2">
          {icon && (
            <div className="">
              <LucidIcon name={icon} classNames="text-secondary" size={30} />
            </div>
          )}
          <h3 className="text-xl font-bold">{label}</h3>
        </div>
        <span>{isOpen ? <Minus /> : <Plus />}</span>
      </div>
      <div className="collapse-content">
        <p className="text-sm">
          {truncateText(
            summary ||
              "Dummy text: Showing because summary is empty now. It will replace when summary comes from backend.",
            130
          )}
        </p>
        <Link
          href={`/industries/${link}`}
          className="flex items-center gap-2 mt-3 text-secondary"
        >
          Explore reports <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
};

export default IndustryCard;
