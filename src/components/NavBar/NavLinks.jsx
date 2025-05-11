import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavLinks = ({ isAuth, closeMenu }) => (
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
		{isAuth && (
			<li className="nav-item">
				<NavLink
					className="nav-link fs-5 px-3"
					to="/watchlist"
					onClick={closeMenu}
				>
					قائمة المشاهدة
				</NavLink>
			</li>
		)}
	</ul>
);

NavLinks.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	closeMenu: PropTypes.func.isRequired,
};

export default NavLinks;
