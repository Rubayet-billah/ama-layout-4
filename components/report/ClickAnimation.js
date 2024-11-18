import React from "react";
import handHoverImage from "@/assets/report/click.png";
import Image from "next/image";

const ClickAnimation = () => {
  return (
    <div>
      <div className="absolute w-6 h-6 border-2 rounded-full border-secondary top-3 right-12 animate-shakeme-bubble bg-secondary"></div>
      <Image
        src={handHoverImage}
        alt="Hover animation image"
        className="absolute w-10 h-10 duration-100 text-secondary right-12 top-3 animate-shakeme"
      />
    </div>
  );
};

export default ClickAnimation;
