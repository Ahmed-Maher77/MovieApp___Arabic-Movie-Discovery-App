const BurgerMenuButton = ({ isMenuOpen, setIsMenuOpen, closeBtnRef }) => (
	<button
		className="navbar-toggler position-relative"
		type="button"
		data-bs-toggle="collapse"
		data-bs-target="#navbarTogglerDemo02"
		aria-controls="navbarTogglerDemo02"
		aria-expanded="false"
		aria-label="Toggle navigation"
		onClick={() => setIsMenuOpen(!isMenuOpen)}
		ref={closeBtnRef}
	>
		<span
			className={`fa-solid fa-bars ${isMenuOpen ? "opacity-0" : ""}`}
		></span>
		<span
			className={`fa-solid fa-xmark position-absolute top-50 start-50 font-3 translate-center text-white ${
				isMenuOpen ? "" : "opacity-0"
			}`}
		></span>
	</button>
);

export default BurgerMenuButton;
