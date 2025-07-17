import PropTypes from "prop-types";
import StarRating from "../../../components/StarRating/StarRating";
import "./SimilarMovies_List.css";
import { useNavigate } from "react-router-dom";

const SimilarMovies_List = ({ data, comingFrom }) => {
    const navigate = useNavigate();
    const handleClick = (movieId) => {
        if (movieId) {
            navigate(`/movies/${movieId}`, { state: { from: comingFrom } });
        }
    }
    const getMovieName = (movie) => comingFrom === "moviesPage" ? movie.title : movie.name;

    return (
        <div className="SimilarMovies_List">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
                {data?.results?.map((movie) => (
                    <div key={movie.id} className="mb-4 similar-movie-card">
                        <div className="card rounded-3 cursor-pointer" onClick={() => handleClick(movie.id)}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="card-img-top"
                            />

                            <div className="card-body rounded-bottom-3">
                                <h5 className="card-title">{getMovieName(movie)}</h5>
                                <div className="card-text">
                                    <StarRating rating={movie.vote_average} showScore={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarMovies_List;

SimilarMovies_List.propTypes = {
    data: PropTypes.object.isRequired,
    comingFrom: PropTypes.string.isRequired,
};
