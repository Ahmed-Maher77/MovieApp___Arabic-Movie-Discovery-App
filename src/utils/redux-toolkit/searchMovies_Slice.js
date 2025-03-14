import { createSlice } from "@reduxjs/toolkit";


const searchMovies_Slice = createSlice({
	name: "search_movies",
	initialState: { 
        searchByValue: ""
    },
	reducers: {
		setSearchByValue: (state, action) => {
			state.searchByValue = action.payload;
		},
	},
});


export const { setSearchByValue } = searchMovies_Slice.actions;
export default searchMovies_Slice.reducer;
