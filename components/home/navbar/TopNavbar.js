import CustomContainer from "@/components/ui/CustomContainer";
import Link from "next/link";
import React from "react";
import { Mail, Phone, User } from "react-feather";
import NavbarSearch from "./NavbarSearch";
import { salesEmail } from "@/constants/constants";

const TopNavbar = () => {
  return (
    <div className="relative bg-accent">
      <CustomContainer>
        <section className="items-center hidden gap-4 py-4 text-sm text-white lg:grid lg:grid-cols-2 xl:text-base">
          <div className="flex gap-4 xl-gap-6">
            <p className="flex items-center gap-1">
              <Phone className="text-primary" size={18} />
              <span>+1 2017933837</span>
            </p>
            <p className="flex items-center gap-1">
              <Phone className="text-primary" size={18} />
              <span>+44 20 7097 9277</span>
            </p>
            <p></p>
          </div>
          <div className="flex justify-end gap-4">
            <p className="flex items-center gap-1 mr-4">
              <Mail className="text-primary" size={18} />
              {salesEmail}
            </p>
          </div>
          {/* <NavbarSearch /> */}
        </section>
      </CustomContainer>
      {/* <div className="absolute top-0 right-0 z-10 w-1/3 h-full bg-secondary"></div> */}
    </div>
  );
};

export default TopNavbar;
