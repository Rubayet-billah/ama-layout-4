import React from "react";
import ServiceCard from "./service/ServiceCard";
import CustomContainer from "../ui/CustomContainer";
import icon1 from "@/assets/serviceCard/servicesIcon/Picture1.png";
import icon2 from "@/assets/serviceCard/servicesIcon/Picture2.png";
import icon3 from "@/assets/serviceCard/servicesIcon/Picture3.png";
import artWorkUnderline from "@/assets/artWorks/artWorkUnderline.png";
import artWorkSpiral from "@/assets/artWorks/artWorkSpiral.png";
import waveBg from "@/assets/artWorks/waveBg.png";
import image1 from "@/assets/serviceCard/image-1.jpg";
import image2 from "@/assets/serviceCard/image-2.jpeg";
import image3 from "@/assets/serviceCard/image-3.jpeg";
import MRFImage from "../ui/Image";
import Button from "../ui/Button";
import { ArrowRight } from "react-feather";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Consulting",
      description:
        "Gain access to expert advice and strategic guidance tailored precisely to your business needs. Our seasoned consultants provide insightful solutions and actionable recommendations ",
      icon: icon1,
      image: image1,
    },
    {
      id: 2,
      title: "Customized Research",
      description:
        "Receive in-depth research reports customized to your industry, market, or topic of interest.",
      icon: icon2,
      image: image2,
    },
    {
      id: 3,
      title: "Syndicate Research",
      description:
        "Access comprehensive research reports collaborated and shared among multiple stakeholders in the industry.",
      icon: icon3,
      image: image3,
    },
  ];

  return (
    <div className="relative">
      <div className="absolute w-full h-full">
        <MRFImage src={waveBg} alt="wave bg" classNames="h-full" />
      </div>
      <CustomContainer classNames="py-10 relative z-[1]">
        <header className="my-10 lg:my-16">
          <div className="relative mx-auto w-fit">
            <span className="absolute w-20 -left-5 -top-10 lg:w-28">
              <MRFImage src={artWorkSpiral} alt="artwork spiral" />
            </span>
            <span className="font-bold mrf-secondary-heading relative z-[1]">
              Core Services
            </span>
            <div className="absolute w-32 -bottom-2 lg:w-56 -right-16 ">
              <MRFImage src={artWorkUnderline} alt="artwork underline" />
            </div>
          </div>
        </header>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12 lg:pt-12 lg:pb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </section>

        <div className="grid mt-10 place-items-center lg:mt-16 lg:mb-32">
          <Button variant="secondary" classNames="rounded-full">
            Explore More <ArrowRight size={18} />
          </Button>
        </div>
      </CustomContainer>
    </div>
  );
};

export default Service;
