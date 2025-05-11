import { useDispatch } from "react-redux";
import { setIsAuth } from "../../utils/redux-toolkit/authSlice";

const Profile = () => {
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(setIsAuth(false));
	};

	return (
		<div className="Profile-Page page-height">
			<div className="container">
				<button onClick={handleLogout} className="btn btn-danger mb-3">
					تسجيل الخروج
				</button>

				<h1>Profile Page</h1>
			</div>
		</div>
	);
};

export default Profile;
