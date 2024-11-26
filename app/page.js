import Banner from "@/components/home/Banner";
import EntrepreneurBanner from "@/components/home/EntrepreneurBanner";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Industries from "@/components/home/Industries";
import Newses from "@/components/home/Newses";
import Service from "@/components/home/Service";
import Sponsors from "@/components/home/Sponsors";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import {
  fetchIndustriesHome,
  fetchRecentReports,
  fetchSponsorLogos,
  fetchTestimonials,
} from "@/utils/fetchFunctions";
import { metadata } from "./layout";
import BusinessInsightsBanner from "@/components/home/BusinessInsightsBanner";
import RecentReports from "@/components/home/RecentReports";

export const generateMetadata = async () => {
  const res = await fetch(`${process.env.API_URL}/api/publishers`, {
    cache: "no-cache",
  });
  const dataReport = await res.json();
  const { metaTitles, metaDescription, keywords } = dataReport;
  return {
    title: metaTitles || metadata.title,
    description: metaDescription || metadata.description,
    keywords: keywords || metadata.keywords,
    alternates: {
      canonical: `${process.env.BASE_URL}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

export default async function Home() {
  const [industryCardDataHome, testimonialsData, sponsorsHome, recentReports] =
    await Promise.all([
      fetchIndustriesHome(),
      fetchTestimonials(),
      fetchSponsorLogos(),
      fetchRecentReports(),
    ]);

  const { data: testimonialsHome } = testimonialsData;

  return (
    <div>
      <Header />
      <Banner />
      <Industries industries={industryCardDataHome} />
      <Service />
      <StatsSection />
      <RecentReports recentReports={recentReports} />
      <Testimonials testimonials={testimonialsHome} />
      <Sponsors sponsors={sponsorsHome} />
      <EntrepreneurBanner />
      {/* <Newses /> */}
      <section className="hidden h-48 lg:block bg-neutral"></section>
      <BusinessInsightsBanner />
      <Footer />
    </div>
  );
}
