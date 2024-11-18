"use client";
import React, { useEffect } from "react";
import Link from "next/link";

const Pagination = ({
  isAllReports,
  category,
  currentPage,
  totalPages,
  catId = null,
  isTestimonialListing = false,
}) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 3;

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    while (startPage > 1 && currentPage - startPage < maxPagesToShow / 2 - 1) {
      startPage--;
    }
    while (
      endPage < totalPages &&
      endPage - currentPage < maxPagesToShow / 2 - 1
    ) {
      endPage++;
    }

    if (startPage > 2) {
      pages.push(1, "...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (totalPages - endPage > 1) {
      pages.push("...", totalPages);
    }

    return pages;
  };

  const generateHref = (page) => {
    if (isTestimonialListing) {
      // URL generation for testimonial listing
      return `/testimonials?page=${page}${catId ? `&catId=${catId}` : ""}`;
    } else {
      // URL generation for report listing
      return !isAllReports && category
        ? `/industries/${category}?page=${page}`
        : `/industries?page=${page}`;
    }
  };

  // Scroll to the listing section when currentPage changes
  useEffect(() => {
    const listingSection = document.getElementById("testimonialListing");
    if (listingSection && isTestimonialListing) {
      listingSection.scrollIntoView({
        behavior: "smooth",
        // block: "start",
      });
    }
  }, [currentPage, isTestimonialListing]);

  return (
    <div className="lg:my-12 lg:items-center lg:flex">
      <div className="block mx-auto rounded join w-fit">
        <Link
          href={generateHref(currentPage === 1 ? 1 : currentPage - 1)}
          passHref
        >
          <button className="join-item btn btn-sm" disabled={currentPage === 1}>
            {"<<"}
          </button>
        </Link>

        {generatePageNumbers().map((pageNumber, index) => (
          <React.Fragment key={index}>
            {pageNumber === "..." ? (
              <button className="join-item btn btn-sm" disabled>
                {pageNumber}
              </button>
            ) : (
              <Link href={generateHref(pageNumber)} passHref key={pageNumber}>
                <button
                  className={`join-item btn btn-sm md:w-12 ${
                    pageNumber === currentPage ? "btn-secondary" : ""
                  }`}
                >
                  {pageNumber}
                </button>
              </Link>
            )}
          </React.Fragment>
        ))}

        <Link
          href={generateHref(
            currentPage === totalPages ? totalPages : currentPage + 1
          )}
          passHref
        >
          <button
            className="join-item btn btn-sm"
            disabled={currentPage === totalPages}
          >
            {">>"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
