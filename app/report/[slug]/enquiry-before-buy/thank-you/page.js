import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import SponsorSlider from "@/components/home/sponsor/SponsorSlider";
import CustomContainer from "@/components/ui/CustomContainer";
import { fetchSponsorLogos } from "@/utils/fetchFunctions";
import React from "react";

export default async function page() {
  const logos = await fetchSponsorLogos();
  return (
    <>
      <Header />
      <CustomContainer>
        <div className="flex text-center flex-col h-52 items-center justify-center">
          <h3 className="font-bold text-3xl text-primary">
            Thank You For your Request
          </h3>
          <p className="">
            We have received your request for research report. Our research
            specialist will contact you soon.
          </p>
        </div>
        <div className="rd">
          <h3>Our Clients</h3>
          <div className="py-0">
            <SponsorSlider sponsors={logos} />
          </div>
        </div>
      </CustomContainer>
      <Footer />
    </>
  );
}
