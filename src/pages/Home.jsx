import Slider from "../components/Slider/Slider";
import AboutUsSection from "../components/AboutUs/AboutUsSection";
import ContactForm from "../components/ContactForm/ContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrendingMovies from "../components/TrendingMovies/TrendingMovies";
import UpcomingMovies from "../components/UpcomingMovies/UpcomingMovies";

const Home = () => {
	return (
		<div className="Home overflow-hidden">
			<Slider />
			<TrendingMovies />
			<UpcomingMovies />
			<AboutUsSection />
			<ContactForm />
			<ToastContainer />
		</div>
	);
};

export default Home;
