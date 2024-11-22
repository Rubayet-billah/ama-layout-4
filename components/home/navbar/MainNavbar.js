"use client";
import React, { useEffect, useRef, useState } from "react";
import { Mail, Menu, Phone, Search, X } from "react-feather";
import LinkTags from "./LinkTags";
import Link from "next/link";
import { salesEmail } from "@/constants/constants";
import CustomContainer from "@/components/ui/CustomContainer";
import LinkTagsDesktop from "./LinkTagsDesktop";
import { usePathname } from "next/navigation";
import SearchBar from "@/components/common/search/SearchBar";
import MRFImage from "@/components/ui/Image";
import logo from "@/assets/logo.gif";
import logo2 from "@/assets/logo.jpg";
import NavbarSearch from "./NavbarSearch";

const MainNavbar = ({ parentCategories = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoType, setLogoType] = useState(logo);
  const [showNavSearch, setShowNavSearch] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLogoType(logo);

    const logoTimeout = setTimeout(() => {
      setLogoType(logo2);
    }, 1000);

    return () => clearTimeout(logoTimeout);
  }, [pathname]);

  return (
    <div
      className="relative top-0 z-30 w-full text-white bg-primary"
      // className={`${
      //   pathname === "/" &&
      //   (scrolled
      //     ? "absolute lg:bg-white text-black lg:fixed shadow-md"
      //     : "absolute lg:top-14 bg-transparent text-white")
      // } ${
      //   pathname !== "/" ? "bg-white shadow-md text-black relative" : ""
      // } top-0 z-30 w-full transition-all duration-300`}
    >
      <CustomContainer>
        <div className="p-0 navbar lg:py-2 lg:gap-5">
          <div className="navbar-start lg:max-w-sm lg:w-fit">
            <div className="relative">
              <button
                className="p-0 mr-4 btn btn-ghost lg:hidden"
                onClick={toggleNavbar}
                aria-label="Menu button"
              >
                {!isOpen ? <Menu size={20} /> : <X size={20} />}
              </button>
              <ul
                ref={menuRef}
                className={`menu menu-sm dropdown-content mt-3 z-30 p-2 shadow absolute bg-white rounded w-72 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <LinkTags parentCategories={parentCategories} />
              </ul>
            </div>
            <Link href="/">
              <MRFImage
                src={logoType}
                alt="Main Logo"
                placeholder="empty"
                classNames="max-w-20 lg:min-w-28 lg:max-w-28 lg:py-2"
              />
            </Link>
          </div>
          <div className="hidden navbar-center lg:flex lg:flex-grow lg:ml-12">
            <LinkTagsDesktop parentCategories={parentCategories} />
          </div>
          <div className="gap-4 lg:gap-10 navbar-end w-fit">
            <Search
              onClick={() => setShowNavSearch((prev) => !prev)}
              size={18}
            />
            <Phone className="text-secondary" size={18} />
            <Mail className="text-secondary" size={18} />
          </div>
          <div className="lg:hidden navbar-end">
            <div className="flex items-center gap-1 text-xs lg:hidden">
              <Mail className="text-primary" size={18} />
              <span
                className={pathname !== "/" ? "text-secondary" : "text-white"}
              >
                {salesEmail}
              </span>
            </div>
          </div>
        </div>

        <section className="py-5 lg:hidden">
          <SearchBar />
        </section>
      </CustomContainer>
      <NavbarSearch showNavSearch={showNavSearch} />
    </div>
  );
};

export default MainNavbar;
