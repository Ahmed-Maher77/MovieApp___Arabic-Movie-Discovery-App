import { useParams } from "react-router-dom";
import useFetchMovie from "../../utils/api/useFetchMovie";
import Loader from "../../components/Loader/Loader";
import "./MoviesDetails.css";
import formatList from "./formatList";
import GoBack_Btn from "./GoBack_Btn";
import MovieContent from "./MovieContent";

const MoviesDetails = () => {
	const { id } = useParams();
	const { data: movieData, isLoading, error } = useFetchMovie(id);

	console.log(movieData);

	// Loading State
	if (isLoading) {
		return (
			<div className="d-flex justify-content-center align-items-center" style={{minHeight: "calc(100vh - 73px)"}}>
				<Loader title="...Loading Movie Data" />
			</div>
		);
	}

	// Error Handling
	if (error || !movieData) {
		return (
			<div className="text-center my-5" style={{minHeight: "calc(100vh - 400px)"}}>
				<h2>Something went wrong</h2>
				<span className="red-color">
					{error || "Failed to fetch movie details."}
				</span>
			</div>
		);
	}

	// Destructure Movie Data
	const {
		poster_path,
		homepage,
		title,
		vote_average,
		vote_count,
		release_date,
		runtime,
		production_countries = [],
		genres = [],
		spoken_languages = [],
		overview,
	} = movieData;

	// Formatters
	const formattedGenres = formatList(genres, "name");
	const formattedLanguages = formatList(spoken_languages, "name");
	const countryName = production_countries?.[0]?.name || "غير متوفر";
	const rating = vote_average
		? `${(Math.round(vote_average * 10) / 10).toFixed(1)} / 10`
		: "N/A";

	const movieDetails = [
		{ label: "اسم الفيلم", value: title },
		{ label: "التقييم", value: rating },
		{ label: "عدد التقييمات", value: vote_count || "N/A" },
		{ label: "تاريخ الإنتاج", value: release_date || "غير متوفر" },
		{
			label: "مدة المشاهدة",
			value: runtime ? `${runtime} دقيقة` : "غير متوفر",
		},
		{ label: "البلد", value: countryName },
		{ label: "النوع", value: formattedGenres },
		{ label: "اللغات المتاحة", value: formattedLanguages },
	];

	return (
		<div className="Movies-Details" style={{ minHeight: "calc(100vh - 75px)" }}>
			<div className="container">
				<GoBack_Btn />

				<MovieContent poster_path={poster_path} homepage={homepage} title={title} movieDetails={movieDetails} overview={overview} />
			</div>
		</div>
	);
};

export default MoviesDetails;
