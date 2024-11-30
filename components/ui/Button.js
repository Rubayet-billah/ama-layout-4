"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  classNames,
  onClick = () => {},
  htmlType = "button",
}) => {
  const buttonStyles = {
    primary: "bg-primary text-white hover:bg-neutral hover:text-white",
    secondary: "bg-secondary text-white hover:bg-neutral hover:text-white",
    tertiary: "bg-tertiary text-white hover:bg-accent hover:text-neutral",
    neutral: "bg-neutral text-white hover:bg-accent hover:text-neutral",
    light: "bg-white text-primary hover:bg-tertiary hover:text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
  };

  const buttonClass = twMerge(
    "flex items-center justify-center gap-1 px-4 py-2 rounded font-semibold hover:shadow duration-100",
    buttonStyles[variant] || buttonStyles.primary,
    clsx(classNames)
  );

  return (
    <button
      type={htmlType}
      onClick={onClick}
      className={buttonClass}
      style={{
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
