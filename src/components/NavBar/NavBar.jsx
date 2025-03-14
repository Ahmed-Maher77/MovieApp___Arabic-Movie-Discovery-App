import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./NavBar.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchByValue } from "../../utils/redux-toolkit/searchMovies_Slice";

const NavBar = () => {
	const { pathname } = useLocation();
	const dispatch = useDispatch();
	const searchByValue = useSelector(state => state.search_movies.searchByValue);
	const [showSearch, setShowSearch] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeBtnRef = useRef();
	
	useEffect(() => {
		setShowSearch(pathname === "/movies")
	}, [pathname])

	const closeMenu = () => {
		setIsMenuOpen(false);
		closeBtnRef.current.click();
	};

	const handleSearch = (e) => {
		const value = e.target.value.trim();
		dispatch(setSearchByValue(value))
	}

	return (
		<div className="Navbar main-bg main-color">
			<nav className="navbar navbar-expand-lg px-2 flex-column" id="navbar">
				<div className="container">
					{/* =========== Logo =========== */}
					<NavLink className="navbar-brand fw-bold" to="/" onClick={() => closeBtnRef.current.click()}>
						<img src={logo} alt="logo" />
					</NavLink>

					{/* ============== Burger Icon + Search Icon ============== */}
					<div className="burger-search-wraper d-flex gap-3 align-items-center">
						<div className={`search-icon fs-4 btn ms-auto ${pathname === "/movies" ? "d-none" : "d-block d-lg-block"} d-lg-none`} onClick={() => setShowSearch(true)}>
							<span className="fa-solid fa-magnifying-glass white-color"></span>
						</div>
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

					{/* ================ Links ================ */}
					<div className={`collapse navbar-collapse mt-2`} id="navbarTogglerDemo02">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 pe-1">
							<li className="nav-item">
								<NavLink
									className="nav-link fs-5 px-3"
									aria-current="page"
									to="/"
									onClick={closeMenu}
								>
									الرئيسية
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link fs-5 px-3" to="/movies" onClick={closeMenu}>
									الأفلام
								</NavLink>
							</li>

							<div className={`search-icon fs-4 btn ${pathname === "/movies" ? "d-none" : ""} d-none d-lg-block`} onClick={() => setShowSearch(true)}>
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
								{/* search icon */}
								{searchByValue.length > 0 || <span className="fa-solid fa-magnifying-glass dark-color fs-5 position-absolute"></span>}
							</div>
							
							{/* ======= close search  ======= */}
							<span
								className={`fa-solid fa-xmark dark-color fs-4 p-2 trans-3 ${pathname === "/movies" ? "d-none" : ""}`}
								type="button"
								onClick={() => setShowSearch(false)}
							></span>
						</form>
					</div>
				)}
			</nav>
		</div>
	);
};

export default NavBar;
