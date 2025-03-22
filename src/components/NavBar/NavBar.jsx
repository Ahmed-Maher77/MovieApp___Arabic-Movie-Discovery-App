import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState, useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchByValue } from "../../utils/redux-toolkit/searchMovies_Slice";
import logo from "../../assets/logo.png";
import "./NavBar.css";

const NavBar = memo(() => {
	const { pathname } = useLocation();
	const dispatch = useDispatch();
	const searchByValue = useSelector(state => state.search_movies.searchByValue);
	const [showSearch, setShowSearch] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeBtnRef = useRef();
	
	// Toggle search bar only on the movies page
	useEffect(() => {
		setShowSearch(pathname === "/movies")
	}, [pathname])

	// Close mobile menu
	const closeMenu = () => {
		setIsMenuOpen(false);
		closeBtnRef.current?.click();
	};

	// Handle search input efficiently
	const handleSearch = useCallback((e) => {
		dispatch(setSearchByValue(e.target.value));
	}, [dispatch]);

	return (
		<div className="Navbar main-bg main-color">
			<nav className="navbar navbar-expand-lg px-2 flex-column" id="navbar">
				<div className="container">
					{/* =========== Logo =========== */}
					<NavLink className="navbar-brand fw-bold" to="/" onClick={() => closeBtnRef.current?.click()}>
						<img src={logo} alt="App logo" />
					</NavLink>

					{/* ============== Burger Icon + Search Icon ============== */}
					<div className="burger-search-wraper d-flex gap-3 align-items-center">
						{/* Mobile search icon (hidden on movies page) */}
						<div className={`search-icon fs-4 btn ms-auto ${pathname === "/movies" ? "d-none" : "d-block d-lg-block"} d-lg-none`} onClick={() => setShowSearch(true)} aria-label="Search movies">
							<span className="fa-solid fa-magnifying-glass white-color"></span>
						</div>
						{/* Burger menu toggle */}
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
							<span className={`fa-solid fa-bars ${isMenuOpen? "opacity-0" : ""}`}></span>
							<span className={`fa-solid fa-xmark position-absolute top-50 start-50 font-3 translate-center text-white ${isMenuOpen? "" : "opacity-0"}`}></span>
						</button>
					</div>

					{/* ================ Navigation Links ================ */}
					<div className={`collapse navbar-collapse mt-2`} id="navbarTogglerDemo02">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 pe-1">
							<li className="nav-item">
								<NavLink className="nav-link fs-5 px-3" aria-current="page" to="/" onClick={closeMenu}>
									الرئيسية
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link fs-5 px-3" to="/movies" onClick={closeMenu}>
									الأفلام
								</NavLink>
							</li>

							{/* Desktop search icon (hidden on movies page) */}
							<div className={`search-icon fs-4 btn ${pathname === "/movies" ? "d-none" : ""} d-none d-lg-block`} onClick={() => setShowSearch(true)} aria-label="Search movies">
								<span className="fa-solid fa-magnifying-glass white-color"></span>
							</div>

						</ul>
					</div>
				</div>

				{/* ============= Search Bar =============  */}
				{showSearch && (
					<div className="container">
						<form className="d-flex gap-2 w-100 mt-3  align-items-center" role="search">
							{/* ======= search field ======= */}
							<div className="input-field position-relative w-100">
								<input
									className="form-control rounded-5 px-3"
									type="search"
									placeholder="ابحث"
									aria-label="Search"
									value={searchByValue}
									onChange={handleSearch}
								/>
								{/* Search icon inside input (only visible when input is empty) */}
								{searchByValue.length > 0 || <span className="fa-solid fa-magnifying-glass dark-color fs-5 position-absolute"></span>}
							</div>
							
							{/* Close search button */}
							<span
								className={`fa-solid fa-xmark dark-color fs-4 p-2 trans-3 ${pathname === "/movies" ? "d-none" : ""}`}
								type="button"
								onClick={() => setShowSearch(false)}
								aria-label="Close search"
							></span>
						</form>
					</div>
				)}
			</nav>
		</div>
	);
});

// Add display name for better debugging
NavBar.displayName = "NavBar";

export default NavBar;
