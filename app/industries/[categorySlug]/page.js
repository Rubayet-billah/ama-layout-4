/* eslint-disable react/no-unescaped-entities */
import { metadata } from "@/app/layout";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import ProductListHeader from "@/components/products/ProductListHeader";
import ProductSidebar from "@/components/products/ProductSidebar";
import ProductsList from "@/components/products/ProductsList";
import CustomContainer from "@/components/ui/CustomContainer";
import LucidIcon from "@/components/ui/icons/LucidIcons";
import {
  fetchCategories,
  fetchCategory,
  fetchReports,
} from "@/utils/fetchFunctions";
import { useParams } from "next/navigation";
import React from "react";
import { Home } from "react-feather";

export const generateMetadata = async ({ params }) => {
  const currentCategory = await fetchCategory(params.categorySlug);
  const { metaTitle, summary, keywords, label, parent } = currentCategory;
  return {
    title:
      metaTitle ||
      parent?.metaTitle ||
      `Market in-Depth Research Report for ${label} | Market Insights Report`,
    description: summary || parent?.summary || metadata.description,
    keywords: keywords || parent?.keywords || metadata.keywords,
    alternates: {
      canonical: `${process.env.BASE_URL}/industries/${params.categorySlug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

const ReportListing = async ({ params, searchParams }) => {
  const categorySlug = decodeURIComponent(params.categorySlug);
  const reports = await fetchReports({ categorySlug, searchParams });
  const currentCategory = await fetchCategory(categorySlug);
  const sidebarCategories = await fetchCategories();
  return (
    <>
      <Header />
      <ProductListHeader />
      <CustomContainer>
        <section className="grid gap-5 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <ProductsList
              reports={reports}
              isAllReports={false}
              currentCategory={currentCategory}
            />
          </div>
          <div className="sticky top-0 h-screen mb-5 overflow-y-auto lg:block">
            <ProductSidebar categories={sidebarCategories} />
          </div>
        </section>
      </CustomContainer>
      <Footer />
    </>
  );
};

export default ReportListing;
