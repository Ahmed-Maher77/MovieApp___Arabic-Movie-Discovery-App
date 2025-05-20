import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
const Logo = ({ onClick }) => (
	<NavLink className="navbar-brand fw-bold" to="/" onClick={onClick}>
		<img src={logo} alt="App logo" />
	</NavLink>
);
Logo.propTypes = {
	onClick: PropTypes.func,
};

export default Logo;
