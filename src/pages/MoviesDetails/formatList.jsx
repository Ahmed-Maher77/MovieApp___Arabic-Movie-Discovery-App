import propTypes from "prop-types";

const formatList = (list, key) => {
	if (!list?.length) {
		return "غير متوفر";
	}
	return list.map((item) => item[key]).join(" ⦁ ");
};

formatList.propTypes = {
	list: propTypes.arrayOf(propTypes.object).isRequired,
	key: propTypes.string.isRequired,
};

export default formatList;
