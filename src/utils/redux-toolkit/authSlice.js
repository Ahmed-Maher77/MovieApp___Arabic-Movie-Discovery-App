import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	authLoading: true,
	isAuth: false,
	userData: null,
};

const auth = createSlice({
	name: "auth",
	initialState,

	reducers: {
		setIsAuth: (state, action) => {
			state.isAuth = action.payload;
		},
		setUserData: (state, action) => {
			state.userData = action.payload;
		},
		setAuthLoading: (state, action) => {
			state.authLoading = action.payload;
		},
	},
});

export const { setIsAuth, setUserData, setAuthLoading } = auth.actions;
export default auth.reducer;
