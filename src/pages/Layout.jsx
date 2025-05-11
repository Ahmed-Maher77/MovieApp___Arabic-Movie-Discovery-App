import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { useDispatch } from "react-redux";
import { useCallback, useLayoutEffect } from "react";
import { setIsLargeScreen } from "../utils/redux-toolkit/windowSlice.js";
import Footer from "../components/Footer/Footer.jsx";
import AnimatedScrollToTop from "../common/AnimatedScrollToTop.jsx";
import { setIsAuth } from "../utils/redux-toolkit/authSlice.js";

const Layout = () => {
	const dispatch = useDispatch();

	const handleResize = useCallback(() => {
		dispatch(setIsLargeScreen(window.innerWidth > 991));
	}, [dispatch]);

	// useLayoutEffect for faster execution
	useLayoutEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [handleResize]);

	return (
		<div>
			{/* Ensure the page scrolls to the top on route change */}
			<AnimatedScrollToTop />

			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
