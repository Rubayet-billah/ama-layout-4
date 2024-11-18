/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import InputText from "@/components/ui/forms/InputText";
import { countryList } from "@/db/countryList";
import { RefreshCcw } from "react-feather";
import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { pubCode } from "@/constants/constants";

const ContactForm = ({
  btnText = "Submit",
  slug = "",
  status = "NOPN",
  direct = false,
  price = {},
  reportTitle = "Report Link",
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const canvasRef = useRef(null);
  const [error, setError] = useState("");
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
    service_type: pubCode,
    status: status,
    direct: direct,
    report_page_link: `${process.env.BASE_URL}/reports/${slug}`,
    report_name: reportTitle,
  });
  const router = useRouter();
  const pathname = usePathname();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/.test(
        formData.phone
      )
    ) {
      setError("Invalid phone number");
      return false;
    }
    if (captcha !== userInput) {
      setError("Wrong captcha");
      return false;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
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
      return;
    } else {
      try {
        setSubmitted(true);
        await fetch("/api/email", {
          method: "POST",
          body: JSON.stringify({
            ...formData,
            subject: "Contact Request",
          }),
        });
        await fetch(`https://www.advancemarketreport.com/api/v1/lead`, {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify(
            !direct
              ? formData
              : {
                  ...formData,
                  order: { paymentMode: paymentMethod, amount: price },
                }
          ),
        });
        router.push(`${pathname}/thank-you`);
      } catch (error) {
        console.log("error", error);
      }
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const generateCaptcha = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setCaptcha(randomNum.toString());
    drawCaptcha(randomNum.toString());
  };

  const drawCaptcha = (captcha) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#3498db";
      ctx.font = "24px Arial";
      ctx.fillText(captcha, 10, 30);
    }
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          <InputText
            name="full_name"
            placeholder="Enter your name *"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <InputText
            name="email"
            type="email"
            placeholder="Enter your email *"
            value={formData.email}
            onChange={handleInputChange}
            required
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
            placeholder="Enter your contact *"
            value={formData.contact}
            onChange={handleInputChange}
            required
          />
          <InputText
            name="company_name"
            placeholder="Enter your company *"
            value={formData.company}
            onChange={handleInputChange}
            required
          />
          <InputText
            name="designation"
            placeholder="Enter your designation *"
            value={formData.designation}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="comment"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleInputChange}
            className={
              "md:col-span-2 textarea rounded-sm textarea-sm bg-neutral placeholder:text-accent focus:outline-none"
            }
          ></textarea>
        </div>
        {direct && (
          <div className="my-4">
            <label className="block mb-2 font-semibold">Payment Method:</label>
            <div className="">
              <input
                type="radio"
                name="paymentMethod"
                value="razorpay"
                checked={paymentMethod === "razorpay"}
                onChange={handlePaymentMethodChange}
              />
              <input
                type="radio"
                name="paymentMethod"
                value="hdfc"
                checked={paymentMethod === "hdfc"}
                onChange={handlePaymentMethodChange}
              />
              <input
                type="radio"
                name="paymentMethod"
                value="amex"
                checked={paymentMethod === "amex"}
                onChange={handlePaymentMethodChange}
              />
              <input
                type="radio"
                name="paymentMethod"
                value="Wire_transfer"
                checked={paymentMethod === "Wire_transfer"}
                onChange={handlePaymentMethodChange}
              />
            </div>
          </div>
        )}
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
        {/* <button
          type="submit"
          className="px-4 py-2 mt-5 text-sm text-white rounded bg-primary"
        >
          {submitted ? "Submitting.." : btnText}
        </button> */}
        <div className="mt-5">
          <Button htmlType="submit">Submit Request</Button>
        </div>
      </form>
      <p className="my-5 text-sm">
        We do not share your information with anyone. However, we may send you
        emails based on your report interest from time to time. You may contact
        us at any time to opt-out.
      </p>
    </>
  );
};

export default ContactForm;
