"use client";
import InputText from "@/components/ui/forms/InputText";
import React from "react";
import { Mail } from "react-feather";

const SubscribeForm = () => {
  return (
    <form className="flex items-center h-8">
      <label className="hidden" htmlFor="subscriptionEmail">
        Subscribe
      </label>
      <InputText
        classNames={
          "w-full h-full text-black border-2 border-primary focus:outline-none"
        }
        name="subscriptionEmail"
        type="email"
        label="Your Email Address:"
        placeholder="you@example.com"
      />
      <button className="block h-full px-2 bg-primary" aria-label="Subscribe">
        <Mail size={22} color="black" />
      </button>
    </form>
  );
};

export default SubscribeForm;
