import { createSlice } from "@reduxjs/toolkit";


const searchTvSeries_Slice = createSlice({
	name: "search_tvseries",
	initialState: { 
        searchByValue: ""
    },
	reducers: {
		setSearchTvSeriesByValue: (state, action) => {
			state.searchByValue = action.payload;
		},
	},
});


export const { setSearchTvSeriesByValue } = searchTvSeries_Slice.actions;
export default searchTvSeries_Slice.reducer;
