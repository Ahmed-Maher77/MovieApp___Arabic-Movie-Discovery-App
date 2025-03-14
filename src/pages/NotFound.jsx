import { useNavigate } from "react-router-dom";

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<main className="text-center d-flex align-items-center" style={{ height: "calc(100vh - 65px)" }}>
			<div className="container py-5">
				<h1>Not Found Page</h1>

                {/* Go Back Button */}
				<button
					className="btn btn-dark px-4 py-2 rounded-5 mt-4 d-flex gap-3 fs-5 mx-auto align-items-center"
					onClick={() => navigate("/")}
				>
					Go Back
					<span className="fa-solid fa-arrow-left"></span>
				</button>
			</div>
		</main>
	);
};

export default NotFound;
