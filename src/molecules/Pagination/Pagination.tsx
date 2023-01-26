import React from "react";

const Pagination = (props: any) => {
  const { pages, currentPage, setCurrentPage } = props;

  const pageNumbers = [...Array(pages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== pages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav className="my-5 text-center select-none">
      <ul className="inline-flex">
        <li>
          <a
            onClick={prevPage}
            href="#"
            className="px-3 py-2 ml-0 text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) =>
          pgNumber >= currentPage - 3 && pgNumber <= currentPage + 3 ? (
            <li key={pgNumber}>
              <a
                onClick={() => setCurrentPage(pgNumber)}
                href="#"
                className={`px-3 py-2 text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage == pgNumber ? "border-teal-500 border-2" : ""
                }`}
              >
                {pgNumber}
              </a>
            </li>
          ) : (
            ""
          )
        )}

        <li>
          <a
            onClick={nextPage}
            href="#"
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
