import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import React, { Suspense, useMemo } from "react";
import { Provider } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import store from "./utils/redux-toolkit/store.js";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MainLoader from "./components/Loader/MainLoader";

// Lazy-loaded pages to improve performance
const MoviesList = React.lazy(() => import("./pages/MoviesList/MoviesList"));
const MoviesDetails = React.lazy(() => import("./pages/MoviesDetails/MoviesDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound.jsx"));

function App() {
	const router = useMemo(       // to prevent unnecessary re-creation of the router
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
			<AnimatePresence mode="wait">       {/* for smooth page transitions */}
				<motion.div key={window.location.pathname}>
					<RouterProvider router={router} />
				</motion.div>
			</AnimatePresence>
		</Provider>
	);
}

export default App;
