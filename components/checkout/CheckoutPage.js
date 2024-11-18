"use client";
import React, { useState } from "react";
import CustomContainer from "../ui/CustomContainer";
import CheckoutForm from "./components/CheckoutForm";
import { useRouter } from "next/navigation";

const CheckoutPage = ({ title }) => {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const [type, setType] = useState("");
  const handleFormData = async (data) => {
    const myHeaders = new Headers();
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
    }
  };
  return (
    <div>
      <CustomContainer classNames="mb-12">
        <section className="my-5">
          <div className="py-2 space-y-2">
            <h1 className="text-lg font-semibold md:text-2xl text-primary">
              {title}
            </h1>
            {/* <p className="">
              Asia Pacific Offshore Wind Market Research Report - Information By
              Technology (Wind Energy, Wave Energy, Tidal Stream, Ocean Thermal
              Energy Conversion (OTEC), and Other Technologies) –and Asia
              Pacific Market Forecast Till 2032
            </p>
            <p>
              <span className="font-bold">Edition: </span>
              <span>Single User</span>
            </p> */}
          </div>
          {/* <div className="py-2">
            <p className="font-bold">Subtotal: $3000</p>
          </div>
          <div className="py-2">
            <p className="font-bold">Discount: $0</p>
          </div>
          <div className="py-2">
            <p className="font-bold">Total: $3000</p>
          </div> */}
        </section>
        <section>
          <CheckoutForm
            btnText={submitted ? "Submitting" : "Send Buy Request"}
            handleFormData={handleFormData}
          />
        </section>
      </CustomContainer>
    </div>
  );
};

export default CheckoutPage;
