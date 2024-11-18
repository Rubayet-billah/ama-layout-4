import React from "react";
import TopNavbar from "./navbar/TopNavbar";
import MainNavbar from "./navbar/MainNavbar";
import { fetchParentCategories } from "@/utils/fetchFunctions";

const Header = async () => {
  const parentCategories = await fetchParentCategories();
  return (
    <div>
      <TopNavbar />
      <MainNavbar parentCategories={parentCategories} />
    </div>
  );
};

export default Header;
