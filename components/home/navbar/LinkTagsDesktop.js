"use client";
import React from "react";
import { ChevronDown } from "react-feather";
import Link from "next/link";
import LucidIcon from "@/components/ui/icons/LucidIcons";
import { usePathname } from "next/navigation";
import { links } from "@/constants/constants";
import { color } from "framer-motion";

const LinkTagsDesktop = ({ parentCategories }) => {
  const pathname = usePathname();
  return (
    <ul className="px-4 font-medium lg:w-full lg:max-w-3xl xl:text-base menu menu-horizontal lg:justify-between">
      {links?.map((link, index) => (
        <li
          key={index}
          className={`px-4 cursor-pointer ${
            link.submenus ? "group relative dropdown" : ""
          } ${pathname == link.url ? "text-secondary" : ""}`}
        >
          <Link
            className={`p-0 hover:text-secondary`}
            href={link.url}
            style={{
              backgroundColor: "transparent",
              // color: "inherit",
            }}
          >
            {link.text} {link.submenus && <ChevronDown size={16} />}
          </Link>
          {/* Render submenus if they exist */}
          {link.submenus && (
            <div
              className="absolute hidden h-auto group-hover:block dropdown-menu"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <ul className="top-0 z-10 grid grid-cols-2 gap-2 p-4 bg-[#172153] rounded shadow w-[576px]">
                {parentCategories?.map((submenu) => (
                  <li key={submenu.id} className="py-1">
                    <Link
                      href={`/industries/${submenu.link}`}
                      className="inline-flex items-center p-0 text-white cursor-pointer hover:text-secondary"
                      style={{
                        backgroundColor: "transparent",
                      }}
                    >
                      <LucidIcon name={submenu.icon} size={20} />
                      <span> {submenu.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default LinkTagsDesktop;
