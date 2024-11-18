"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Minus, Plus } from "react-feather";

const FAQAccordion = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-0 mb-2 border rounded bg-neutral collapse">
      <input
        className="p-0"
        onClick={() => setIsOpen(!isOpen)}
        type="checkbox"
      />
      <div className="flex items-center justify-between px-4 py-1 font-medium collapse-title ">
        <p> {item?.question} </p>
        <span>{isOpen ? <Minus /> : <Plus />}</span>
      </div>
      <div className="collapse-content">
        <p className="text-sm text-accent">{item?.answer}</p>
      </div>
    </div>
  );
};

export default FAQAccordion;
