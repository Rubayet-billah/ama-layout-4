import React from "react";
import CustomContainer from "../ui/CustomContainer";
import Button from "../ui/Button";

const CreditSection = () => {
  return (
    <div className="my-10 lg:my-16">
      <CustomContainer>
        <section className="rounded-3xl bg-gradient-to-r from-tertiary/30 to-neutral/30 min-h-72">
          <div className="p-6 text-center lg:p-10">
            <strong className="font-bold mrf-secondary-heading">
              Claim Your 6 Months of{" "}
              <span className="text-secondary">FREE</span> <br /> Credits Now!
            </strong>
            <p className="mt-3 text-sm">
              Get the code. Use anytime in the next 6 months.
            </p>
            <div className="grid mt-5 place-items-center">
              <Button variant="secondary" classNames="rounded-full">
                Get Code Now
              </Button>
            </div>
          </div>
        </section>
      </CustomContainer>
    </div>
  );
};

export default CreditSection;
