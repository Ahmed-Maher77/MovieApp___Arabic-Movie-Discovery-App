import PropTypes from "prop-types";

const SearchBar = ({ value, onChange, onClose, show }) => {
	return (
		<div className={`search-bar-container ${show ? "show" : "hide"}`}>
			<div className="container">
				<form
					className="d-flex gap-2 w-100 mt-3 align-items-center"
					role="search"
					onSubmit={(e) => e.preventDefault()}
				>
					<div className="input-field position-relative w-100">
						<input
							className="form-control rounded-5 px-3"
							type="search"
							placeholder="ابحث"
							aria-label="Search"
							value={value}
							onChange={onChange}
						/>
						{value.length > 0 || (
							<span className="fa-solid fa-magnifying-glass dark-color fs-5 position-absolute"></span>
						)}
					</div>
					<span
						className="fa-solid fa-xmark dark-color p-2 trans-3"
						style={{ cursor: "pointer", fontSize: "1.1rem" }}
						type="button"
						onClick={onClose}
						aria-label="Close search"
					></span>
				</form>
			</div>
		</div>
	);
};

SearchBar.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
};

export default SearchBar;
