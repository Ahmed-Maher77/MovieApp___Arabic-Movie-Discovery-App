import { useDispatch } from "react-redux";
import { setIsAuth, setUserData } from "../utils/redux-toolkit/authSlice";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/api/firebase-config";
import { toast } from "react-toastify";

export default function useGoogleLogin() {
	const dispatch = useDispatch();

	return () => {
		signInWithPopup(auth, provider)
			.then(({ user }) => {
				dispatch(setIsAuth(true));
				dispatch(
					setUserData({
						uid: user.uid,
						displayName: user.displayName,
						email: user.email,
						photoURL: user.photoURL,
					})
				);
				toast.success("تم تسجيل الدخول بنجاح");
			})
			.catch((error) => {
				console.error(error);
				toast.error("حدث خطأ أثناء تسجيل الدخول");
			});
	};
}
