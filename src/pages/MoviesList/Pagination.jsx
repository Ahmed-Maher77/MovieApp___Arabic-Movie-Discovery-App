/* eslint-disable react/prop-types */
    const Pagination = ({setPage, page, startPage, endPage, totalPages}) => {
    return (
        <footer className="Pagination text-center my-3">
            <div className="btn-group gap-2" role="group" aria-label="navigation buttons" style={{marginInline: "auto"}}>
            {/* =================== Previous Button =================== */}
            <button className="btn btn-outline-primary" onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page <= 1} style={{borderRadius: "0 5px 5px 0"}}>
                السابق
            </button>

            {/* =================== Page Numbers (Limited to range) =================== */}
            {startPage > 1 && <button className="btn btn-outline-primary" onClick={() => setPage(1)}>1</button>}
            {startPage > 2 && <span>...</span>} {/* Show ellipsis if necessary */}
            {[...Array(endPage - startPage + 1)].map((_, i) => {
                const pageNumber = startPage + i;
                return (
                    <button 
                        key={pageNumber}
                        className={`btn ${page === pageNumber ? "btn-primary text-white active" : "btn-outline-primary"}`} 
                        onClick={() => setPage(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                );
            })}
            {endPage < totalPages - 1 && <span>...</span>}{" "}
            {/* Show ellipsis if necessary */}
            {endPage < totalPages && (
                <button className="btn btn-outline-primary" onClick={() => setPage(totalPages)}>{totalPages}</button>
            )}

            {/* =================== Next Button===================  */}
            <button className="next-btn btn btn-outline-primary" onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} disabled={page >= totalPages} style={{borderRadius: "5px 0 0 5px"}}>
                التالي
            </button>
            </div>
        </footer>
    )
}

export default Pagination
