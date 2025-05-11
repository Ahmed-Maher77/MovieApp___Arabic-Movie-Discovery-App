import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./utils/redux-toolkit/store";
import { Provider } from "react-redux";
import React, { Suspense, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MainLoader from "./components/Loader/MainLoader";
import RequireAuth from "./common/Authentication/RequireAuth.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// Lazy-loaded pages to improve performance
const MoviesList = React.lazy(() => import("./pages/MoviesList/MoviesList"));
const MoviesDetails = React.lazy(() =>
	import("./pages/MoviesDetails/MoviesDetails")
);
const Watchlist = React.lazy(() => import("./pages/Watchlist/Watchlist"));
const NotFound = React.lazy(() => import("./pages/NotFound.jsx"));

function App() {
	const router = useMemo(
		() =>
			createBrowserRouter([
				{
					element: <Layout />,
					children: [
						{ path: "/", element: <Home /> },
						{
							path: "/movies",
							element: (
								<Suspense fallback={<MainLoader />}>
									<MoviesList />
								</Suspense>
							),
						},
						{
							path: "/movies/:id",
							element: (
								<Suspense fallback={<MainLoader />}>
									<MoviesDetails />
								</Suspense>
							),
						},
						{
							path: "/profile",
							element: (
								<Suspense fallback={<MainLoader />}>
									<RequireAuth>
										{" "}
										<Profile />{" "}
									</RequireAuth>
								</Suspense>
							),
						},
						{
							path: "/login",
							element: (
								<Suspense fallback={<MainLoader />}>
									<RequireAuth>
										<div>Login Page</div>
									</RequireAuth>
								</Suspense>
							),
						},
						{
							path: "/watchlist",
							element: (
								<Suspense fallback={<MainLoader />}>
									<RequireAuth>
										<Watchlist />
									</RequireAuth>
								</Suspense>
							),
						},
						{
							path: "*",
							element: (
								<Suspense fallback={<MainLoader />}>
									<NotFound />
								</Suspense>
							),
						},
					],
				},
			]),
		[]
	);

	return (
		<Provider store={store}>
			<ToastContainer position="top-center" autoClose={2000} />
			<AnimatePresence mode="wait">
				<motion.div key={window.location.pathname}>
					<RouterProvider router={router} />
				</motion.div>
			</AnimatePresence>
		</Provider>
	);
}

export default App;
