// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import BannerSlide from "./banner/BannerSlide";
import BannerFooter from "./banner/BannerFooter";

const Banner = () => {
  return (
    <div>
      <BannerSlide />
      {/* <BannerFooter /> */}
    </div>
  );
};

export default Banner;
