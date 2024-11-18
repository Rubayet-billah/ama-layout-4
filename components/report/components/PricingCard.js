"use client";

import Button from "@/components/ui/Button";
import Tooltip from "@/components/ui/Tooltip";
import Link from "next/link";
import React, { useState } from "react";
import { Info, ShoppingCart } from "react-feather";

const PlanOption = ({
  id,
  label,
  price,
  description,
  selectedPlan,
  onSelect,
}) => (
  <div className="flex items-center gap-2 my-1">
    <input
      className="w-4 h-4 radio radio-secondary"
      type="radio"
      id={id}
      name="plan"
      value={id}
      checked={selectedPlan === id}
      onChange={() => onSelect(id)}
    />
    <label className="cursor-pointer" htmlFor={id}>
      {label}
    </label>
    <span className="p-1 ml-auto text-sm font-bold text-secondary">
      ${price}
    </span>
    <div className="relative group">
      <Info className="z-10 cursor-pointer" />
      <div className="absolute right-0 z-40 hidden w-56 p-6 mt-2 bg-white border border-gray-300 rounded-lg bottom-8 group-hover:block">
        <div className="font-semibold">{label}:</div>
        <ul className="mt-1 ml-3 list-disc">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const PricingCard = ({ price = {}, slug = "" }) => {
  const [selectedPlan, setSelectedPlan] = useState("corporate");

  const planOptions = [
    {
      id: "single",
      label: "Single User License",
      price: price.singlePrice,
      description: [
        "Only one user can access this report at a time",
        "Users are not allowed to take a print out of the report PDF",
      ],
    },
    {
      id: "multi",
      label: "Multi User License",
      price: price.multiPrice,
      description: [
        "The report will be emailed to you in PDF format.",
        "Allows 1-10 employees within your organisation to access the report.",
      ],
    },
    {
      id: "corporate",
      label: "Corporate License",
      price: price.enterprisePrice,
      description: [
        "Sharable and Printable among all employees of your organization",
        "Excel Raw data with access to full quantitative & financial market insights",
        "Customization at no additional cost within the scope of the report",
        "Graphs and Charts can be used during presentation",
      ],
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="p-6 text-sm rounded bg-neutral">
      <h3 className="mb-4 text-xl font-bold">Pricing</h3>
      <form onSubmit={handleSubmit}>
        <section>
          {planOptions.map((option) => (
            <PlanOption
              key={option.id}
              id={option.id}
              label={option.label}
              price={option.price}
              description={option.description}
              selectedPlan={selectedPlan}
              onSelect={setSelectedPlan}
            />
          ))}
        </section>
        <div className="mt-4">
          <Link href={`/report/${slug}/checkout?type=${selectedPlan}`}>
            <Button htmlType="submit" classNames="btn-sm">
              <ShoppingCart size={16} /> Buy Now
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PricingCard;
