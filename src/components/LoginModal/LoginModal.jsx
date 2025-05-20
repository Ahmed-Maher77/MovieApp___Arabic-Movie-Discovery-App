import PropTypes from "prop-types";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
	if (!isOpen) return null;

	return (
		<div className="login-modal-overlay" onClick={onClose}>
			<div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="login-modal-header">
					<h3>تسجيل الدخول</h3>
					<button className="close-btn" onClick={onClose} aria-label="إغلاق">
						<span className="fa-solid fa-xmark"></span>
					</button>
				</div>
				<div className="login-modal-body">
					<p>يرجى تسجيل الدخول لإضافة فيلم إلى قائمة المشاهدة</p>
					<button className="login-btn" onClick={onLogin}>
						<img
							src="https://www.google.com/favicon.ico"
							alt="Google"
							width="20"
							height="20"
						/>
						تسجيل الدخول باستخدام Google
					</button>
				</div>
			</div>
		</div>
	);
};

LoginModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	onLogin: PropTypes.func.isRequired,
};

export default LoginModal;
