import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";

const MovieCard = ({
	movie,
	onRemove,
	isRemoving,
	onToggleWatched,
	isTogglingWatched,
}) => {
	const navigate = useNavigate();

	const truncateTitle = (title) => {
		if (title.length > 20) {
			return title.slice(0, 20) + "...";
		}
		return title;
	};

	const handleMovieClick = () => {
		navigate(`/movies/${movie.id}`);
	};

	return (
		<div className="col" style={{ maxWidth: "350px" }}>
			<div className="card h-100 watchlist-card position-relative">
				{/* Movie Poster */}
				<img
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					className="card-img-top"
					alt={movie.title}
				/>

				{/* Movie Link Icon */}
				<div className="movie-link-icon" onClick={handleMovieClick}>
					<i className="fas fa-external-link-alt"></i>
				</div>

				{/* Movie Title */}
				<div className="card-body position-absolute left-0 w-100">
					<div className="card-title-container">
						<h5 className="card-title">{truncateTitle(movie.title)}</h5>
					</div>
				</div>

				{/* Remove Button */}
				<div className="card-footer d-flex justify-content-between align-items-center gap-2">
					<button
						className="btn btn-danger w-100"
						onClick={() => onRemove(movie.id)}
						disabled={isRemoving}
					>
						{isRemoving ? (
							<span
								className="spinner-border spinner-border-sm"
								role="status"
								aria-hidden="true"
							></span>
						) : (
							<>
								<i className="fas fa-trash ms-2"></i>
								إزالة من القائمة
							</>
						)}
					</button>
					<button
						className={`btn ${
							movie.isWatched ? "btn-success" : "btn-outline-secondary"
						} ms-2`}
						onClick={onToggleWatched}
						disabled={isTogglingWatched}
						aria-label={movie.isWatched ? "مشاهَد" : "غير مشاهَد"}
					>
						{isTogglingWatched ? (
							<span
								className="spinner-border spinner-border-sm small"
								role="status"
								aria-hidden="true"
							></span>
						) : movie.isWatched ? (
							<i className="fas fa-eye"></i>
						) : (
							<i className="fas fa-eye-slash"></i>
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

MovieCard.propTypes = {
	movie: PropTypes.object.isRequired,
	onRemove: PropTypes.func.isRequired,
	isRemoving: PropTypes.bool,
	onToggleWatched: PropTypes.func.isRequired,
	isTogglingWatched: PropTypes.bool,
};

MovieCard.defaultProps = {
	isRemoving: false,
	isTogglingWatched: false,
};

export default MovieCard;
