/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import InputText from "@/components/ui/forms/InputText";
import React, { useEffect, useRef, useState } from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { countryList } from "@/db/countryList";
import InputRadio from "../ui/forms/InputRadio";
import Image from "next/image";
import visaLogo from "@/assets/checkout/visaLogo.jpg";
import bankLogo from "@/assets/checkout/bankLogo.png";
import Amex from "@/assets/checkout/amex.jpg";
import Hdfc from "@/assets/checkout/hdfc.jpg";
import Razorpay from "@/assets/checkout/razorpay.jpg";
import Wire_transfer from "@/assets/checkout/wire_transfer.jpg";
import Captcha from "./Capcha";
import { RefreshCcw } from "react-feather";
import Link from "next/link";
import Sponsors from "../home/Sponsors";
import { fetchSponsorLogosClient } from "@/utils/fetchFunctions";
import SponsorSlider from "../home/sponsor/SponsorSlider";
import Button from "../ui/Button";
import { pubCode } from "@/constants/constants";
const QueryForm = ({
  btnText = "Submit",
  type = pubCode,
  slug = "",
  status = "NOPN",
  direct = false,
  price = {},
  reportTitle = "Report Link",
}) => {
  const [reportPrice, setReportPrice] = useState(0);
  const searchParams = useSearchParams();
  const priceType = searchParams.get("type");
  useEffect(() => {
    if (priceType) {
      switch (priceType) {
        case "single":
          setReportPrice(price.singlePrice);
          break;
        case "multi":
          setReportPrice(price.multiPrice);
          break;
        case "corporate":
          setReportPrice(price.enterprisePrice);
          break;

        default:
          break;
      }
    }
  }, []);

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
    service_type: type,
    status: status,
    direct: direct,
    // paymentMethod: "visa", // Default payment method
    report_page_link: `${process.env.BASE_URL}/reports/${slug}`,
    report_name: reportTitle,
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
        await fetch("/api/email", {
          method: "POST",
          body: JSON.stringify({
            ...formData,
            subject:
              type === "SWA"
                ? "Speak To Analyst Request"
                : type === "RSR"
                ? "Request Sample for Report"
                : type === "OBD"
                ? "Payment Request for Report"
                : type === "RDR"
                ? "Payment Discount for Report"
                : type === "EBB"
                ? "Enquiry Before Buy for Report"
                : "",
            paymentMode: paymentMethod,
            amount: reportPrice,
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
                  order: {
                    paymentMode: paymentMethod,
                    amount: reportPrice,
                  },
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
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 6 digit random number
    setCaptcha(randomNum.toString());
    drawCaptcha(randomNum.toString());
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

  const getSponsorsHome = async () => {
    setSponsorsHome(await fetchSponsorLogosClient());
  };
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  useEffect(() => {
    generateCaptcha();
    getSponsorsHome();
    const url = `${pathname}?${searchParams}`;
    return;
  }, []);
  return (
    <>
      {direct && (
        <>
          <hr className="mt-5" />
          <div className="flex items-center justify-between">
            <div className="my-5 text-2xl font-semibold ">
              Total Amount: ${reportPrice}
            </div>
            <select
              value={reportPrice}
              onChange={(e) => setReportPrice(e.target.value)}
              className="select select-bordered focus:outline-none"
            >
              <option className="py-2" value={price.singlePrice}>
                Single User License - ${price.singlePrice}{" "}
              </option>
              <option value={price.multiPrice}>
                Multy User License - ${price.multiPrice}
              </option>
              <option value={price.enterprisePrice}>
                Corporate License - ${price.enterprisePrice}
              </option>
            </select>
          </div>
        </>
      )}
      <h3 className="mt-4">Our Clients</h3>
      <div className="py-0">
        <SponsorSlider sponsors={sponsorsHome} />
      </div>
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
              "md:col-span-2 textarea rounded-sm textarea-sm bg-neutral placeholder:text-accent focus:outline-none"
            }
          ></textarea>
        </div>
        {/* Payment method radio inputs */}
        {direct && (
          <div className="my-4">
            <label className="block mb-2 font-semibold">Payment Method:</label>
            <div className="">
              <InputRadio
                name="paymentMethod"
                value="razorpay"
                checked={paymentMethod === "razorpay"}
                onChange={handlePaymentMethodChange}
                label={
                  <Image
                    hight={100}
                    width={200}
                    style={{ height: "30px", width: "auto" }}
                    src={Razorpay}
                    alt="bank image"
                  />
                }
              />
              <InputRadio
                name="paymentMethod"
                value="hdfc"
                checked={paymentMethod === "hdfc"}
                onChange={handlePaymentMethodChange}
                label={
                  <Image
                    hight={100}
                    width={200}
                    style={{ height: "30px", width: "auto" }}
                    src={Hdfc}
                    alt="bank image"
                  />
                }
              />
              <InputRadio
                name="paymentMethod"
                value="amex"
                checked={paymentMethod === "amex"}
                onChange={handlePaymentMethodChange}
                label={
                  <Image
                    hight={100}
                    width={200}
                    style={{ height: "30px", width: "auto" }}
                    src={Amex}
                    alt="bank image"
                  />
                }
              />
              <InputRadio
                name="paymentMethod"
                value="Wire_transfer"
                checked={paymentMethod === "Wire_transfer"}
                onChange={handlePaymentMethodChange}
                label={
                  <Image
                    hight={100}
                    width={200}
                    style={{ height: "30px", width: "auto" }}
                    src={Wire_transfer}
                    alt="bank image"
                  />
                }
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
        {direct && (
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="w-5 h-5 mr-1"
            />
            <span>
              I read and Accept the{" "}
              <Link
                className="text-secondary"
                target="_blank"
                href={`/terms-and-condition`}
              >
                Terms and Conditions
              </Link>
            </span>
          </div>
        )}
        {error && <div className="font-semibold text-error"> {error} </div>}
        {/* <button
          //   disabled={submitted}
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
        us at any time to opt-out.{" "}
      </p>
    </>
  );
};

export default QueryForm;
