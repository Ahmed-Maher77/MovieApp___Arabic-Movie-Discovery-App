import PropTypes from "prop-types";
import { toast } from "react-toastify";

const ProfileAvatar = ({ photoURL, displayName }) => (
	<div className="position-relative mb-3">
		<img
			src={photoURL || "https://via.placeholder.com/150"}
			alt={displayName}
			className="rounded-circle border border-4 border-primary shadow-lg profile-img"
			width="130"
			height="130"
			style={{ objectFit: "cover", background: "#eee" }}
		/>
		<span
			className="position-absolute translate-middle p-2 bg-primary rounded-circle border shadow profile-edit-icon d-flex align-items-center justify-content-center"
			style={{
				cursor: "pointer",
				bottom: "-10px",
				right: "-10px",
				width: "32px",
				height: "32px",
			}}
			title="تعديل الصورة (قريباً)"
			onClick={() => toast.info("سيتم إضافة هذه الميزة قريباً")}
		>
			<i
				className="bi bi-pencil-fill text-white"
				style={{ fontSize: "0.8rem" }}
			></i>
		</span>
	</div>
);

ProfileAvatar.propTypes = {
	photoURL: PropTypes.string,
	displayName: PropTypes.string,
};

export default ProfileAvatar;
