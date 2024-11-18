/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CustomContainer from "../ui/CustomContainer";
import carrerBg from "@/assets/career/careerBg4.jpeg";
import { ChevronRight } from "react-feather";
import Link from "next/link";
import { websiteTitle } from "@/constants/constants";

const TermsAndConditionPage = () => {
  return (
    <div>
      <section
        className="text-white"
        style={{
          backgroundImage: `url(${carrerBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="py-12 bg-opacity-50 bg-primary">
          <CustomContainer>
            <p className="flex flex-wrap items-center gap-[2px] text-xs">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <ChevronRight size={10} />
              <Link href="/terms-and-condition" className="hover:text-primary">
                Terms and Conditions
              </Link>
            </p>
            <h1 className="mt-4 text-2xl font-bold text-white lg:text-3xl">
              Terms and Conditions
            </h1>
            <hr className="w-12 mt-2 border-t-4 border-b-4 border-white rounded" />
          </CustomContainer>
        </div>
      </section>
      <CustomContainer classNames="py-5 md:py-10">
        <p className="mb-5">
          {websiteTitle} and its affiliates provide their services to you
          subject to the following conditions. If you visit or shop at
          {process.env.BASE_URL}, you accept these conditions. Please read them
          carefully. We reserve the right from time to time to make changes to
          these Terms and Conditions at our absolute discretion. The Terms and
          Conditions applying to each transaction with us are those which are
          available on the website at the time when you place your order, and it
          is your responsibility to check the Terms and Conditions before
          placing an order.
        </p>
        <h2 className="mb-4 text-xl font-semibold">Privacy Notice</h2>
        <p className="mb-5">
          Our Privacy Notice is at the base of these Terms and Conditions and
          governs your visit to {process.env.BASE_URL}. Please read it carefully
          so that you understand our practices.
        </p>

        <h2 className="mb-4 text-xl font-semibold">Copyright</h2>
        <p className="mb-5">
          All content included on this site, such as text, graphics, logos,
          button icons, images, audio clips, digital downloads, data
          compilations, and software is the property of {websiteTitle}
          or its content suppliers and protected by international copyright
          laws. The compilation of all content on this site is the exclusive
          property of {websiteTitle} and protected by international copyright
          laws.
        </p>
        <p className="mb-5">
          You agree not to copy, reproduce, duplicate, sell, resell, or exploit
          for any commercial purposes, any portion of the Site, use of the Site,
          or access to the Site. You may not re-use and/or extract part of the
          content of this website without {websiteTitle}'s express consent in
          writing.
        </p>
        <h2 className="mb-4 text-xl font-semibold">Our Contract</h2>
        <p className="mb-5">
          Once you place an order for a product listed on our website, payment
          for that product becomes due and owing immediately. Notwithstanding
          the fact that the product will not be dispatched until the price of
          the product(s) and service(s) are received in full, you are liable to
          pay {websiteTitle} all amounts due on foot of the order. Once we
          receive your order, we have to purchase the product from the
          publisher, process the payment, and arrange the shipping. Because of
          this element of work involved, we regret that it is not possible for
          an order to be canceled once it is submitted. {websiteTitle}
          will not be responsible for any delay or failure to comply with our
          obligations under our contract with you where such delay or failure
          arises from any cause which is beyond our reasonable control.
        </p>
        <h2 className="mb-4 text-xl font-semibold">License and Site Access</h2>
        <p className="mb-5">
          {websiteTitle} grants you a limited revocable license to create a link
          to the home page of {process.env.BASE_URL}
          provided that the link does not portray
          {process.env.BASE_URL}, its associated companies, or its products in a
          negative, defamatory, derogatory, or misleading way.
        </p>
        <p className="mb-5">
          You may not use any {websiteTitle} logos, graphics, or trademarks as
          part of the link without our express consent in writing.
        </p>
        <p className="mb-5">
          Access and make personal use of this site but not to download (other
          than page caching) or modify it or any portion of it, except with the
          express written consent of {websiteTitle}.
        </p>
        <h2 className="mb-4 text-xl font-semibold">Product Descriptions</h2>
        <p className="mb-5">
          {websiteTitle} and its affiliates attempt to be as accurate as
          possible. However, {websiteTitle} does not warrant that product
          descriptions or other content on this site are accurate, complete,
          reliable, current, or error-free.
        </p>
        <h2 className="mb-4 text-xl font-semibold">Product Pricing</h2>
        <p className="mb-5">
          We offer consistently low prices on all market research, newsletters,
          directories, training materials, CD-ROMs, and related products. All
          prices are listed in USD. Despite our best efforts, a small number of
          the items in our catalog may be mispriced. Rest assured, however, that
          we verify the prices of products sold and shipped by Market Research
          Forecast as part of our shipping procedures.
        </p>
        {/* Other sections can be added similarly */}
      </CustomContainer>
    </div>
  );
};

export default TermsAndConditionPage;
