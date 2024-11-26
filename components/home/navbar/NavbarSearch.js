"use client";
import CustomContainer from "@/components/ui/CustomContainer";
import { useDebounce } from "@/utils/hooks";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowRight, Search } from "react-feather";

const NavbarSearch = ({ showNavSearch }) => {
  // State to hold the input field value
  const [searchValue, setSearchValue] = useState("");

  // State to track whether the user is typing
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  // Function to handle input field changes
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue("");
  };

  const sugesstionFetch = async (payload) => {
    try {
      setLoading(true);
      const res = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const { data } = await res.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Debounce the search value
  const debouncedSearchValue = useDebounce(searchValue, 700);

  // Effect to handle debounced search value changes
  useEffect(() => {
    // Check if input value meets criteria (minimum 3 letters excluding space)
    if (debouncedSearchValue.trim().replace(/\s/g, "").length >= 3) {
      sugesstionFetch({
        catID: null,
        query: debouncedSearchValue,
      });

      setIsTyping(true);
    } else {
      setIsTyping(false);
      setSuggestions([]); // Clear suggestions if search value is less than 3 characters
    }
  }, [debouncedSearchValue]);

  if (!showNavSearch) {
    return null; // Do not render the component if `showNavSearch` is false
  }

  return (
    <div className="absolute left-0 right-0 z-20 px-4 py-6 shadow-lg bg-primary">
      <CustomContainer>
        <form onSubmit={handleSubmit} className="relative">
          <input
            className="w-full px-4 pr-12 text-sm border border-none lg:text-base lg:py-2 text-neutral placeholder-accent placeholder:text-lg bg-inherit focus:outline-none focus:ring-2 focus:ring-primary"
            type="search"
            placeholder="Search Reports here..."
            value={searchValue}
            onChange={handleInputChange}
          />
          {/* <button
            type="submit"
            className="absolute top-0 h-full px-1 text-white right-2 lg:right-0"
            aria-label="Search"
          >
            <Search />
          </button> */}
        </form>
        {isTyping ? (
          <div className="w-full max-w-2xl mt-2 text-sm text-black bg-white rounded shadow-md">
            {suggestions?.map((sg, index) => (
              <Link
                key={index}
                href={`/reports/${sg?.slug}`}
                className="block px-4 py-1 mb-1 hover:text-primary hover:bg-accent"
                onClick={() => {
                  setSearchValue("");
                  setIsTyping(false);
                }}
              >
                {sg?.title}
              </Link>
            ))}
            {loading && (
              <div>
                <div className="flex items-center justify-center min-h-24">
                  <span className="loading loading-dots loading-sm"></span>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-3 text-sm">
            <p className="text-base font-semibold text-accent">Quick links</p>
            <ul className="capitalize">
              <li className="flex items-center gap-2">
                <ArrowRight size={14} /> Most popular reports
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={14} /> Limited offers
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={14} /> Most popular reports
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={14} /> Limited offers
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={14} /> Most popular reports
              </li>
            </ul>
          </div>
        )}
      </CustomContainer>
    </div>
  );
};

export default NavbarSearch;
