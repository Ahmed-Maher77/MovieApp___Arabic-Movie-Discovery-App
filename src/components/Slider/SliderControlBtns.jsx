import { memo } from "react";

const SliderControlBtns = () => {
	return (
		<>
			{/* Previous Slide Button */}
			<button
				type="button"
				className="carousel-control-prev"
				data-bs-target="#slider"
				data-bs-slide="prev"
				aria-label="Previous slide"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			
			{/* Next Slide Button */}
			<button
				type="button"
				className="carousel-control-next"
				data-bs-target="#slider"
				data-bs-slide="next"
				aria-label="Next slide"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</>
	);
};

export default memo(SliderControlBtns);
