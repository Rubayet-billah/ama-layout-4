import React from "react";
import MRFImage from "../ui/Image";
import quotation from "@/assets/report/quotation green.png";
import userAvatar from "@/assets/contact/user/user1.png";

const TestimonialListingCard = ({ testimonial }) => {
  const {
    name = "Anonymous",
    image,
    occupation = "Unknown Position",
    company = "",
    testimonial: summary,
  } = testimonial;

  return (
    <div className="p-4 rounded shadow lg:p-6 bg-neutral">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full">
            <MRFImage
              classNames="w-12 h-12 rounded-full"
              src={image || userAvatar} // Use userAvatar if image is missing
              alt={`${name}'s avatar`}
            />
          </div>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-accent">
              {occupation} {company && `at ${company}`}
            </p>
          </div>
        </div>
        <div className="hidden lg:block max-w-16">
          <MRFImage src={quotation} alt="Quotation image" />
        </div>
      </div>
      <div className="mt-3">
        <p className="text-sm">
          {summary || "No testimonial available."}{" "}
          {/* Default text if testimonial is missing */}
        </p>
      </div>
    </div>
  );
};

export default TestimonialListingCard;
