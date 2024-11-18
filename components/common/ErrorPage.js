/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import { Home } from "react-feather";
import QueryForm from "./QueryForm";
import { RefreshCcw } from "lucide-react";
import InputRadio from "../ui/forms/InputRadio";
import Image from "next/image";
import InputText from "../ui/forms/InputText";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { countryList } from "@/db/countryList";
import { pubCode } from "@/constants/constants";

export default function ErrorPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [submitted, setSubmitted] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [checked, setChecked] = useState(true);
  const canvasRef = useRef(null);
  const [error, setError] = useState("");
  const [sponsorsHome, setSponsorsHome] = useState([]);

  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    country: "",
    phone: "",
    company_name: "",
    designation: "",
    comment: "",
    industry: pubCode,
    service_type: "SWA",
    direct: "false",
    // paymentMethod: "visa", // Default payment method
    report_page_link: process.env.BASE_URL,
    report_name: "Request",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captcha !== userInput) {
      setError("Wrong captcha");
      return false;
    }
    if (!checked) {
      setError("Please accept the terms and conditions");
      return false;
    }
    if (
      !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
        formData.phone
      )
    ) {
      setError("Invalid phone number");
      return false;
    }
    const myHeaders = new Headers();
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
    const isAnyFieldEmpty = requiredFields.some((field) => !formData[field]);

    if (isAnyFieldEmpty) {
      alert("Please fill in all required fields.");
      return; // Stop submission
    } else {
      try {
        setSubmitted(true);
        await fetch(`https://www.advancemarketreport.com/api/v1/lead`, {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(formData),
        });
        await fetch("/api/email", {
          method: "POST",
          body: JSON.stringify({
            ...formData,
            subject: "Report Request",
          }),
        });
        router.push(`/thank-you`);
      } catch (error) {
        console.log("error", error);
      }
    }
  };
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const drawCaptcha = (captcha) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawing
      ctx.fillStyle = "#3498db"; // Set color, example using a hex code for a shade of blue
      ctx.font = "24px Arial"; // You can also customize the font size and family here
      ctx.fillText(captcha, 10, 30); // Draw the captcha text
    }
  };
  const generateCaptcha = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 6 digit random number
    setCaptcha(randomNum.toString());
    drawCaptcha(randomNum.toString());
  };
  useEffect(() => {
    generateCaptcha();
    return;
  }, []);
  return (
    <div className="lg:px-16 px-5 pb-10 max-w-[1400px]">
      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="mb-4 text-center mrf-sub-heading text-primary">
          Error 404 - Report not found
        </h1>
        <p className="mb-8 text-center lg:text-xl">
          {`The report you're seeking is currently unavailable due to updates or a
          title change. In the meantime, share your specific needs with us, and
          we'll provide tailored analysis to meet your business goals.`}
        </p>
        <p>
          Please let us know which market research report you are interested in.
        </p>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
            <InputText
              name="full_name"
              placeholder="Enter your name *"
              value={formData.name}
              onChange={handleInputChange}
              required={true}
            />
            <InputText
              name="email"
              type="email"
              placeholder="Enter your email *"
              value={formData.email}
              onChange={handleInputChange}
              required={true}
              error="Please enter a valid email"
            />
            <select
              name="country"
              onChange={handleInputChange}
              className="w-full px-4 py-3 text-sm bg-neutral focus:outline-none"
            >
              <option value={""}>Select Country</option>
              {countryList.map((country) => (
                <option key={country.value} value={country.caption}>
                  {" "}
                  {country.caption}{" "}
                </option>
              ))}
            </select>
            <InputText
              name="phone"
              type="tel"
              placeholder="Enter your contact *"
              value={formData.contact}
              onChange={handleInputChange}
              required={true}
            />
            <InputText
              name="company_name"
              placeholder="Enter your company *"
              value={formData.company}
              onChange={handleInputChange}
              required={true}
            />
            <InputText
              name="designation"
              placeholder="Enter your designation *"
              value={formData.designation}
              onChange={handleInputChange}
              required={true}
            />
            <textarea
              name="comment"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
              className={
                "md:col-span-2 textarea rounded-sm textarea-sm bg-neutral placeholder:text-accent"
              }
            ></textarea>
          </div>

          <div className="flex items-center mt-5">
            <input
              className="w-40 rounded-sm input h-9 input-bordered"
              type="text"
              value={userInput}
              onChange={handleChange}
              placeholder="Enter CAPTCHA"
            />
            <canvas color="red" ref={canvasRef} width="80" height="40"></canvas>
            <button
              className="text-primary"
              type="button"
              onClick={generateCaptcha}
            >
              <RefreshCcw />
            </button>
          </div>

          {error && <div className="font-semibold text-error"> {error} </div>}
          <button
            //   disabled={submitted}
            type="submit"
            className="px-4 py-2 mt-5 text-sm text-white rounded bg-primary"
          >
            {submitted ? "Submitting.." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
