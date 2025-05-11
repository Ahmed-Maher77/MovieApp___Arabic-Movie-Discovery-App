import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function RequireAuth({ children }) {
	const isAuth = useSelector((state) => state.auth.isAuth);
	const navigate = useNavigate();
	const { pathname } = useLocation();

	// Redirect authenticated users away from login page
	useEffect(() => {
		if (isAuth && pathname === "/login") {
			navigate("/");
		}
	}, [isAuth, pathname, navigate]);

	// Redirect unauthenticated users to login (except on /login)
	useEffect(() => {
		if (!isAuth && pathname !== "/login") {
			navigate("/login", { replace: true });
		}
	}, [isAuth, pathname, navigate]);

	// Allow access to login page regardless of auth status
	if (pathname === "/login") {
		return children;
	}
	if (isAuth) {
		return children;
	} else {
		return null;
	}
}

RequireAuth.propTypes = {
	children: PropTypes.node.isRequired,
};

export default RequireAuth;
