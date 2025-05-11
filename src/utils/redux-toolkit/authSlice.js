import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuth: true,
};

const auth = createSlice({
	name: "auth",
	initialState,

	reducers: {
		setIsAuth: (state, action) => {
			state.isAuth = action.payload;
		},
	},
});

export const { setIsAuth } = auth.actions;
export default auth.reducer;
