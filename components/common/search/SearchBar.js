"use client";

import React, { useState, useEffect } from "react";
import { Search } from "react-feather";
import Link from "next/link";
import { useDebounce } from "@/utils/hooks";

const SearchBar = ({
  placeholder = "Search...",
  onSearch,
  className = "",
  inputClassName = "",
  buttonClassName = "",
  dropdownClassName = "",
  categoryId = null,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const debouncedSearchValue = useDebounce(searchValue, 700);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchValue);
    setSearchValue("");
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    const timeout = setTimeout(() => {
      setIsInputFocused(false);
    }, 500);

    return () => clearTimeout(timeout);
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

  useEffect(() => {
    if (debouncedSearchValue.trim().replace(/\s/g, "").length >= 3) {
      sugesstionFetch({ catID: categoryId, query: debouncedSearchValue });
      setIsTyping(true);
    } else {
      setIsTyping(false);
      setSuggestions([]);
    }
  }, [debouncedSearchValue, categoryId]);

  return (
    <div className={`relative bg-neutral lg:py-1 ${className}`}>
      <form onSubmit={handleSubmit}>
        <input
          className={`w-full px-4 pr-10 py-2 placeholder-accent/80 bg-inherit focus:outline-none ${inputClassName}`}
          type="search"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button
          type="submit"
          className={`absolute top-0 right-0 h-full px-2 text-primary cursor-default ${buttonClassName}`}
          aria-label="Search"
        >
          <Search />
        </button>
      </form>
      {isInputFocused && isTyping && (
        <div
          className={`absolute left-0 text-sm text-black bg-white rounded-b w-full shadow-md top-full ${dropdownClassName}`}
        >
          {suggestions?.map((sg, index) => (
            <Link
              key={index}
              href={`/reports/${sg?.slug}`}
              className="block px-4 py-1 my-1 hover:text-primary hover:bg-neutral"
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
      )}
    </div>
  );
};

export default SearchBar;
