import Image from "next/image";
import React from "react";

const SponsordCard = ({ image }) => {
  return (
    <div className="w-full">
      <Image
        className="duration-300 hover:scale-105"
        src={image}
        width={400}
        height={100}
        alt="sponsor image"
      />
    </div>
  );
};

export default SponsordCard;
