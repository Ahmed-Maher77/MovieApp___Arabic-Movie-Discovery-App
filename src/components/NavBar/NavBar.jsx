import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchByValue } from "../../utils/redux-toolkit/searchMovies_Slice";
import Logo from "./Logo";
import BurgerMenuButton from "./BurgerMenuButton";
import SearchIcon from "./SearchIcon";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import "./NavBar.css";

const NavBar = memo(() => {
	const { pathname } = useLocation();
	const dispatch = useDispatch();
	const searchByValue = useSelector(
		(state) => state.search_movies.searchByValue
	);
	const isAuth = useSelector((state) => state.auth.isAuth);
	const [showSearch, setShowSearch] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeBtnRef = useRef();
	const navigate = useNavigate();

	// Toggle search bar only on the movies page
	useEffect(() => {
		setShowSearch(pathname === "/movies");
	}, [pathname]);

	// Close mobile menu
	const closeMenu = () => {
		setIsMenuOpen(false);
		closeBtnRef.current?.click();
	};

	// Close menu on logo click
	const handleLogoClick = () => {
		setIsMenuOpen(false);
	};

	// Handle search input efficiently
	const handleSearch = useCallback(
		(e) => {
			const searchValue = e.target.value;
			dispatch(setSearchByValue(searchValue));
			if (searchValue.length > 0 && pathname !== "/movies") {
				// Use setTimeout to ensure Redux state is updated before navigation
				setTimeout(() => {
					navigate("/movies");
				}, 0);
			}
		},
		[dispatch, navigate, pathname]
	);

	return (
		<div className="Navbar main-bg main-color">
			<nav className="navbar navbar-expand-lg px-2 flex-column" id="navbar">
				<div className="container">
					{/* Logo */}
					<Logo onClick={handleLogoClick} />

					{/* Burger + Search Icon */}
					<div className="burger-search-wraper d-flex gap-3 align-items-center">
						{/* Mobile search icon (hidden on movies page) */}
						<SearchIcon
							onClick={() => setShowSearch((prev) => !prev)}
							className={`ms-auto ${
								pathname === "/movies" ? "d-none" : "d-block"
							} d-lg-none`}
							ariaLabel="Search movies"
						/>
						<BurgerMenuButton
							isMenuOpen={isMenuOpen}
							setIsMenuOpen={setIsMenuOpen}
							closeBtnRef={closeBtnRef}
						/>
					</div>

					{/* Navigation Links */}
					<div
						className={`collapse navbar-collapse mt-2`}
						id="navbarTogglerDemo02"
					>
						<NavLinks
							isAuth={isAuth}
							closeMenu={closeMenu}
							pathname={pathname}
						/>
						{/* Desktop search icon (hidden on movies page) */}
						<SearchIcon
							onClick={() => setShowSearch((prev) => !prev)}
							className={`${
								pathname === "/movies" ? "d-none" : ""
							} d-none d-lg-block`}
							ariaLabel="Search movies"
						/>
					</div>
				</div>

				{/* Search Bar */}
				<SearchBar
					value={searchByValue}
					onChange={handleSearch}
					onClose={() => setShowSearch(false)}
					show={showSearch}
				/>
			</nav>
		</div>
	);
});

// Add display name for better debugging
NavBar.displayName = "NavBar";

export default NavBar;
