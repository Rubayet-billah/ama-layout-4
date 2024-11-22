import { ArrowRight } from "react-feather";
import Button from "../ui/Button";
import CustomContainer from "../ui/CustomContainer";
import artWork1 from "@/assets/bannerSlider/artwork1.png";
import MRFImage from "../ui/Image";
import BannerFooter from "./banner/BannerFooter";

const Banner = () => {
  return (
    <div>
      <div className="text-white bg-primary">
        <CustomContainer
          classNames={
            "flex items-center justify-center lg:justify-start min-h-[550px] xl:min-h-[650px]"
          }
        >
          <section className="grid gap-10 lg:grid-cols-2">
            <div className="max-w-4xl text-center xl:ml-12 md:text-left">
              <div>
                <h2 className="mb-3 mrf-heading lg:mb-7 min-h">
                  <span className="relative">
                    Data-Driven
                    <span className="absolute w-20 -left-4 -top-10 lg:w-28">
                      <MRFImage src={artWork1} alt="artwork 1" />
                    </span>
                  </span>
                  Reports for Smarter Business Decisions
                </h2>
                <Button variant="secondary" classNames="rounded-full">
                  Get Free Sample
                  <ArrowRight />
                </Button>
              </div>
            </div>
            <div className="w-full h-20 lg:w-1/2"></div>
          </section>
        </CustomContainer>
      </div>
      <BannerFooter />
    </div>
  );
};

export default Banner;
