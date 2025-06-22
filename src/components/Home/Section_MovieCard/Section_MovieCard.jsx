import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useCallback, memo } from "react";
import propTypes from "prop-types";
import "../../MovieCard/MovieCard.css";
import MobileDescription from "../../MovieCard/MobileDescription";
import DesktopDescription from "../../MovieCard/DesktopDescription";
import { Section_MovieCardVariants } from "../../../utils/Animations_Variants/Animations_Variants";

const Section_MovieCard = memo(
	({ imgSrc, title, date, vote_count, rate, id }) => {
		const navigate = useNavigate();

		// Animation logic
		const [animationCount, setAnimationCount] = useState(0);
		const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

		// Prevents unnecessary re-renders of the function
		const handleNavigation = useCallback(() => {
			navigate(`/movies/${id}`);
		}, [navigate, id]);

		// Ensure state updates only when necessary
		if (inView && animationCount < 2) {
			setAnimationCount((prev) => prev + 1);
		}

		return (
			<motion.figure
				ref={ref}
				className="MovieCard"
				onClick={handleNavigation}
				variants={Section_MovieCardVariants}
				initial="hidden"
				animate={
					animationCount > 0 && animationCount <= 2 ? "visible" : "hidden"
				}
				role="button"
				aria-label={`View details for ${title}`}
				tabIndex={0}
				onKeyDown={(e) => e.key === "Enter" && handleNavigation()}
			>
				<div className="card position-relative">
					{/* =============== Image =============== */}
					<div className="card-img h-100">
						<img src={imgSrc} alt="Movie poster" className="w-100 h-100" />
					</div>

					{/* =============== Description =============== */}
					<MobileDescription
						title={title}
						date={date}
						vote_count={vote_count}
						rate={rate}
					/>
					<DesktopDescription
						title={title}
						date={date}
						vote_count={vote_count}
						rate={rate}
					/>
				</div>
			</motion.figure>
		);
	}
);

// Add display name to prevent ESLint warning
Section_MovieCard.displayName = "TrendingMovieCard";

// PropTypes Validation
Section_MovieCard.propTypes = {
	imgSrc: propTypes.string.isRequired,
	title: propTypes.string.isRequired,
	date: propTypes.string.isRequired,
	vote_count: propTypes.number.isRequired,
	rate: propTypes.number.isRequired,
	id: propTypes.number.isRequired,
};

export default Section_MovieCard;
