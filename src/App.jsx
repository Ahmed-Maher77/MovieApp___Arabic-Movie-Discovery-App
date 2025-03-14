import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import React, { Suspense } from "react";
import Home from "./pages/Home"
const MoviesList = React.lazy(() => import ("./pages/MoviesList/MoviesList"));
import MainLoader from "./components/Loader/MainLoader";
const MoviesDetails = React.lazy(() => import ("./pages/MoviesDetails/MoviesDetails"));
const NotFound = React.lazy(() => import ("./pages/NotFound.jsx"));
import { Provider} from "react-redux";
import store from "./utils/redux-toolkit/store.js"

function App() {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{ path: "/", element: <Home /> },
				{
					path: "/movies",
					element: (
						<Suspense fallback={<MainLoader />}><MoviesList /></Suspense>
					),
				},
				{
					path: "/movies/:id",
					element: (
						<Suspense fallback={<MainLoader />}><MoviesDetails /></Suspense>
					),
				},
				{
					path: "*",
					element: (
						<Suspense fallback={<MainLoader />}><NotFound /></Suspense>
					),
				},
			],
		},
	]);
	return <Provider store={store}>
		<RouterProvider router={router} />;
	</Provider>
}

export default App;
