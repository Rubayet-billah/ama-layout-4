import React from "react";

export default function Tooltip({ text = "", children }) {
  return (
    <div
      className="tooltip tooltip-primary z-40 text-left before:w-[20rem] before:content-[attr(data-tip)]"
      data-tip={text}
    >
      {children}
    </div>
  );
}
