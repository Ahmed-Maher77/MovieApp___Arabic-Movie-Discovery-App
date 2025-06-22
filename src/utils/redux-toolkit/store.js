import { configureStore } from "@reduxjs/toolkit";
import window_properties from "./windowSlice";
import search_movies from "./searchMovies_Slice";
import search_tvseries_reducer from "./searchTvSeries_Slice";
import authReducer from "./authSlice";
import watchlistReducer from "./watchlistSlice";

export const store = configureStore({
	reducer: {
		window_properties: window_properties,
		search_movies: search_movies,
		search_tvseries: search_tvseries_reducer,
		auth: authReducer,
		watchlist: watchlistReducer,
	},
});
