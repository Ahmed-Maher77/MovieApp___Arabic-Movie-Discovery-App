import { useNavigate } from "react-router-dom";
import "./MovieCard.css";
import MobileDescription from "./MobileDescription";
import DesktopDescription from "./DesktopDescription";
import propTypes from "prop-types";
import { useSelector } from "react-redux";

const MovieCard = ({ imgSrc, title, date, vote_count, rate, id, className }) => {
    const navigate = useNavigate();
	const isLargeScreen = useSelector(state => state.window_properties.isLargeScreen);

	return (
		<figure className={`MovieCard ${className}`} onClick={() => navigate(`/movies/${id}`)}>
			<div className="card position-relative">
				{/* =============== Image =============== */}
				<div className="card-img h-100">
					<img src={imgSrc} alt="Movie poster" className="w-100 h-100" />
				</div>

				{/* =============== Description >> based on the Screen Size =============== */}
				{isLargeScreen? <DesktopDescription title={title} date={date} vote_count={vote_count} rate={rate} />: (
					<MobileDescription title={title} rate={rate} />
				)}
			</div>
		</figure>
	);
};

// PropTypes Validation
MovieCard.propTypes = {
	imgSrc: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    vote_count: propTypes.number.isRequired,
    rate: propTypes.number.isRequired,
    id: propTypes.number.isRequired,
    className: propTypes.string
}

export default MovieCard;
