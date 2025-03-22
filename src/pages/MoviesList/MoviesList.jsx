import { useState, useMemo, useCallback, memo } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import useFetchAllMovies from "../../utils/api/useFetchAllMovies";
import useSearchMovies from "../../utils/api/useSearchMovies";
import Loader from "../../components/Loader/Loader";
import Pagination from "./Pagination";
import { motion } from "framer-motion";
import { moviesListPageVariants } from "../../utils/Animations_Variants/Animations_Variants";
import AnimatedScrollToTop from "../../common/AnimatedScrollToTop";

const MoviesList = () => {
	// Get search query from Redux state
	const searchQuery = useSelector(state => state.search_movies.searchByValue);

	// State for pagination (only for non-search results)
	const [page, setPage] = useState(1);

	// Fetch all movies (when not searching)
	const { data: allMovies, isLoading, error } = useFetchAllMovies(page);

	// Fetch searched movies (if search query is present)
	const { data: searchedMovies, isLoading: isSearching, error: searchError } = useSearchMovies(searchQuery);

	// Determine which movies to display
	const isSearchingMode = searchQuery.length > 0;
	const moviesToDisplay = useMemo(
		() => (isSearchingMode ? searchedMovies?.results : allMovies?.results),
		[isSearchingMode, searchedMovies, allMovies]
	);

	// Pagination logic (disabled for search results)
	const totalPages = isSearchingMode
		? 1 // No pagination for search results
		: Math.min(allMovies?.total_pages || 1, 500);
		const pageRange = 1; // Number of pages to show at a time
		const startPage = Math.max(1, page - Math.floor(pageRange / 2));
		const endPage = Math.min(totalPages, startPage + pageRange - 1);

	const handleSetPage = useCallback((newPage) => setPage(newPage), []);

	const isDataLoading = isSearchingMode ? isSearching : isLoading;
	const hasError = isSearchingMode ? searchError : error;




	// Handle loading state
	if (isDataLoading) {
		return (
			<div className="d-flex justify-content-center align-items-center" style={{minHeight: "calc(100vh - 73px)"}}>
				<Loader title="...Loading Movies" aria-live="polite" />
			</div>
		);
	}

	// Handle errors
	if (hasError) {
		return (
			<div className="text-center my-5" style={{minHeight: "calc(100vh - 400px)"}}>
				<h2>Something went wrong</h2>
				<span className="red-color">{hasError}</span>
			</div>
		);
	}

	return (
		<motion.div 
			className="MoviesList overflow-hidden" style={{minHeight: "calc(100vh - 73px)"}}
			key="MoviesList"
			variants={moviesListPageVariants}
			initial="initial"
			animate="animate"
			exit="exit">
			<div className="container py-4">
				{/* ================== Display Data (Movies Cards) ================== */}
				<main className="row">
					{moviesToDisplay?.length > 0 ? (
						moviesToDisplay?.map((movie) => (
							<MovieCard
								key={movie.id}
								imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
								title={movie.title}
								date={movie.release_date}
								vote_count={movie.vote_count}
								rate={movie.vote_average}
								id={movie.id}
								className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
							/>
						))
					) : (
						<div className="text-center my-5">
							<h2>لا يوجد أفلام...</h2>
						</div>
					)}
				</main>

				{/* ================== Pagination ================== */}
				<Pagination setPage={handleSetPage} page={page} startPage={startPage} endPage={endPage} totalPages={totalPages} />

				{/* ================== Scroll to Top when page changes ================== */}
				<AnimatedScrollToTop dependancy={page} />
			</div>
		</motion.div>
	);
};

export default memo(MoviesList);
