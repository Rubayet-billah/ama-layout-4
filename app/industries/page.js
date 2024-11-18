/* eslint-disable react/no-unescaped-entities */
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import ProductListHeader from "@/components/products/ProductListHeader";
import ProductSidebar from "@/components/products/ProductSidebar";
import ProductsList from "@/components/products/ProductsList";
import CustomContainer from "@/components/ui/CustomContainer";
import LucidIcon from "@/components/ui/icons/LucidIcons";
import { fetchCategories, fetchAllReports } from "@/utils/fetchFunctions";
import { useParams } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Market in-Depth Research Report: Market Insights Report",
  alternates: {
    canonical: `${process.env.BASE_URL}/industries`,
  },
};

const ReportListing = async ({ searchParams }) => {
  const reports = await fetchAllReports({ query: searchParams });
  const sidebarCategories = await fetchCategories();

  return (
    <>
      <Header />
      <ProductListHeader />
      <CustomContainer>
        <div className="grid gap-5 lg:grid-cols-4">
          <main className="lg:col-span-3">
            <ProductsList reports={reports} isAllReports={true} />
          </main>
          <aside className="sticky top-0 h-screen mb-5 overflow-y-auto lg:block">
            <ProductSidebar categories={sidebarCategories} />
          </aside>
        </div>
      </CustomContainer>
      <Footer />
    </>
  );
};

export default ReportListing;
