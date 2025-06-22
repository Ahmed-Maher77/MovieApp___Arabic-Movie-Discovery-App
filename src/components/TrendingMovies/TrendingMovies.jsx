import useFetchTrendingMovies from "../../utils/api/useFetchTrendingMovies";
import Section_LoadingState from "../Section_LoadingState/Section_LoadingState";
import Section_ErrorState from "../Section_ErrorState/Section_ErrorState";
import Section_Heading from "../Home/Section_Heading/Section_Heading";
import Section_MoviesContainer from "../Home/Section_MoviesContainer/Section_MoviesContainer";
import { useRef, useState } from "react";
import "./TrendingMovies.css";

const TrendingMovies = () => {
	const { data, isLoading, error } = useFetchTrendingMovies(1);
	const swiperRef = useRef(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

    if (isLoading) {
        return <Section_LoadingState title={"جاري تحميل الأفلام الأكثر شهرة..."} />;
    }

	const handleSwiper = (swiper) => {
		swiperRef.current = swiper;
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	const handleSlideChange = (swiper) => {
		setIsBeginning(swiper.isBeginning);
		setIsEnd(swiper.isEnd);
	};

	if (error) {
		return (
			<Section_ErrorState
				msg={"حدث خطأ في تحميل الأفلام الأكثر شهرة"}
				error={error}
			/>
		);
	}

	return (
		<section className="trending-movies py-5">
			<div className="container">
				<Section_Heading
					title={"الأفلام الأكثر شهرة"}
					sliderControls={{
						prev: () => swiperRef.current?.slidePrev(),
						next: () => swiperRef.current?.slideNext(),
						isPrevDisabled: isBeginning,
						isNextDisabled: isEnd,
					}}
				/>
                
				<Section_MoviesContainer
					movies={data.results}
					swiperRef={swiperRef}
					onSwiper={handleSwiper}
					onSlideChange={handleSlideChange}
				/>
			</div>
		</section>
	);
};

export default TrendingMovies;
