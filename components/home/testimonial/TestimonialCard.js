import Image from "next/image";
import React from "react";
import userAvatar from "@/assets/contact/user/user1.png";
import quotation from "@/assets/report/quotation green.png";
import MRFImage from "@/components/ui/Image";

const TestimonialCard = ({ testimonial }) => {
  const { name, occupation, testimonial: testimonialText, image } = testimonial;

  const truncateStyles = (lines, lineHeight = 1.5) => ({
    display: "-webkit-box",
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxHeight: `${lines * lineHeight}em`,
    lineHeight: `${lineHeight}em`,
  });

  return (
    <div className="flex flex-col items-center h-full max-w-2xl gap-4 p-6 mx-2 border-4 border-primary">
      <div>
        <div className="w-16 h-16 pt-1 rounded-full min-h-16 min-w-16">
          <Image
            className="rounded-full"
            src={image || userAvatar}
            width={500}
            height={500}
            alt={`Testimonial image of ${name}`}
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold uppercase">{name}</h2>
        <h4 className="mt-3 text-xl font-bold text-tertiary">{occupation}</h4>
      </div>
      <div className="mb-10">
        <p
          className="text-lg font-semibold text-black"
          style={truncateStyles(4)}
        >
          {testimonialText}
        </p>
      </div>
      {/* <div className="flex items-center justify-center gap-4 max-w-80">
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
      </div> */}
    </div>
  );
};

export default TestimonialCard;
