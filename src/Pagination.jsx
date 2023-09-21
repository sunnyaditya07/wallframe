import { useEffect } from "react";

function Pagination({ pages, setPages, totalPages }) {
  useEffect(function () {}, []);
  return (
    <div className="pagination">
      {pages > 1 && (
        <button
          className="pagination-btn"
          onClick={() => {
            window.scrollTo(0, 0);
            setPages(pages - 1);
          }}
        >
          Previous
        </button>
      )}

      {pages < totalPages && (
        <button
          className="pagination-btn"
          onClick={() => {
            window.scrollTo(0, 0);
            setPages(pages + 1);
          }}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
