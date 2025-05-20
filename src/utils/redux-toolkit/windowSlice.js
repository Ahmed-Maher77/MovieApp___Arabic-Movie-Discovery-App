import { createSlice } from "@reduxjs/toolkit";

const windowSlice = createSlice({
	name: "window_properties",
	initialState: { 
        isLargeScreen: window.innerWidth > 991, 
		page_direction: "rtl"
    },
	reducers: {
		setIsLargeScreen: (state, action) => {
			state.isLargeScreen = action.payload;
		},
		setPageDirection: (state, action) => {
			state.page_direction = action.payload;
		},
	},
});
export const { setIsLargeScreen, setPageDirection } = windowSlice.actions;
export default windowSlice.reducer;
