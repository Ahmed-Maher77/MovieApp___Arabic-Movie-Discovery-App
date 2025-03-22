import propTypes from "prop-types";
import { memo } from "react";

const MobileDescription = memo(({ title, rate }) => {
	return (
		<figcaption className="card-body py-3 position-absolute bottom-0 w-100 px-4 d-flex justify-content-center align-items-center d-lg-none" aria-label={`Movie details for ${title}`}>
			<div>
				{/* Movie Title */}
				<h3 className="card-title text-center fs-5">{title}</h3>

				{/* Movie Details */}
				<div className="details d-flex flex-column gap-2 text-center mt-2">
					<div className="rating-stars d-flex flex-row-reverse gap-1 justify-content-center mt-2">
						{Array(5)
							.fill(null)
							.map((_, i) => (
								<span
									key={i}
									className={`fa-solid fa-star ${
										Math.round(+rate / 2) > i ? "text-warning" : ""
									}`}
									aria-hidden="true"
								></span>
							))}
					</div>
				</div>
			</div>
		</figcaption>
	);
});

// Add display name to prevent ESLint warning
MobileDescription.displayName = "MobileDescription";

// PropTypes validation
MobileDescription.propTypes = {
	title: propTypes.string.isRequired,
	rate: propTypes.number.isRequired,
};

export default MobileDescription;