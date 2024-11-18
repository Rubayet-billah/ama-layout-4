import React from "react";
import ReportCard from "./components/ReportCard";
import Pagination from "../ui/pagination/Pagination";
import ProductListContentDescription from "./components/ProductListContentDescription";
import SearchBar from "../common/search/SearchBar";

const ProductsList = ({
  reports: reportsData,
  isAllReports = false,
  currentCategory,
}) => {
  const currentPage = reportsData.page;
  const totalReports = reportsData.totalCount;

  return (
    <div className="mx-auto mt-5 space-y-5">
      <ProductListContentDescription
        isAllReports={isAllReports}
        currentCategory={currentCategory}
      />

      <aside className="hidden lg:block">
        <SearchBar className="shadow-md" dropdownClassName="z-10" />
      </aside>

      <section>
        {reportsData?.data?.map((report, idx) => (
          <article key={idx}>
            <ReportCard report={report} />
          </article>
        ))}

        {totalReports > 0 ? (
          <nav>
            <Pagination
              isAllReports={isAllReports}
              category={reportsData?.category}
              currentPage={+currentPage}
              totalPages={Math.ceil(totalReports / 20)}
            />
          </nav>
        ) : (
          <div className="my-5 font-semibold text-center">
            No More Records | We are working on it
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductsList;
