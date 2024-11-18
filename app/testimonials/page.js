import React from "react";
import QueryForm from "@/components/common/QueryForm";
import Testimonials from "@/components/common/sliders/Testimonials";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import CaseStudies from "@/components/testimonials/CaseStudies";
import CaseStudiesSlider from "@/components/testimonials/CaseStudiesSlider";
import SidebarCategories from "@/components/testimonials/SidebarCategories";
import TestimonialFilter from "@/components/testimonials/TestimonialFilter";
import TestimonialForm from "@/components/testimonials/TestimonialForm";
import TestimonialListingCard from "@/components/testimonials/TestimonialListingCard";
import Button from "@/components/ui/Button";
import CustomContainer from "@/components/ui/CustomContainer";
import Pagination from "@/components/ui/pagination/Pagination";
import SectionTitle from "@/components/ui/SectionTitle";
import { testimonialBenefits } from "@/constants/constants";
import {
  fetchCaseStudies,
  fetchCategories,
  fetchFeaturedTestimonials,
  fetchTestimonials,
} from "@/utils/fetchFunctions";

const TestimonialsPage = async ({ searchParams }) => {
  const testimonialsData = await fetchTestimonials({ searchParams });
  const featuredTestimonialsData = await fetchFeaturedTestimonials();
  const { data: caseStudies } = await fetchCaseStudies();
  const sidebarCategories = await fetchCategories();

  const { data: testimonials } = testimonialsData;
  const { data: featuredTestimonials } = featuredTestimonialsData;

  const currentPage = testimonialsData?.page;
  const totalTestimonials = testimonialsData?.totalCount;
  const limit = 5;
  const catId = searchParams?.catId || "";

  return (
    <div className="relative">
      <Header />
      <CustomContainer>
        <main className="grid grid-cols-1 gap-10 mb-10 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <div>
              <SectionTitle
                subtitle="Your thoughts help us improve more"
                padding="px-0 lg:px-0"
              >
                Share your thoughts
              </SectionTitle>
              <TestimonialForm />
            </div>
            <div>
              <SectionTitle
                subtitle="Valuable case studies"
                padding="px-0 lg:px-0"
              >
                Case studies
              </SectionTitle>
              {caseStudies?.length > 0 ? (
                <CaseStudies caseStudies={caseStudies} />
              ) : (
                <p className="text-gray-500">
                  No case studies available at the moment. Please check back
                  later.
                </p>
              )}
            </div>
            <div>
              <SectionTitle
                subtitle="What our clients say"
                padding="px-0 lg:px-0"
              >
                Happy clients
              </SectionTitle>
              <div id="testimonialListing" className="mb-10">
                <div className="flex items-center max-w-sm gap-4 ml-auto text-sm">
                  <div className="text-nowrap">Filter By:</div>
                  <TestimonialFilter categoryList={sidebarCategories} />
                </div>
              </div>
              {testimonials?.length > 0 ? (
                <>
                  <section className="space-y-6">
                    {testimonials?.map((testimonial, idx) => (
                      <TestimonialListingCard
                        key={idx}
                        testimonial={testimonial}
                      />
                    ))}
                  </section>
                  <section>
                    <Pagination
                      isTestimonialListing
                      currentPage={+currentPage}
                      totalPages={Math.ceil(totalTestimonials / limit)}
                      catId={catId}
                    />
                  </section>
                </>
              ) : (
                <p className="text-gray-500">
                  No testimonials available yet. Be the first to share your
                  experience with us!
                </p>
              )}
            </div>
          </section>
          <aside className="py-12 space-y-10">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold lg:text-2xl">
                Featured Testimonials
              </h3>
              {featuredTestimonials?.length > 0 ? (
                <Testimonials testimonials={featuredTestimonials} />
              ) : (
                <p className="text-gray-500">
                  No featured testimonials at this time.
                </p>
              )}
            </div>
            <div className="pb-16 space-y-8">
              <h3 className="text-xl font-semibold lg:text-2xl">
                Why Testimonials Matter
              </h3>
              <div className="space-y-6">
                {testimonialBenefits?.map((component, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-semibold">{component.title}</h4>
                    <p>{component.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-xl font-semibold lg:text-2xl">
                Browse Category Reports
              </h3>
              <SidebarCategories categories={sidebarCategories} />
            </div>
          </aside>
        </main>
      </CustomContainer>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
