import { motion } from "framer-motion";
import { moviesDetailsPageVariants } from "../../utils/Animations_Variants/Animations_Variants";
import useFetchWatchlist from "../../utils/api/useFetchWatchlist";
import LoadingState from "../../components/Watchlist/LoadingState";
import ErrorState from "../../components/Watchlist/ErrorState";
import EmptyState from "../../components/Watchlist/EmptyState";
import MovieCard from "../../components/Watchlist/MovieCard";
import {
	removeFromWatchlist,
	updateWatchedStatus,
} from "../../utils/api/watchlistOperations";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import styles from "./Watchlist.module.css";
import "./Watchlist.css";
import ToggleBar from "../../components/Watchlist/ToggleBar";

const Watchlist = () => {
	const { data: initialWatchlist, isLoading, error } = useFetchWatchlist();
	const [watchlist, setWatchlist] = useState([]);
	const [removingId, setRemovingId] = useState(null);
	const [togglingWatchedId, setTogglingWatchedId] = useState(null);
	const [showWatched, setShowWatched] = useState(false);

	useEffect(() => {
		setWatchlist(initialWatchlist);
	}, [initialWatchlist]);

	const handleRemoveMovie = async (movieId) => {
		setRemovingId(movieId);
		const success = await removeFromWatchlist(movieId);
		if (success) {
			setWatchlist((prev) => prev.filter((movie) => movie.id !== movieId));
			toast.success("تمت إزالة الفيلم من قائمة المشاهدة!");
		}
		setRemovingId(null);
	};

	const handleToggleWatched = async (movieId, currentStatus) => {
		setTogglingWatchedId(movieId);
		const success = await updateWatchedStatus(movieId, !currentStatus);
		if (success) {
			setWatchlist((prev) =>
				prev.map((movie) =>
					movie.id === movieId ? { ...movie, isWatched: !currentStatus } : movie
				)
			);
		}
		setTogglingWatchedId(null);
	};

	const watchedCount = watchlist.filter((m) => m.isWatched).length;
	const notWatchedCount = watchlist.filter((m) => !m.isWatched).length;
	const filteredMovies = watchlist.filter(
		(movie) => !!movie.isWatched === showWatched
	);

	if (isLoading) {
		return <LoadingState />;
	}

	if (error) {
		return <ErrorState error={error} />;
	}

	return (
		<motion.div
			className="watchlist-page"
			variants={moviesDetailsPageVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<div className="container pb-4">
				<div className="text-center">
					<h1 className="watchlist-heading">
						قائمة المشاهدة
						<span className="lower-line"></span>
					</h1>
				</div>

				<ToggleBar
					showWatched={showWatched}
					setShowWatched={setShowWatched}
					watchedCount={watchedCount}
					notWatchedCount={notWatchedCount}
					styles={styles}
				/>

				{filteredMovies.length === 0 ? (
					<EmptyState />
				) : (
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 justify-content-center">
						{filteredMovies.map((movie) => (
							<MovieCard
								key={String(movie.id)}
								movie={movie}
								onRemove={handleRemoveMovie}
								isRemoving={removingId === movie.id}
								onToggleWatched={() =>
									handleToggleWatched(movie.id, movie.isWatched)
								}
								isTogglingWatched={togglingWatchedId === movie.id}
							/>
						))}
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default Watchlist;
