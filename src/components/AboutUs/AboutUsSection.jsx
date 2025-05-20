import ProfileImage from "./ProfileImage";
import SectionTitle from "./SectionTitle";
import FeaturesList from "./FeaturesList";
import LearnMoreButton from "./LearnMoreButton";
import "./AboutUsSection.css";

const AboutUsSection = () => {
	const features = [
		"تطوير تطبيقات الويب",
		"تطوير تطبيقات الجوال",
		"تطوير تطبيقات سطح المكتب",
		"تصميم واجهات المستخدم",
	];

	return (
		<section className="about-us-section py-5">
			<div className="container">
				<ProfileImage />
				<div className="about-content-container row align-items-center">
					<div className="mb-4 mb-lg-0">
						<div className="about-content">
							<SectionTitle title="من نحن" />
							<p className="mb-4">
								نحن فريق متخصص في تطوير تطبيقات الويب والجوال، نسعى دائماً
								لتقديم أفضل الحلول التقنية التي تلبي احتياجات عملائنا. نتميز
								بالخبرة والاحترافية في مجال البرمجة وتطوير البرمجيات.
							</p>
							<p className="mb-4">نقدم خدماتنا في:</p>
							<FeaturesList features={features} />
							<LearnMoreButton />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUsSection;
