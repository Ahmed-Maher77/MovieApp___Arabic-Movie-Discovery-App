import Profile_Dropdown from "./Profile_Dropdown/Profile_Dropdown";
import { useSelector } from "react-redux";
import ContactUs_Link from "./ContactUs_Link";
import useGoogleLogin from "../../hooks/useGoogleLogin";
import NavLinkItem from "./NavLinkItem";
import LoginButton from "./LoginButton";

const NavLinks = ({ closeMenu }) => {
	const isAuth = useSelector((state) => state.auth.isAuth);
	const handleLogin = useGoogleLogin();

	return (
		<ul className="navbar-nav me-auto mb-2 mb-lg-0 pe-1">
			<NavLinkItem to="/" onClick={closeMenu}>
				الرئيسية
			</NavLinkItem>
			<NavLinkItem to="/movies" onClick={closeMenu}>
				الأفلام
			</NavLinkItem>
			<NavLinkItem to="/watchlist" onClick={closeMenu}>
				قائمة المشاهدة
			</NavLinkItem>
			<ContactUs_Link closeMenu={closeMenu} />
			{isAuth ? (
				<li className="nav-item">
					<Profile_Dropdown />
				</li>
			) : (
				<LoginButton
					onClick={() => {
						closeMenu();
						handleLogin();
					}}
				/>
			)}
		</ul>
	);
};

import PropTypes from "prop-types";
NavLinks.propTypes = {
	closeMenu: PropTypes.func.isRequired,
};

export default NavLinks;
