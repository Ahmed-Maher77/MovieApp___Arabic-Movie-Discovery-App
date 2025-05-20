import "./Tooltip.css";
import PropTypes from "prop-types";
const Tooltip = ({ content, direction, minWidth, customClass }) => {
	return (
		<span
			className={`Tooltip ${direction} ${customClass}`}
			style={{ minWidth: minWidth }}
			role="tooltip"
			aria-label={content}
		>
			{content}
		</span>
	);
};

Tooltip.propTypes = {
	content: PropTypes.string.isRequired,
	direction: PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
	minWidth: PropTypes.string,
	customClass: PropTypes.string,
};

export default Tooltip;
