import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import SliderCaption from "./SliderCaption";
import { HomeSliderPosterVariants } from "../../utils/Animations_Variants/Animations_Variants";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import { slides as slidesData } from "./slidesData";


const Slider = () => {
	const navigate = useNavigate();

	return (
		<div
			className="hero-slider"
			style={{
				height: "calc(100vh - 73px)",
				minHeight: "630px",
				maxHeight: "900px",
			}}
		>
			<Swiper
				modules={[EffectFade, Autoplay, Navigation, Pagination]}
				effect="fade"
				spaceBetween={0}
				slidesPerView={1}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				pagination={{
					clickable: true,
					el: ".swiper-pagination",
				}}
				className="hero-swiper"
			>
				{slidesData.map((movie, index) => (
					<SwiperSlide key={index}>
						<div className="slide-content">
							<div className="container h-100">
								<div className="row h-100 align-items-center">
									<div className="col-lg-6">
										<motion.figure
											className="poster-wrapper"
											onClick={() => navigate(`/movies/${movie.id}`)}
											variants={HomeSliderPosterVariants}
											initial="initial"
											animate="animate"
											exit="exit"
											tabIndex={0}
											role="button"
											aria-label={`مشاهدة تفاصيل الفيلم: ${movie.title}`}
										>
											<img
												src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
												alt={`${movie.title} Poster`}
												className="movie-poster"
											/>
											<div className="poster-overlay">
												<span className="see-details-btn">
													<span className="fa-solid fa-arrow-right"></span>
													اقرأ التفاصيل
												</span>
											</div>
										</motion.figure>
									</div>
									<div className="col-lg-6">
										<SliderCaption movie={movie} />
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}

				{/* Navigation */}
				<div className="swiper-button-prev"></div>
				<div className="swiper-button-next"></div>

				{/* Pagination */}
				<div className="swiper-pagination"></div>
			</Swiper>
		</div>
	);
};

export default memo(Slider);
