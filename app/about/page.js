import AboutPage from "@/components/about/AboutPage";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import { fetchSponsorLogos, fetchTestimonials } from "@/utils/fetchFunctions";
import React from "react";
export const generateMetadata = async () => {
  return {
    alternates: {
      canonical: `${process.env.BASE_URL}/about`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

const About = async () => {
  const sponsors = await fetchSponsorLogos();
  const testimonialsData = await fetchTestimonials();

  const { data: testimonials } = testimonialsData;
  return (
    <div>
      <Header />
      <AboutPage sponsors={sponsors} testimonials={testimonials} />
      <Footer />
    </div>
  );
};

export default About;
