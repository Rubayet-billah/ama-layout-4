import React from "react";
import SponsorSlider from "./sponsor/SponsorSlider";

const Sponsors = ({ sponsors }) => {
  return (
    <div className="py-12">
      <SponsorSlider sponsors={sponsors} />
    </div>
  );
};

export default Sponsors;
