import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { HomeSliderHeadingVariants, HomeSliderInfoVariants } from "../../utils/Animations_Variants/Animations_Variants";

const SliderCaption = ({ movie }) => {
	const isLargeScreen = useSelector((state) => state.isLargeScreen);

	// Memoized overview to avoid unnecessary calculations
	const trimmedOverview = useMemo(() => 
		isLargeScreen ? movie.overview : `${movie.overview.slice(0, 100)}...`,
		[isLargeScreen, movie.overview]
	);

	return (
		<div className="carousel-caption text-end col-12 position-static">
			<div className="container">
				{/* Movie Title */}
				<motion.h5 
					className="fs-4 fw-bold" 
					key="home-slider-heading"
					variants={HomeSliderHeadingVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					aria-label={`Movie title: ${movie.title}`}
				>
					{movie.title}
				</motion.h5>

				{/* Movie Overview */}
				<motion.p 
					className="fs-6 d-gray-fixed-color"
					key="home-slider-overview"
					variants={HomeSliderHeadingVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					role="text"
				>
					{trimmedOverview}
				</motion.p>

				{/* Movie Rating & Views */}
				<motion.div 
					className="info d-flex gap-3" 
					key="home-slider-info"
					variants={HomeSliderInfoVariants}
					initial="initial"
					animate="animate"
					exit="exit"
				>
					<p className="fs-6 d-gray-fixed-color border-start ps-3">
						Rating: {movie.rating}
					</p>
					<p className="fs-6 d-gray-fixed-color">Views: {movie.view}</p>
				</motion.div>
			</div>
		</div>
	);
};

SliderCaption.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
		overview: PropTypes.string.isRequired,
		rating: PropTypes.number.isRequired,
		view: PropTypes.number.isRequired,
	}).isRequired,
};

export default memo(SliderCaption);
