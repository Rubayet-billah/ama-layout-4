/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import { X } from "react-feather";
import Button from "../Button";

const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show modal only if cookie consent has not been given
    const cookieConsent = localStorage.getItem("cookieAccept");
    setIsVisible(cookieConsent === null);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieAccept", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieAccept", "false");
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-0 z-50 max-w-3xl mx-5 bg-white border border-gray-200 rounded shadow-lg lg:left-5 lg:bottom-5">
        <div className="relative p-4">
          <div className="mb-4 text-sm text-gray-600 sm:mb-0">
            <p className="text-base font-semibold text-gray-800">
              We use cookies to enhance your experience.
            </p>
            <p className="mt-1">
              By clicking "Accept All", you consent to the use of all cookies.
            </p>
            <p>
              Customize your preferences or read our{" "}
              <a href="/privacy-policy" className="text-purple-600 underline">
                Cookie Policy
              </a>
              .
            </p>
          </div>
          <div className="flex items-center gap-4 mt-5">
            <Button onClick={handleAccept} classNames="btn-sm">
              Accept All
            </Button>
            <Button
              variant="secondary"
              onClick={handleDecline}
              classNames="btn-sm"
            >
              Decline
            </Button>
          </div>
          <button
            onClick={handleDecline} // Handle close with Decline to match behavior
            className="absolute p-1 duration-100 text-primary/50 top-2 right-2 hover:text-primary"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    )
  );
};

export default CookieModal;
