import PropTypes from "prop-types";
import { memo, useMemo } from "react";

const SliderIndicators = ({slides}) => {
	const indicators = useMemo(() => 
		slides.map((_, index) => (
			<li
				key={index}
				data-bs-target="#slider"
				data-bs-slide-to={index}
				className={index === 0 ? "active" : ""}
				aria-label={`Slide ${index + 1}`}
				role="button"
			></li>
		)), 
		[slides]
	);
	return (
		<ul className="carousel-indicators" style={{ listStyle: "none" }}>
			{indicators}
		</ul>
	);
};

SliderIndicators.propTypes = {
    slides: PropTypes.array.isRequired
}

export default memo(SliderIndicators);
