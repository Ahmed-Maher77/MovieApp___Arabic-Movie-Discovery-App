import PropTypes from "prop-types";

const FeaturesList = ({ features }) => {
	return (
		<ul className="features-list mb-4">
			{features.map((feature, index) => (
				<li key={index}>{feature}</li>
			))}
		</ul>
	);
};

FeaturesList.propTypes = {
	features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeaturesList;
