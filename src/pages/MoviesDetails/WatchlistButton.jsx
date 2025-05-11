import PropTypes from "prop-types";

const WatchlistButton = ({ isInWatchlist, onClick, isLoading }) => (
	<div className="mb-3 text-end">
		<button
			className={`watchlist-btn ${isInWatchlist ? "remove" : "add"}`}
			onClick={onClick}
			disabled={isLoading}
		>
			{isLoading ? (
				<span
					className="spinner-border spinner-border-sm  small"
					role="status"
					aria-hidden="true"
				></span>
			) : (
				<>
					<span className="icon">
						{isInWatchlist ? (
							<span className="fa-solid fa-check"></span>
						) : (
							<span className="fa-solid fa-plus"></span>
						)}
					</span>
					{isInWatchlist ? "إزالة من قائمة المشاهدة" : "أضف إلى قائمة المشاهدة"}
				</>
			)}
		</button>
	</div>
);

WatchlistButton.propTypes = {
	isInWatchlist: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired,
	isLoading: PropTypes.bool,
};

WatchlistButton.defaultProps = {
	isLoading: false,
};

export default WatchlistButton;
