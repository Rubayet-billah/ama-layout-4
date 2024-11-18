"use client";
import LucidIcon from "@/components/ui/icons/LucidIcons";
import { links } from "@/constants/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

const LinkTags = ({ parentCategories }) => {
  const pathname = usePathname();
  const [isHovered, setIshovered] = useState(false);

  return (
    <>
      {links.map((link, index) => (
        <li key={index} className="text-base text-accent font-[500] mx-1">
          {link.submenus ? (
            <details>
              <summary
                onMouseOver={() => setIshovered(true)}
                onFocus={() => setIshovered(true)}
                onMouseLeave={() => setIshovered(false)}
                className={twMerge("px-2 py-1 rounded-sm text-accent")}
              >
                <Link
                  href={link.url}
                  className={twMerge(
                    "px-2 py-1 rounded-sm",
                    pathname === link.url
                      ? "text-primary"
                      : "hover:text-white hover:bg-primary"
                  )}
                >
                  {link.text}
                </Link>
              </summary>
              <ul className={`z-10 rounded lg:min-w-60`}>
                {parentCategories?.map((submenu, idx) => (
                  <li key={idx} className="flex flex-row items-center gap-2">
                    <LucidIcon classNames="p-0" name={submenu.icon} size={18} />
                    <Link
                      href={`/industries/${submenu.link}`}
                      className="py-[6px] rounded-sm px-0 hover:text-primary flex-1"
                    >
                      <span className="block">{submenu.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ) : (
            <Link
              href={link.url}
              className={twMerge(
                "px-2 py-1 rounded-sm hover:text-white hover:bg-primary",
                pathname === link.url ? "text-primary" : ""
              )}
            >
              {link.text}
            </Link>
          )}
        </li>
      ))}
    </>
  );
};

export default LinkTags;
