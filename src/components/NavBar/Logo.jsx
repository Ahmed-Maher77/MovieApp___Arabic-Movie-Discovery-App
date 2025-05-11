import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Logo = ({ onClick }) => (
	<NavLink className="navbar-brand fw-bold" to="/" onClick={onClick}>
		<img src={logo} alt="App logo" />
	</NavLink>
);

export default Logo;
