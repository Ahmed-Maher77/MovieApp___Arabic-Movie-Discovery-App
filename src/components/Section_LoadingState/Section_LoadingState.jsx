import Loader from "../Loader/Loader";
import PropTypes from "prop-types";


const Section_LoadingState = ({ title }) => {
	return (
		<section className="py-5" style={{ minHeight: "230px" }}>
			<div className="container">
				<div className="row flex justify-content-center align-items-center">
					<Loader title={title} />
				</div>
			</div>
		</section>
	);
};

Section_LoadingState.propTypes = {
	title: PropTypes.string,
};

export default Section_LoadingState;
