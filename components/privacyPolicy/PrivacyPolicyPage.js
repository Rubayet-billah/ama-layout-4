/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CustomContainer from "../ui/CustomContainer";
import carrerBg from "@/assets/career/careerBg4.jpeg";
import Link from "next/link";
import { ChevronRight } from "react-feather";
import { websiteTitle } from "@/constants/constants";

const PrivacyPolicyPage = () => {
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
              <Link href="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </p>
            <h1 className="mt-4 text-2xl font-bold text-white lg:text-3xl">
              Privacy Policy
            </h1>
            <hr className="w-12 mt-2 border-t-4 border-b-4 border-white rounded" />
          </CustomContainer>
        </div>
      </section>
      <CustomContainer classNames="py-5 md:py-10">
        <p className="mb-5">
          {websiteTitle} understands that you are concerned how information
          about you is used and shared, and we appreciate your trust our privacy
          policy aims to provide security and confidentiality to our client's
          data. Hence, our generated information and reports cannot be used by
          third persons or organizations for personal use and cannot be
          published or circulated anywhere without prior permission. They are
          only circulated for our client's needs. Any kind of duplication
          without prior authorization will result in a penalty. This notice
          describes our privacy policy. By visiting {websiteTitle}, you are
          accepting the practices described in this Privacy Notice.
        </p>
        <h2 className="mb-4 text-xl font-semibold">
          Types of Information We Gather:
        </h2>
        <p className="mb-5">
          <strong>Information You Provide Us:</strong> We receive and store any
          information you enter on our website or give us in any other way. You
          can choose not to provide certain information, but then you might not
          be able to take advantage of many of our features. We use the
          information that you provide for such purposes as responding to your
          requests, customizing future shopping for you, improving our products,
          and ease of communication with you.
        </p>
        <p className="mb-5">
          <strong>E-mail Communications:</strong> To help us make e-mails more
          useful and interesting, we often receive a confirmation when you open
          an e-mail from {websiteTitle} if your computer supports such
          capabilities. We also compare our customer list to lists received from
          other companies, in an effort to avoid sending unnecessary messages to
          our customers. If you do not want to receive e-mail or other mail from
          us, please adjust your Customer Communication Preferences.
        </p>
        <p className="mb-5">
          <strong>Automatic Information:</strong> We receive and store certain
          types of information whenever you interact with us. For example, like
          many websites, we use "cookies", and we obtain certain types of
          information when your web browser accesses {websiteTitle}.
        </p>
        <p className="mb-5">
          <strong>Information from Other Sources:</strong> We might receive
          information about you or your organization from other sources and add
          it to our account information.
        </p>
        <h2 className="mb-4 text-xl font-semibold">What about Cookies?</h2>
        <p className="mb-5">
          Cookies are alphanumeric identifiers that we transfer to your
          computer's hard drive through your web browser to enable our systems
          to recognize your browser and to provide additional features such
          personalized information and storage of items in your shopping cart
          between visits.
        </p>
        <p className="mb-5">
          The Help portion of the toolbar on most browsers will tell you how to
          prevent your browser from accepting new cookies, how to have the
          browser notify you when you receive a new cookie, or how to disable
          cookies altogether. However, cookies allow you to take full advantage
          of some of {websiteTitle}'s coolest features, and we recommend that
          you leave them turned on.
        </p>
        <h2 className="mb-4 text-xl font-semibold">
          Changes in this Privacy Statement
        </h2>
        <p className="mb-5">
          We reserve the right to modify this privacy statement at any time, so
          please review it frequently. If we make material changes to this
          policy, we will notify you here, by email, or by means of a notice on
          our home page.
        </p>
        <h2 className="mb-4 text-xl font-semibold">Legal Disclaimer</h2>
        <p className="mb-5">
          We reserve the right to disclose your personally identifiable
          information as required by law and when we believe that disclosure is
          necessary to protect our rights and/or to comply with a judicial
          proceeding, court order, or legal process served on our website.
        </p>
        <h2 className="mb-4 text-xl font-semibold">
          How Secure is Information About Me?
        </h2>
        <p className="mb-5">
          We protect the security of your information during transmission by
          using software, which encrypts information you input. It is important
          for you to protect against unauthorized access to your password and to
          your computer. Be sure to sign off when finished using a shared
          computer.
        </p>
        <h2 className="mb-4 text-xl font-semibold">Opt-in/Opt-out Methods</h2>
        <p className="mb-5">
          If you do not want to receive any e-mail or other mail from us, please
          visit: Unsubscribe Page
        </p>
        <p className="mb-5">
          If you wish to receive e-mail or other mail from us, please visit:
          Register Page
        </p>
      </CustomContainer>
    </div>
  );
};

export default PrivacyPolicyPage;
