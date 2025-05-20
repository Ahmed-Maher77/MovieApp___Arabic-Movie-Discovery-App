import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import MainLoader from "../../components/Loader/MainLoader";
import useGoogleLogin from "../../hooks/useGoogleLogin";

function RequireAuth({ children }) {
	const isAuth = useSelector((state) => state.auth.isAuth);
	const authLoading = useSelector((state) => state.auth.authLoading);
	const handleLogin = useGoogleLogin();

	// Show loader while authLoading
	if (authLoading) {
		return <MainLoader />;
	}

	if (isAuth) {
		return children;
	} else {
		return (
			<div className="page-height d-flex align-items-center justify-content-center bg-gradient">
				<div className="container">
					<div className="text-center d-flex flex-column gap-3">
						<h2 className="fw-bold">يرجى تسجيل الدخول اولاً</h2>
						<p>يرجى تسجيل الدخول أولاً حتى تتمكن من الوصول لهذه الصفحة</p>
						<button
							className="btn-main btn d-flex gap-2 align-items-center w-fit mx-auto"
							onClick={handleLogin}
						>
							تسجيل الدخول
							<span className="fa-solid fa-arrow-right"></span>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

RequireAuth.propTypes = {
	children: PropTypes.node.isRequired,
};

export default RequireAuth;
