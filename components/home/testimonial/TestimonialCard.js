import Image from "next/image";
import React from "react";
import userAvatar from "@/assets/contact/user/user1.png";
import quotation from "@/assets/report/quotation green.png";
import MRFImage from "@/components/ui/Image";

const TestimonialCard = ({ testimonial }) => {
  const { name, occupation, testimonial: testimonialText, image } = testimonial;

  return (
    <div className="flex flex-col items-center max-w-2xl gap-4 mx-2">
      <div className="w-20 h-20">
        <MRFImage src={quotation} alt="Quotation image" />
      </div>
      <div>
        <p className="text-lg font-semibold text-black lg:text-2xl">
          {testimonialText}
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 max-w-80">
        <div className="w-16 h-16 pt-1 rounded-full min-h-16 min-w-16">
          <Image
            className="rounded-full"
            src={image || userAvatar}
            width={500}
            height={500}
            alt={`Testimonial image of ${name}`}
          />
        </div>
        <div className="text-left">
          <h3 className="font-bold text-primary">{name}</h3>
          <h4 className="text-sm">{occupation}</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
