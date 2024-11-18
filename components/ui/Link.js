import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const CustomLink = ({ children, type = "primary", classNames, href = "#" }) => {
  const buttonStyles = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-primary",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
  };

  const linkClass = twMerge(
    `flex items-center justify-center gap-1 px-4 py-2 rounded font-semibold hover:text-neutral hover:shadow duration-100 ${buttonStyles[type]}`,
    classNames
  );

  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
};

export default CustomLink;
