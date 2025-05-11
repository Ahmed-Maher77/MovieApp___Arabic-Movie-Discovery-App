import PropTypes from "prop-types";

const ToggleBar = ({
	showWatched,
	setShowWatched,
	watchedCount,
	notWatchedCount,
	styles,
}) => (
	<div className={styles["modern-toggle-bar"] + " my-4"} style={{marginBottom: "10px"}}>
		<div className={styles["toggle-pill"]}>
			<button
				className={
					styles["toggle-btn"] +
					" " +
					styles.right +
					(showWatched ? " " + styles.active : "")
				}
				onClick={() => setShowWatched(true)}
				type="button"
			>
				تمت مشاهدتها<span className={styles.count}>({watchedCount})</span>
			</button>
			<button
				className={
					styles["toggle-btn"] +
					" " +
					styles.left +
					(!showWatched ? " " + styles.active : "")
				}
				onClick={() => setShowWatched(false)}
				type="button"
			>
				غير مشاهَد <span className={styles.count}>({notWatchedCount})</span>
			</button>
			<div
				className={
					styles["toggle-slider"] +
					(showWatched ? " " + styles.right : " " + styles.left)
				}
			></div>
		</div>
	</div>
);

ToggleBar.propTypes = {
	showWatched: PropTypes.bool.isRequired,
	setShowWatched: PropTypes.func.isRequired,
	watchedCount: PropTypes.number.isRequired,
	notWatchedCount: PropTypes.number.isRequired,
	styles: PropTypes.object.isRequired,
};

export default ToggleBar;
