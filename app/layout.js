import { Inter, Poppins, Radio_Canada } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/home/navbar/TopNavbar";
import MainNavbar from "@/components/home/navbar/MainNavbar";
import { parentCategories } from "@/db/fakedata";
import { fetchParentCategories } from "@/utils/fetchFunctions";
import { GoogleAnalytics } from "@next/third-parties/google";
import CookieModal from "@/components/ui/model/CookieModal";
import { cookies } from "next/headers";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "Market Insights Report: Get Market Research Analysis with Market Share, Market Size & Forecast Analysis",
  description:
    "Market Insights Report stands as a premier Market Research Company, offering quantified B2B research that uncovers high-growth emerging opportunities impacting over 80% of global corporate revenues. Our team of Analysts diligently tracks high-growth studies, providing detailed statistical analyses and in-depth insights into market trends and dynamics, delivering a comprehensive industry overview. Employing an extensive research methodology, we fuse critical insights with industry factors and market forces to deliver optimal value to our clients. Drawing from reliable primary and secondary data sources, our analysts and consultants extract actionable data tailored to meet our clients' business objectives.",
  keywords:
    "Global Market Research , Latest industry analysis , in-Depth Market Study , customized market research study, Syndicate Market Research , market research analyst , market survey report , Company profile industry report , Market outlook report",
  alternates: {
    canonical: `${process.env.BASE_URL}`,
  },
};

export default async function RootLayout({ children }) {
  // const parentCategories = await fetchParentCategories();

  return (
    <html data-theme="customTheme" lang="en">
      <body className={poppins.className}>
        {/* <TopNavbar />
        <MainNavbar parentCategories={parentCategories} /> */}
        <main>{children}</main>
        <CookieModal />
      </body>
      <GoogleAnalytics gaId="G-WTCFWC5661" />
      {/* <body className={radioCanada.className}>{children}</body> */}
    </html>
  );
}
