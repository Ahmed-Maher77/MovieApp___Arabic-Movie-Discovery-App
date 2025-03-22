import propTypes from "prop-types";

// Movie Detail Row Component
const MovieDetail = ({ label, value }) => {
	if (!value) {
		return null; // Avoids rendering empty rows
	}
	return (
		<p>
			<b className="ms-2">{label}:</b> {value}
		</p>
	);
};

MovieDetail.propTypes = {
	label: propTypes.string.isRequired,
	value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired, // Accepts strings and numbers
};

export default MovieDetail;
