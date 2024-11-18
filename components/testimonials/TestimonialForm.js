/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import InputText from "@/components/ui/forms/InputText";
import Button from "@/components/ui/Button";
import { countryList } from "@/db/countryList";
import { useRouter } from "next/navigation";
import { CheckCircle, RefreshCcw } from "react-feather";
import { purposeOptions } from "@/constants/constants";

const SubmissionConfirmation = ({ name = "" }) => {
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center max-w-lg gap-4 mx-auto text-center">
        <div>
          <CheckCircle className="font-bold text-primary" size={80} />
        </div>
        <p>
          Hey <span className="font-semibold">{name}</span>
        </p>
        <p className="text-xl font-semibold">
          Thanks for your valuable feedback
        </p>
        <p className="text-accent">
          Your testimonial has been sent for review. It will be published soon.
        </p>
      </div>
    </div>
  );
};

const TestimonialForm = ({ btnText = "Submit" }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    company: "",
    occupation: "",
    purpose: "",
    image: "",
    testimonial: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false); // New state for showing confirmation
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(true);
  const canvasRef = useRef(null);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    if (captcha !== userInput) {
      setError("Wrong captcha");
      generateCaptcha(); // Refresh CAPTCHA on failure
      return;
    }

    if (!checked) {
      setError("Please accept the terms and conditions");
      return;
    }

    const requiredFields = [
      "name",
      "country",
      "company",
      "purpose",
      "testimonial",
    ];
    const isAnyFieldEmpty = requiredFields.some((field) => !formData[field]);
    if (isAnyFieldEmpty) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setSubmitted(true);
      await fetch(`${process.env.BASE_URL}/api/testimonial`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setShowConfirmation(true);
      setUserInput("");
      generateCaptcha(); // Regenerate CAPTCHA for future submissions
      // Hide confirmation message after 5 seconds
      setTimeout(() => {
        setShowConfirmation(false);
        // Reset the form data, user input, and CAPTCHA after successful submission
        setFormData({
          name: "",
          country: "",
          company: "",
          occupation: "",
          purpose: "",
          image: "",
          testimonial: "",
        });
      }, 5000);
    } catch (error) {
      setError("Submission error, please try again later.");
      console.error("Submission error:", error);
    } finally {
      setSubmitted(false);
    }
  };

  // Generate CAPTCHA
  const generateCaptcha = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000).toString();
    setCaptcha(randomNum);
    drawCaptcha(randomNum);
  };

  // Draw CAPTCHA on canvas
  const drawCaptcha = (captchaText) => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#3498db";
      ctx.font = "24px Arial";
      ctx.fillText(captchaText, 10, 30);
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, [showConfirmation]);

  return (
    <>
      {showConfirmation ? (
        <SubmissionConfirmation name={formData.name} />
      ) : (
        <>
          {" "}
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
              <InputText
                name="name"
                placeholder="Enter your name *"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-sm bg-neutral focus:outline-none"
              >
                <option value="">Select Country *</option>
                {countryList.map((country) => (
                  <option key={country.value} value={country.caption}>
                    {country.caption}
                  </option>
                ))}
              </select>
              <InputText
                name="company"
                placeholder="Enter your company *"
                value={formData.company}
                onChange={handleInputChange}
                required
              />
              <InputText
                name="occupation"
                placeholder="Enter your occupation *"
                value={formData.occupation}
                onChange={handleInputChange}
                required
              />
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-sm bg-neutral focus:outline-none md:col-span-2"
              >
                <option value="">Purpose of Report</option>
                {purposeOptions.map((option) => (
                  <option key={option.id} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
              <textarea
                name="testimonial"
                placeholder="Write Your Testimonial *"
                value={formData.testimonial}
                onChange={handleInputChange}
                className="rounded-sm md:col-span-2 textarea textarea-sm bg-neutral placeholder:text-accent focus:outline-none"
                required
              ></textarea>
            </div>

            <div className="flex items-center mt-5">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Enter CAPTCHA"
                className="w-40 rounded-sm input h-9 input-bordered"
              />
              <canvas ref={canvasRef} width="80" height="40"></canvas>
              <button
                type="button"
                onClick={generateCaptcha}
                className="text-primary"
              >
                <RefreshCcw />
              </button>
            </div>

            {error && <div className="font-semibold text-error"> {error} </div>}

            <div className="mt-5">
              <Button htmlType="submit">
                {submitted ? "Submitting.." : btnText}
              </Button>
            </div>
          </form>
          <p className="my-5 text-sm">
            We do not share your information with anyone. However, we may send
            you emails based on your testimonial interest from time to time. You
            may contact us at any time to opt-out.
          </p>
        </>
      )}
    </>
  );
};

export default TestimonialForm;
