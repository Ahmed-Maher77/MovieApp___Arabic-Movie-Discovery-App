import { createSlice } from "@reduxjs/toolkit";

const windowSlice = createSlice({
	name: "window_properties",
	initialState: { 
        isLargeScreen: window.innerWidth > 991, 
    },
	reducers: {
		setIsLargeScreen: (state, action) => {
			state.isLargeScreen = action.payload;
		},
	},
});
export const { setIsLargeScreen } = windowSlice.actions;
export default windowSlice.reducer;
