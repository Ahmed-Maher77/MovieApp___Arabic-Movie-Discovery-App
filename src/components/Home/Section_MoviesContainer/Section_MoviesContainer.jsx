import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Section_MovieCard from "../Section_MovieCard/Section_MovieCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Section_MoviesContainer.css";

const Section_MoviesContainer = ({
	movies,
	swiperRef,
	onSwiper,
	onSlideChange,
}) => {
	return (
		<Swiper
			ref={swiperRef}
			onSwiper={onSwiper}
			onSlideChange={onSlideChange}
			modules={[Navigation, Pagination]}
			spaceBetween={20}
			slidesPerView={1}
			breakpoints={{
				640: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 4,
				},
				1280: {
					slidesPerView: 5,
				},
				1400: {
					slidesPerView: 6,
				},
			}}
			className="section-movies-swiper"
		>
			{movies.map((movie) => (
				<SwiperSlide key={movie.id}>
					<Section_MovieCard
						imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
						title={movie.title}
						date={movie.release_date}
						vote_count={movie.vote_count}
						rate={movie.vote_average}
						id={movie.id}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

Section_MoviesContainer.propTypes = {
	movies: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			poster_path: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			release_date: PropTypes.string.isRequired,
			vote_count: PropTypes.number.isRequired,
			vote_average: PropTypes.number.isRequired,
		})
	).isRequired,
	swiperRef: PropTypes.object.isRequired,
	onSwiper: PropTypes.func.isRequired,
	onSlideChange: PropTypes.func.isRequired,
};

export default Section_MoviesContainer;
