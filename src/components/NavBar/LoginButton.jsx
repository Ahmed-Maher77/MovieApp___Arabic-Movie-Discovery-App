import PropTypes from "prop-types";

const LoginButton = ({ onClick }) => (
	<li className="nav-item">
		<button
			className="login-btn d-flex align-items-center gap-2 fw-bold mt-4 mt-lg-0 justify-content-center w-100"
			onClick={onClick}
		>
			<img
				src="https://www.google.com/favicon.ico"
				alt="Google"
				width="20"
				height="20"
			/>
			تسجيل الدخول
		</button>
	</li>
);

LoginButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default LoginButton;
