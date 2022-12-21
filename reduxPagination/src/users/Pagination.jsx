import React from "react";

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  let nextPage = totalItems <= currentPage * itemsPerPage + itemsPerPage;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={currentPage === 0}>
        {currentPage !== 0 && "←"}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={nextPage}>
        {nextPage ? "" : "→"}
      </button>
    </div>
  );
};

export default Pagination;
