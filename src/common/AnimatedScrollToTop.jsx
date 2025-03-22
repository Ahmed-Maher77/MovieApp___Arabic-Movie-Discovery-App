import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const AnimatedScrollToTop = ({dependancy}) => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [pathname, dependancy]);

	return null;
};

// PropTypes Validation
AnimatedScrollToTop.propTypes = {
	dependancy: PropTypes.any,
};

export default AnimatedScrollToTop;
