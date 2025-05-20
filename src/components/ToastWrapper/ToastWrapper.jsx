import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

const ToastWrapper = () => {
	const pageDirection = useSelector(
		(state) => state.window_properties.page_direction
	);
	return (
		<ToastContainer
			position="top-center"
			autoClose={2000}
			rtl={pageDirection === "rtl"}
			style={{ direction: pageDirection }}
		/>
	);
};

export default ToastWrapper;
