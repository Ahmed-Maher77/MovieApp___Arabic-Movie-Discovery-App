import PropTypes from "prop-types";

const ProfileActions = ({ onEdit, onChangePassword, onLogout }) => (
	<div className="d-flex flex-column gap-3 justify-content-center mt-3">
		<div className="d-flex flex-column flex-md-row gap-3 justify-content-between mt-3">
			<button
				className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 px-4 py-2 shadow-sm rounded-pill"
				onClick={onEdit}
				title="تعديل الملف الشخصي"
			>
				<i className="bi bi-pencil-square"></i>
				تعديل الملف الشخصي
			</button>
			<button
				className="btn btn-outline-primary d-flex align-items-center justify-content-center gap-2 px-4 py-2 shadow-sm rounded-pill"
				onClick={onChangePassword}
				title="تغيير كلمة المرور"
			>
				<i className="bi bi-key"></i>
				تغيير كلمة المرور
			</button>
		</div>
		<button
			className="btn btn-danger d-flex align-items-center justify-content-center gap-2 px-4 py-2 shadow-sm rounded-pill"
			onClick={onLogout}
			title="تسجيل الخروج"
		>
			<i className="bi bi-box-arrow-right"></i>
			تسجيل الخروج
		</button>
	</div>
);

ProfileActions.propTypes = {
	onEdit: PropTypes.func.isRequired,
	onChangePassword: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired,
};

export default ProfileActions;
