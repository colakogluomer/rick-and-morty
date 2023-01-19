import Link from "next/link";
import React from "react";
import usePagination from "../hooks/usePagination";

export const dotts = "...";

const Pagination = ({ currentPage, totalPages }) => {
  const pages = usePagination(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center my-8">
      {pages.map((pageNumber, i) =>
        pageNumber === dotts ? (
          <span
            key={i}
            className="px-4 py-2 rounded-full text-sm font-semibold text-gray-400"
          >
            {pageNumber}
          </span>
        ) : (
          <Link
            key={i}
            href={`/${pageNumber}`}
            className={`${
              pageNumber === currentPage ? "text-success-dark" : "text-gray-400"
            } px-4 py-2 mx-1 rounded-full text-sm font-semibold no-underline`}
          >
            {pageNumber}
          </Link>
        )
      )}
    </div>
  );
};

export default Pagination;
