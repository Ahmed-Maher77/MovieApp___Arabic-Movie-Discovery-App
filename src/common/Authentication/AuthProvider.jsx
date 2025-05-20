import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/api/firebase-config";
import {
	setIsAuth,
	setUserData,
	setAuthLoading,
} from "../../utils/redux-toolkit/authSlice";
import { fetchWatchlist } from "../../utils/redux-toolkit/watchlistSlice";

const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setAuthLoading(true));
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setIsAuth(true));
				dispatch(
					setUserData({
						uid: user.uid,
						displayName: user.displayName,
						email: user.email,
						photoURL: user.photoURL,
					})
				);
				dispatch(
					fetchWatchlist({
						userId: user.uid,
						name: user.displayName,
						email: user.email,
					})
				);
			} else {
				dispatch(setIsAuth(false));
				dispatch(setUserData(null));
			}
			dispatch(setAuthLoading(false));
		});

		return () => unsubscribe();
	}, [dispatch]);

	return children;
};

export default AuthProvider;
