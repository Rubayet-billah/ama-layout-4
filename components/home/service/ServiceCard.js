"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MRFImage from "@/components/ui/Image";

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHoverd] = useState(false);

  const { title, description, image, icon } = service;

  return (
    <div
      onMouseEnter={(e) => setIsHoverd(true)}
      onMouseLeave={(e) => setIsHoverd(false)}
      className="relative overflow-hidden transition duration-300 shadow-lg hover:shadow-xl"
    >
      {/* Background image */}
      <div
        className="h-64 bg-center bg-cover"
        // style={{ backgroundImage: `url(${image.src})` }}
      >
        <MRFImage classNames="w-full" src={image} alt={title + " - Thumb"} />
      </div>
      <div
        className={`absolute left-0 right-0 h-full px-4 py-2 text-white transition duration-300 opacity-100 bg-opacity-80 bg-primary top-[200px] backdrop-filter ${
          isHovered && "-translate-y-[200px]"
        }`}
      >
        <div className="flex flex-col items-start gap-2">
          <h3 className="flex items-center gap-3 text-xl font-bold">
            <Image className="w-10 h-10" src={icon} alt="icon" />
            {title}
          </h3>
          <div className="px-4 text-sm text-accent">{description}</div>
          <Link href="/service" className="mx-4 text-sm text-secondary">
            Explore more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
