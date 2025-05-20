import React from "react";
import { useSelector } from "react-redux";

const PortfolioInvitation = () => {
	const page_direction = useSelector(
		(state) => state.window_properties.page_direction
	);
	const isRTL = page_direction === "rtl";

	return (
		<section className="portfolio-section mb-5">
			<h2 className="section-title main-color mb-4">
				دعوة لزيارة الموقع الشخصي
			</h2>
			<div className="card shadow-sm border-0 p-4">
				<div className="portfolio-content">
					<p className="greeting mb-3">👋 مرحباً!</p>
					<p className="mb-3">
						أنا أحمد ماهر الجوهري، <b>مهندس برمجيات و نظم تحكم</b>
						<br />
						ماهر و شغوف لبناء تجارب .ويب , جوال , سطح المكتب سريعة، امنة، قابلة
						للوصول وذات تأثير عصري.
					</p>
					<p className="mb-3">🚀 تعرف على المزيد عني من خلال موقعي الشخصي:</p>
					<ul className="features-list mb-4">
						<li>مهاراتي التقنية</li>
						<li>المشاريع التي قمت ببنائها</li>
						<li>الخبرة العملية والإنجازات</li>
						<li>الخلفية التعليمية</li>
						<li>الخدمات التي أقدمها</li>
						<li>كيفية التواصل معي</li>
						<li>والمزيد!</li>
					</ul>
					<a
						href="https://ahmedmaher-portfolio.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-main animated-arrow-hover-container"
					>
						زيارة الموقع الشخصي
						<i
							className={`fa-solid animated-arrow-hover ${
								isRTL ? "fa-arrow-left me-2" : "fa-arrow-right ms-2"
							}`}
						></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default PortfolioInvitation;
