"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import { Download, HelpCircle, Tag, X } from "react-feather";
import CheckoutForm from "../checkout/components/CheckoutForm";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CustomLink from "../ui/Link";
import ClickAnimation from "./ClickAnimation";
import "./ClickAnimation.css";

export default function Forms({ slug = "" }) {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const [type, setType] = useState("");

  const handleFormData = async (data) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhc2lyLmJzbXJzdHVAZ21haWwuY29tIiwicm9sZSI6eyJuYW1lIjoiYWRtaW4iLCJpZCI6IjY0Mjg2ZjU5Y2E5ODU4MDJiMDQ2MDg4NSJ9LCJpYXQiOjE2OTM1NzUxMjMsImV4cCI6MTY5Mzc3NTEyM30.HT00apprh6glUevBzUYRQtTYjeQ2H-AGs5zDk2kb1SY"
    );
    myHeaders.append("Content-Type", "application/json");
    // Check if any required field is empty
    const requiredFields = [
      "full_name",
      "email",
      "country",
      "phone",
      "company_name",
      "designation",
    ];
    const isAnyFieldEmpty = requiredFields.some((field) => !data[field]);

    if (isAnyFieldEmpty) {
      alert("Please fill in all required fields.");
      return; // Stop submission
    } else {
      try {
        setSubmitted(true);
        const res = await fetch(
          `https://www.advancemarketreport.com/api/v1/lead`,
          {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data),
          }
        );
        const resData = await res.json();
        router.push("/thank-you");
      } catch (error) {
        console.log("error", error);
      }
      document.getElementById("request_form").close();
    }
  };
  return (
    <div className="flex flex-col gap-6 p-4 mx-4 mb-5 text-sm xl:text-base">
      <Link
        href={`/report/${slug}/sample-report`}
        className={
          "text-sm flex items-center justify-start gap-3 px-4 py-2 rounded font-semibold hover:text-neutral hover:shadow hover:scale-110 duration-100 bg-primary text-white relative animate-shakeme-button"
        }
      >
        <Download className="text-secondary" />
        <span className="uppercase">Get Free Sample</span>

        <ClickAnimation />
      </Link>

      <Link
        href={`/report/${slug}/enquiry-before-buy`}
        className={
          "text-sm flex items-center justify-start gap-3 px-4 py-2 rounded font-semibold hover:text-neutral hover:shadow duration-100 bg-primary text-white"
        }
      >
        <HelpCircle className="text-secondary" />{" "}
        <span className="uppercase ">Pre Order Enquiry</span>
      </Link>
      <Link
        href={`/report/${slug}/request-discount`}
        className={
          "text-sm flex items-center justify-start gap-3 px-4 py-2 rounded font-semibold hover:text-neutral hover:shadow duration-100 bg-primary text-white"
        }
      >
        <Tag className="text-secondary" />{" "}
        <span className="uppercase">Request discount</span>
      </Link>
    </div>
  );
}
