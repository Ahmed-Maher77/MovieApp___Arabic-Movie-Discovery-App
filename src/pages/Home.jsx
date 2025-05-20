import Slider from "../components/Slider/Slider";
import AboutUsSection from "../components/AboutUs/AboutUsSection";
import ContactForm from "../components/ContactForm/ContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
	return (
		<div className="Home overflow-hidden">
			<Slider />
			<AboutUsSection />
			<ContactForm />
			<ToastContainer />
		</div>
	);
};

export default Home;
