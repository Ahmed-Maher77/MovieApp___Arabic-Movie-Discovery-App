import { useNavigate } from "react-router-dom";
import { memo } from "react";
import { motion } from "framer-motion";
import SliderCaption from "./SliderCaption";
import SliderControlBtns from "./SliderControlBtns";
import SliderIndicators from "./SliderIndicators";
import { HomeSliderPosterVariants } from "../../utils/Animations_Variants/Animations_Variants";
import "./Slider.css";

const slides = [
	{
		id: 1353117,
		poster: "/ouqlzdiOjRErdsZ70WHJiBaPS0.jpg",
		title: "الميلاد الجديد: الوطن السعيد",
		overview:
			'تدور أحداث الفيلم حول "جيك" (ويليام موسلي)، وهو ضابط شرطة يجد نفسه في بُعدٍ بديل يُدعى "العائق" خلال حادث إطلاق نار مميت في مركز تسوق. بمساعدة راهب مبتدئ غامض (ألكسندر لي)، يجب على جيك أن يسابق الزمن لإنقاذ زوجته "برانغ" (أوراسايا سبيربوند) وإيقاف المشعوذ الشرير "ميك" (ميكيلي موروني) من فتح بوابات الجحيم.',
		rating: 10.0,
		view: 200,
	},
	{
		id: 777443,
		poster: "/eTxoNCpsw3O4X9FWbBkqrhzhsKW.jpg",
		title: "الحالة الإلكترونية",
		overview:
			"تنطلق مراهقة يتيمة في رحلة مع روبوت غامض للبحث عن شقيقها المفقود منذ زمن طويل، وتتعاون مع مُهرّب ومساعده سريع البديهة.",
		rating: 6.7,
		view: 548,
	},
	{
		id: 1210938,
		poster: "/70DKs5Y40mDDcS1HiTBk6q6aukJ.jpg",
		title: "تجلّيات",
		overview:
			"يتعاون قسّ يؤمن بالإلهام الإلهي ومحقق تطارده رؤى غامضة في قضية اختفاء شخص، ليكشفا أثناء التحقيق عن الشرور التي يضمرانها في نفسيهما.",
		rating: 7.2,
		view: 4,
	},
];

const Slider = () => {
	const navigate = useNavigate();

	return (
		<div
			id="slider"
			className="carousel slide carousel-fade"
			data-bs-ride="carousel"
			data-bs-touch="true"
			style={{ height: "calc(100vh - 73px)", width: "100%", minHeight: "630px", maxHeight: "900px", }}
		>
			<SliderIndicators slides={slides} />

			<main className="carousel-inner h-100">
				{slides.map((movie, index) => (
					<div className={`carousel-item h-100 ${index === 0 ? "active" : ""}`} key={index}>
						<figure className="container d-flex h-100 w-100 align-items-center justify-content-center position-relative py-3">
							<div className="row w-100 h-100 justify-content-center">
								{/* Clickable poster navigates to details page */}
								<motion.figure className="fig-poster" onClick={() => navigate(`/movies/${movie.id}`)} key="home-slider-poster"
									variants={HomeSliderPosterVariants}
									initial="initial"
									animate="animate"
									exit="exit"
									tabIndex={0}
									role="button"
									aria-label={`مشاهدة تفاصيل الفيلم: ${movie.title}`}
								>
									<img src={`https://image.tmdb.org/t/p/w500${movie.poster}`} className="col-12 poster-img" alt={`${movie.title} Poster`} style={{ height: "400px" }} />
									<span className="see-details-btn gap-2 fs-5">
											<span className="fa-solid fa-arrow-right mt-1 fs-6"></span>
											اقرأ التفاصيل
										</span>
									
								</motion.figure>

								{/* Movie description */}
								<SliderCaption movie={movie} />
							</div>
						</figure>
					</div>
				))}
			</main>

			{/* Navigation buttons */}
			<SliderControlBtns />
		</div>
	);
};

export default memo(Slider);
