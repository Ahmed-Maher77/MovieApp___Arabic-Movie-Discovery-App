import { configureStore } from "@reduxjs/toolkit";
import window_properties from "./windowSlice";
import search_movies from "./searchMovies_Slice";
import authReducer from "./authSlice";
import watchlistReducer from "./watchlistSlice";

export const store = configureStore({
	reducer: {
		window_properties: window_properties,
		search_movies: search_movies,
		auth: authReducer,
		watchlist: watchlistReducer,
	},
});
