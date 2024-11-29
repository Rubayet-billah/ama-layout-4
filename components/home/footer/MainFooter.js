import React from "react";
import logo from "@/assets/logo3.png";
import Image from "next/image";
import {
  Clock,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "react-feather";
import Link from "next/link";
import CustomContainer from "@/components/ui/CustomContainer";
import SubscribeForm from "./SubscribeForm";
import { salesEmail } from "@/constants/constants";
import { fetchParentCategories } from "@/utils/fetchFunctions";

const MainFooter = async () => {
  const parentCategories = await fetchParentCategories();
  const currentYear = new Date().getFullYear();
  const copyrightMsg = "AMA Research. All rights reserved";

  return (
    <footer className="bg-primary">
      <CustomContainer>
        <div className="grid grid-cols-1 gap-8 py-8 text-white md:grid-cols-2 lg:grid-cols-4 lg:py-12">
          <address className="w-full py-4 space-y-3 not-italic">
            <h3 className="text-2xl font-bold">Business Address</h3>
            <h3 className="text-2xl font-bold">Head Office</h3>
            <p className="flex gap-2">
              <MapPin className="w-[46px] text-secondary mt-1" size={18} />
              <span>
                Office no. A 5010, fifth floor, Solitaire Business Hub, Near
                Phoenix mall, Pune, Maharashtra 411014
              </span>
            </p>
          </address>
          <div className="w-full py-4 space-y-3">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <div className="flex flex-col">
              <p>Craig Francis</p>
              <p className="text-sm text-accent">Business Development Head</p>
            </div>
            <p className="flex items-center gap-2">
              <PhoneCall className="text-secondary" size={18} />{" "}
              <span>+1 940 441 3937</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="text-secondary" size={18} />
              <span className="">{salesEmail}</span>
            </p>
          </div>
          <nav className="w-full py-4 space-y-3">
            <h3 className="pb-2 text-2xl font-bold border-b">Extra Links</h3>
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-2">
                <Link className="hover:text-secondary" href="/about">
                  About
                </Link>
                <Link className="hover:text-secondary" href="/contact">
                  Contacts
                </Link>
                <Link className="hover:text-secondary" href="/#testimonial">
                  Testimonials
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link className="hover:text-secondary" href="/service">
                  Services
                </Link>
                <Link className="hover:text-secondary" href="/career">
                  Career
                </Link>
                {/* <Link href="/about">Our approach</Link> */}
              </div>
            </div>
          </nav>
          <div className="w-full py-4 space-y-3">
            <h3 className="pb-2 text-2xl font-bold">Subscribe</h3>
            <div>
              <SubscribeForm />
            </div>
            <p className="pt-8 text-sm">Get the latest updates and offers.</p>
          </div>
        </div>
        <nav className="mb-5 text-xs text-white lg:text-sm">
          <div className="grid grid-cols-3 gap-2 lg:grid-cols-6 lg:gap-x-4">
            {[...parentCategories]
              ?.sort((a, b) => a.label.length - b.label.length)
              ?.filter(
                (ct) => ct.label !== "Professional and Commercial Services"
              )
              ?.map((ct, idx) => (
                <Link
                  key={idx}
                  href={`/industries/${ct.link}`}
                  className="hover:text-secondary"
                >
                  {ct?.label}
                </Link>
              ))}
          </div>
        </nav>
        <hr />
        <div className="py-6 space-y-3 text-sm text-white md:flex md:justify-between md:space-y-0">
          <p>© {`${currentYear} ${copyrightMsg}`}</p>
          <nav className="items-center gap-2 md:flex lg:gap-4">
            <div className="flex gap-2 md:mr-10">
              <Link className="hover:text-secondary" href="/testimonials">
                Testimonials
              </Link>
              <hr className="w-0 h-auto border" />
              <Link className="hover:text-secondary" href="/privacy-policy">
                Privacy Policy
              </Link>
              <hr className="w-0 h-auto border" />
              <Link
                className="hover:text-secondary"
                href="/terms-and-condition"
              >
                Terms and Conditions
              </Link>
              <hr className="w-0 h-auto border" />
              <Link className="hover:text-secondary" href="/faq">
                FAQ
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 lg:gap-4 md:mt-0">
              <Link
                href="https://www.facebook.com/advancemarketanalytics"
                target="_blank"
                aria-label="Facebook link"
                className="hover:text-secondary"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://twitter.com/amareport"
                target="_blank"
                aria-label="Twitter link"
                className="hover:text-secondary"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/advance-market-analytics"
                target="_blank"
                aria-label="LinkedIn link"
                className="hover:text-secondary"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </nav>
        </div>
      </CustomContainer>
    </footer>
  );
};

export default MainFooter;
