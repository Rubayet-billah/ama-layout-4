import Button from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, description, icon, image } = service;

  return (
    <div className="grid duration-300 shadow hover:shadow-2xl lg:gap-5 lg:grid-cols-3">
      <div className="">
        <Image src={image.src} width={500} height={300} alt={title} />
      </div>
      <section className="lg:col-span-2">
        <div className="flex flex-col h-auto p-4 space-y-3">
          <h3 className="flex items-center gap-3 text-xl font-bold lg:text-2xl text-secondary">
            <Image className="w-10 h-10" src={icon} alt="icon" />
            {title}
          </h3>
          <p className="flex-1">{description}</p>
          {/* <div className="mt-auto">
            <Button>Learn More</Button>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default ServiceCard;
