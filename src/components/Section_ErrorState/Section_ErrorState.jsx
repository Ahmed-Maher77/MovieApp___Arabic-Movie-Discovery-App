import PropTypes from "prop-types";

const Section_ErrorState = ({ msg, error }) => {
	return (
		<section className="py-5">
			<div className="container">
				<div className="row flex text-center">
					<p className="text-danger flex flex-column align-items-center gap-2">
						<span>
							<i className="fas fa-exclamation-circle mx-2"></i>
							{msg} :
						</span>
						<span>{error}</span>
					</p>
				</div>
			</div>
		</section>
	);
};

Section_ErrorState.propTypes = {
	msg: PropTypes.string,
	error: PropTypes.string,
};

export default Section_ErrorState;
