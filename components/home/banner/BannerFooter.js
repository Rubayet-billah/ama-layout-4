import Button from "@/components/ui/Button";
import CustomContainer from "@/components/ui/CustomContainer";

import Link from "next/link";
import React from "react";
import { ArrowRight } from "react-feather";

const BannerFooter = () => {
  return (
    <div className="bg-secondary">
      <CustomContainer
        classNames={`items-center justify-between py-4 lg:flex `}
      >
        <div className="text-lg font-bold capitalize lg:text-2xl">
          looking for Trending Report by Industries?
        </div>
        <div className="mt-2 lg:mt-0 w-fit">
          <Link href={`/industries`}>
            <Button>
              Explore <ArrowRight size={16} className="text-secondary" />
            </Button>
          </Link>
        </div>
      </CustomContainer>
    </div>
  );
};

export default BannerFooter;
