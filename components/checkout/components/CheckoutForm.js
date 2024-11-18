"use client";
import InputRadio from "@/components/ui/forms/InputRadio";
import InputText from "@/components/ui/forms/InputText";
import Image from "next/image";
import React, { useState } from "react";
import visaLogo from "@/assets/checkout/visaLogo.jpg";
import bankLogo from "@/assets/checkout/bankLogo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { countryList } from "@/db/countryList";
import PricingCard from "@/components/report/components/PricingCard";
import { Book, Calendar, Grid, Layout } from "react-feather";
import moment from "moment";
import UserCard from "@/components/contacts/components/UserCard";
import QueryForm from "@/components/common/QueryForm";

const CheckoutForm = ({
  reportData,
  type = "OBD",
  title = "",
  status,
  direct = false,
}) => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:mt-5">
      <div className="lg:col-span-2 rd">
        <div className="justify-between md:flex">
          <h3> {title} </h3>
          <Link
            className="block px-8 py-1 mx-auto mt-5 font-semibold transition-all border border-primary rounded-2xl hover:bg-primary hover:text-white md:mt-0 w-fit md:mx-0"
            href={`/reports/${reportData?.report?.slug}`}
          >
            View Synopsis & Table of content
          </Link>
        </div>
        <Link
          href={`/reports/${reportData?.report?.slug}`}
          className="block mt-5 text-xl font-semibold md:text-2xl lg:text-3xl"
        >
          {reportData?.report?.title}{" "}
        </Link>
        <p className="mt-1"> {reportData?.report?.summery} </p>

        <QueryForm
          type={type}
          btnText="Submit Request"
          slug={reportData?.report?.slug}
          status={status}
          direct={direct}
          price={reportData?.report?.price}
          reportTitle={reportData?.report?.title}
        />
      </div>
      <div className="">
        <div>
          {!direct && (
            <PricingCard
              price={reportData?.report?.price}
              slug={reportData?.report?.slug}
            />
          )}

          <div className="my-5 rd">
            <h3>Key Highlights of Report</h3>
            <div className="flex w-full mt-5">
              <div className="grid flex-grow card bg-base-300 rounded-box place-items-start">
                <div className="flex items-center">
                  <Calendar size={20} className="mr-2" />{" "}
                  <span>
                    {moment(reportData?.report?.updatedAt).format("MMM, YYYY")}
                  </span>
                </div>
              </div>
              <div className="divider divider-horizontal divider-primary"></div>
              <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="flex items-center">
                  <Layout size={20} className="mr-2" />
                  <span>{reportData?.report?.noOfPages || 250}</span>
                </div>
              </div>
              <div className="divider divider-horizontal divider-primary"></div>
              <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
                <div className="flex items-center">
                  <Grid size={20} className="mr-2" />
                  <span>Tables</span>
                </div>
              </div>
            </div>
            <div className="mt-5">
              Base Year: {new Date().getFullYear() - 1}.
            </div>
            <div>Coverage: 18 Countries </div>
            <div> Companies: 15+</div>
            <div>
              <div className="my-5">
                <h2 className="text-lg font-bold capitalize md:text-2xl">
                  Connect With us
                </h2>
                <hr className="w-10 border-[3px] rounded border-secondary" />
              </div>
              <div className="space-y-3">
                <UserCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
