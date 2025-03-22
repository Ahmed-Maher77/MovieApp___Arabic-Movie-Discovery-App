/* eslint-disable react/prop-types */
import "./Loader.css";
import { memo } from "react";

const Loader = memo(({ title = "Searching" }) => {
	return (
		<div id="wifi-loader" role="status" aria-live="polite">
			<svg className="circle-outer" viewBox="0 0 86 86" aria-hidden="true">
				<circle className="back" cx="43" cy="43" r="40"></circle>
				<circle className="front" cx="43" cy="43" r="40"></circle>
				<circle className="new" cx="43" cy="43" r="40"></circle>
			</svg>
			<svg className="circle-middle" viewBox="0 0 60 60" aria-hidden="true">
				<circle className="back" cx="30" cy="30" r="27"></circle>
				<circle className="front" cx="30" cy="30" r="27"></circle>
			</svg>
			<svg className="circle-inner" viewBox="0 0 34 34" aria-hidden="true">
				<circle className="back" cx="17" cy="17" r="14"></circle>
				<circle className="front" cx="17" cy="17" r="14"></circle>
			</svg>
			<div className="text" aria-label={title}>{title}</div>
		</div>
	);
});

// Add a display name to prevent ESLint warning
Loader.displayName = "Loader";

export default Loader;
