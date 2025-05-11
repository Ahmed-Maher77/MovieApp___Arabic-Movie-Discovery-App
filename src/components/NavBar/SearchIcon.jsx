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

export default SearchIcon;
