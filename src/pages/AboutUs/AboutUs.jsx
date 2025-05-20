import { memo } from "react";
import "./AboutUs.css";
import Header from "../../components/AboutUs/Header";
import WhoIAm from "../../components/AboutUs/WhoIAm";
import ContactInfo from "../../components/AboutUs/ContactInfo";
import PortfolioInvitation from "../../components/AboutUs/PortfolioInvitation";
import ContactTrigger from "../../components/AboutUs/ContactTrigger";

const AboutUs = () => {
	return (
		<div className="AboutUs-Page page-height py-5">
			<div className="container">
				<Header />
				<WhoIAm />
				<ContactInfo />
				<PortfolioInvitation />
				<ContactTrigger />
			</div>
		</div>
	);
};

export default memo(AboutUs);
