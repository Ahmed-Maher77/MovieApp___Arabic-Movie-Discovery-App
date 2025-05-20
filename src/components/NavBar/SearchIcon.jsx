import PropTypes from "prop-types";

const SearchIcon = ({
	onClick,
	className = "",
	ariaLabel = "Search movies",
}) => (
	<div
		className={`search-icon fs-4 btn ${className}`}
		onClick={onClick}
		aria-label={ariaLabel}
	>
		<span className="fa-solid fa-magnifying-glass white-color"></span>
	</div>
);

SearchIcon.propTypes = {
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	ariaLabel: PropTypes.string,
};

export default SearchIcon;
