import React from "react";
import ServiceCard from "./service/ServiceCard";
import CustomContainer from "../ui/CustomContainer";
import icon1 from "@/assets/serviceCard/servicesIcon/Picture1.png";
import icon2 from "@/assets/serviceCard/servicesIcon/Picture2.png";
import icon3 from "@/assets/serviceCard/servicesIcon/Picture3.png";
import artWorkUnderline from "@/assets/artWorks/artWorkUnderline.png";
import artWork1 from "@/assets/bannerSlider/artwork1.png";
import image1 from "@/assets/serviceCard/image-1.jpg";
import image2 from "@/assets/serviceCard/image-2.jpeg";
import image3 from "@/assets/serviceCard/image-3.jpeg";
import MRFImage from "../ui/Image";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Consulting",
      description:
        "Get expert advice and strategic guidance tailored to your specific business needs.",
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
    <div className="bg-tertiary">
      <CustomContainer classNames="py-10">
        <header className="my-10 lg:my-16">
          <div className="relative mx-auto w-fit">
            <span className="absolute w-20 -left-5 -top-10 lg:w-28">
              <MRFImage src={artWork1} alt="artwork 1" />
            </span>
            <span className="font-bold mrf-secondary-heading">
              Core Services
            </span>
            <div className="absolute w-56 -bottom-4 lg:w-80 -right-16 ">
              <MRFImage src={artWorkUnderline} alt="artwork underline" />
            </div>
          </div>
        </header>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </section>
      </CustomContainer>
    </div>
  );
};

export default Service;
