import ContactUsPage from "@/components/contacts/ContactUsPage";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import React from "react";
export const metadata = {
  title: "Market Insights Report: Contact Us",
};
const ContactUs = () => {
  return (
    <>
      <Header />
      <ContactUsPage />
      <Footer />
    </>
  );
};

export default ContactUs;
