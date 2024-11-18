/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { RefreshCcw } from "react-feather";

const Captcha = ({ onValidate }) => {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const canvasRef = useRef(null);

  const generateCaptcha = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 6 digit random number
    setCaptcha(randomNum.toString());
    drawCaptcha(randomNum.toString());
  };

  const drawCaptcha = (captcha) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawing
    ctx.fillStyle = "#3498db"; // Set color, example using a hex code for a shade of blue
    ctx.font = "24px Arial"; // You can also customize the font size and family here
    ctx.fillText(captcha, 10, 30); // Draw the captcha text
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === captcha) {
      onValidate(true);
    } else {
      onValidate(false);
      generateCaptcha(); // Refresh captcha for a new try
      setUserInput(""); // Reset user input
    }
  };
  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="flex mt-5 items-center">
      <input
        className="input h-9 input-bordered rounded-sm w-40"
        type="text"
        value={userInput}
        onChange={handleChange}
        placeholder="Enter CAPTCHA"
      />
      <canvas color="red" ref={canvasRef} width="80" height="40"></canvas>
      <button type="button text-primary" onClick={generateCaptcha}>
        <RefreshCcw />
      </button>
    </div>
  );
};

export default Captcha;
