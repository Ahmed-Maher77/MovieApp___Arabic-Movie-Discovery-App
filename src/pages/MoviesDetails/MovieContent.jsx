import { NavLink } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import MoviePoster from "./MoviePoster";
import PropTypes from "prop-types";

const MovieContent = ({
	poster_path,
	homepage,
	title,
	movieDetails,
	overview,
}) => {
	return (
		<main className="mb-3">
			<section className="pb-4 d-flex gap-2 gap-md-3 gap-lg-4 flex-column flex-md-row align-items-md-center">
				{/* ================= Movie Poster ================= */}
				<MoviePoster
					posterPath={poster_path}
					homepage={homepage}
					title={title}
				/>

				{/* ================= Movie Details ================= */}
				<div className="details-info w-100">
					{movieDetails.map((detail, index) => (
						<MovieDetail
							key={index}
							label={detail.label}
							value={detail.value}
						/>
					))}
				</div>
			</section>

			{/* ================= Movie Story ================= */}
			<section className="story p-3 gray-bg rounded-3">
				<h3 className="mb-4 py-2 main-color">قصة الفيلم:</h3>
				<p>{overview || "غير متوفر"}</p>
			</section>

			{/* ================= Buttons Section ================= */}
			<section className="btns d-flex justify-content-center align-items-center my-4 gap-4 flex-wrap">
				{/* Watch Movie Button */}
				<a
					href={homepage || "#"}
					target="_blank"
					rel="noopener noreferrer"
					className="btn btn-main d-flex gap-2 align-items-center"
					style={!homepage ? { pointerEvents: "none", opacity: 0.5 } : {}}
				>
					مشاهدة الفيلم
					<span className="fa-solid fa-video mt-1"></span>
				</a>
				
				{/* Back to Home Button */}
				<NavLink to="/" className="btn btn-main d-flex gap-2 align-items-center">
					عودة للصفحة الرئيسية
					<span className="fa-solid fa-house"></span>
				</NavLink>
			</section>
		</main>
	);
};

MovieContent.propTypes = {
	poster_path: PropTypes.string,
	homepage: PropTypes.string,
	title: PropTypes.string,
	movieDetails: PropTypes.array,
	overview: PropTypes.string,
};

export default MovieContent;
