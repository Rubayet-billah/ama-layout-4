import CheckoutForm from "@/components/checkout/components/CheckoutForm";
import UserCard from "@/components/contacts/components/UserCard";
import Footer from "@/components/home/Footer";
import CustomContainer from "@/components/ui/CustomContainer";
import { fetchReportBasicData } from "@/utils/fetchFunctions";
import React from "react";
import { Calendar, Grid, Layout } from "react-feather";
import Link from "next/link";
import QueryForm from "@/components/common/QueryForm";
import Header from "@/components/home/Header";
export default async function page() {
  return (
    <>
      <Header />
      <CustomContainer>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:mt-5">
          <div className="lg:col-span-2 rd">
            <h3 className="text-2xl font-semibold">
              Acquire essential perspectives on your interested industry.
            </h3>
            <p className="mt-3">
              We prioritize seamless communication. <br /> For comprehensive
              details on our services or to request contact from our team,
              kindly complete the contact form provided below:
            </p>
            <QueryForm
              type={"SWA"}
              btnText="Submit Request"
              slug={""}
              reportTitle={"This Lead is for Speak with Analysts"}
            />
          </div>
          <div className="">
            <div className="my-5 rd">
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
      </CustomContainer>

      <Footer />
    </>
  );
}
