import { NavLink } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import MoviePoster from "./MoviePoster";
import PropTypes from "prop-types";
import { memo, useMemo, useState, useEffect } from "react";
import WatchlistButton from "./WatchlistButton";
import {
	checkWatchlistStatus,
	addToWatchlist,
	removeFromWatchlist,
} from "../../utils/api/watchlistOperations";
import { toast } from "react-toastify";

const MovieContent = ({
	poster_path,
	homepage,
	title,
	movieDetails,
	overview,
	id,
}) => {
	const [isInWatchlistState, setIsInWatchlistState] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const checkStatus = async () => {
			const exists = await checkWatchlistStatus(id);
			setIsInWatchlistState(exists);
			setIsLoading(false);
		};
		checkStatus();
	}, [id]);

	const handleWatchlist = async () => {
		setIsLoading(true);
		const movieId = id;
		const movieData = {
			id: movieId,
			title,
			poster_path,
		};

		if (isInWatchlistState) {
			const success = await removeFromWatchlist(movieId);
			if (success) {
				setIsInWatchlistState(false);
				toast.success("تمت إزالة الفيلم من قائمة المشاهدة!");
			}
		} else {
			const success = await addToWatchlist(movieData);
			if (success) {
				setIsInWatchlistState(true);
				toast.success("تمت إضافة الفيلم إلى قائمة المشاهدة!");
			}
		}
		setIsLoading(false);
	};

	console.log(isInWatchlistState);
	// Movie Details
	const details = useMemo(
		() =>
			movieDetails.map((detail, index) => (
				<MovieDetail key={index} label={detail.label} value={detail.value} />
			)),
		[movieDetails]
	);

	return (
		<main className="mb-3">
			<section className="d-flex gap-2 gap-md-3 gap-lg-4 flex-column flex-md-row align-items-md-center">
				{/* ================= Movie Poster ================= */}
				<MoviePoster
					posterPath={poster_path}
					homepage={homepage}
					title={title}
				/>

				{/* ================= Movie Details ================= */}
				<div className="details-info w-100">{details}</div>
			</section>

			<WatchlistButton
				isInWatchlist={isInWatchlistState}
				onClick={handleWatchlist}
				isLoading={isLoading}
			/>

			{/* ================= Movie Story ================= */}
			<section className="story p-3 gray-bg rounded-3 mt-4">
				<h3 className="mb-4 py-2 main-color">قصة الفيلم:</h3>
				<p>{overview || "غير متوفر"}</p>
			</section>

			{/* ================= Buttons Section ================= */}
			<section className="btns d-flex justify-content-center align-items-center my-4 gap-4 flex-wrap">
				{/* Watch Movie Button */}
				<a
					href={homepage || "#"}
					target="_blank"
					rel="noopener noreferrer"
					className="btn btn-main d-flex gap-2 align-items-center"
					style={homepage ? {} : { pointerEvents: "none", opacity: 0.5 }}
					aria-label={homepage ? "مشاهدة الفيلم" : "زر غير مفعل"}
					tabIndex={homepage ? "0" : "-1"}
				>
					مشاهدة الفيلم
					<span className="fa-solid fa-video mt-1"></span>
				</a>

				{/* Back to Home Button */}
				<NavLink
					to="/"
					className="btn btn-main d-flex gap-2 align-items-center"
					aria-label="عودة للصفحة الرئيسية"
				>
					عودة للصفحة الرئيسية
					<span className="fa-solid fa-house"></span>
				</NavLink>
			</section>
		</main>
	);
};

MovieContent.propTypes = {
	poster_path: PropTypes.string,
	homepage: PropTypes.string,
	title: PropTypes.string,
	movieDetails: PropTypes.array,
	id: PropTypes.string,
	overview: PropTypes.string,
};

export default memo(MovieContent);
