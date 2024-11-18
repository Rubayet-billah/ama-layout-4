"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const TestimonialFilter = ({ categoryList = [] }) => {
  const { parentCategories } = categoryList;
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get the initial catId from URL params, if available
  const initialCatId = searchParams.get("catId") || "";
  const [selectedCategory, setSelectedCategory] = useState(initialCatId);

  // Handle category selection and update URL
  const handleInputChange = (event) => {
    const catId = event.target.value;
    setSelectedCategory(catId);

    // Update URL with the selected category
    if (catId) {
      router.push(`/testimonials?page=1&catId=${catId}`);
    } else {
      router.push(`/testimonials?page=1`);
    }
  };

  // Scroll to the listing section after category selection or URL update
  useEffect(() => {
    const listingSection = document.getElementById("testimonialListing");
    if (listingSection) {
      listingSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [searchParams]);

  return (
    <div className="w-full">
      <select
        name="category"
        value={selectedCategory}
        onChange={handleInputChange}
        className="w-full px-4 py-3 text-sm bg-neutral focus:outline-none"
      >
        <option value="">All Category</option>
        {parentCategories?.map((category) => (
          <option key={category.id} value={category.id}>
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TestimonialFilter;
