import { configureStore } from "@reduxjs/toolkit";
import window_properties from "./windowSlice";
import search_movies from "./searchMovies_Slice";


const store = configureStore({
	reducer: {
		window_properties: window_properties,
		search_movies: search_movies
	},
});

export default store;
