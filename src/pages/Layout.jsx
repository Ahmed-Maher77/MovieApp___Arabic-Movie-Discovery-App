import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setIsLargeScreen } from "../utils/redux-toolkit/windowSlice.js";
import Footer from "../components/Footer/Footer.jsx";

const Layout = () => {
	const dispatch = useDispatch();

	// 
	useEffect(() => {
		const hanldeResize = () => {
			dispatch(setIsLargeScreen(window.innerWidth > 991));
		}
		window.addEventListener("resize", hanldeResize);
		return () => window.removeEventListener("resize", hanldeResize);
	}, [dispatch])

	return (
		
			<div>
				<NavBar />
				<Outlet />
				<Footer />
			</div>
		
	);
};

export default Layout;
