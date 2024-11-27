"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MRFImage from "@/components/ui/Image";
import { ArrowRight } from "react-feather";
import Button from "@/components/ui/Button";

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHoverd] = useState(false);

  const { title, description, image, icon } = service;

  return (
    <div>
      <div className={`px-6 py-4 bg-white h-full hover:shadow-xl rounded-xl`}>
        <div className="flex flex-col items-start h-full gap-2">
          <h3 className="flex items-center gap-3 text-xl font-bold">
            <div className="p-2 rounded-full bg-neutral">
              <Image className="w-8 h-8" src={icon} alt="icon" />
            </div>
            {title}
          </h3>
          <div className="flex-1 mt-3 text-sm">{description}</div>
          <Link href="/service" className="text-sm text-secondary">
            <Button classNames="px-0 bg-transparent text-secondary hover:bg-tranparent hover:text-primary hover:shadow-none">
              Explore more <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
