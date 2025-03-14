import propTypes from "prop-types";

const DesktopDescription = ({ title, date, vote_count, rate }) => {
	return (
		<figcaption className="card-body position-absolute w-100 h-100 px-4 d-flex justify-content-center align-items-center d-none d-lg-flex">
			<div>
				{/* Movie Title */}
				<h3 className="card-title text-center fs-5">{title}</h3>

				{/* Movie Details */}
				<div className="details d-flex flex-column gap-2 text-center mt-5">
					<span>
						<span className="fa-solid fa-clock ms-2 main-color"></span>
						{date}
					</span>
					<span>
						<span className="fa-solid fa-user main-color ms-2"></span>
						{vote_count}
					</span>
					<div className="rating-stars d-flex flex-row-reverse gap-1 justify-content-center mt-2">
						{Array(5)
							.fill(null)
							.map((_, i) => (
								<span
									key={i}
									className={`fa-solid fa-star ${
										Math.round(+rate / 2) > i ? "text-warning" : ""
									}`}
								></span>
							))}
					</div>
				</div>
			</div>
		</figcaption>
	);
};

// PropTypes Validation
DesktopDescription.propTypes = {
    title: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    vote_count: propTypes.number.isRequired,
    rate: propTypes.number.isRequired,
}

export default DesktopDescription;
