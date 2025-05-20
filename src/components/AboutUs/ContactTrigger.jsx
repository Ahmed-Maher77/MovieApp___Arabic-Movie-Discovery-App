import React from "react";
import { useSelector } from "react-redux";

const ContactTrigger = () => {
	const page_direction = useSelector(
		(state) => state.window_properties.page_direction
	);
	const isRTL = page_direction === "rtl";

	return (
		<section className="contact-trigger-section">
			<h2 className="section-title main-color mb-4">تواصل معي</h2>
			<div className="card shadow-sm border-0 p-4">
				<div className="contact-trigger-content">
					<p className="mb-3">💼 هل تبحث عن مطور لتحويل أفكارك إلى واقع؟</p>
					<p className="mb-3">
						أساعد الشركات الكبيرة منها و الناشئة والأفراد في تحويل مفاهيمهم إلى
						تطبيقات ويب نظيفة وعصرية وقابلة للتطوير.
					</p>
					<p className="mb-4">
						سواء كنت تبني من الصفر أو تحسن منتجاً موجوداً — أنا هنا للمساعدة!
					</p>
					<div className="contact-cta">
						<p className="mb-3">✉️ لا تتردد في التواصل — في أي وقت.</p>
						<p className="mb-4">دعنا نبتكر شيئاً رائعاً معاً!</p>
						<div className="contact-info">
							<a
								href="mailto:ahmedmaher.dev1@gmail.com"
								className="btn btn-outline-main"
							>
								<i className="fa-solid fa-envelope mx-2"></i>
								ahmedmaher.dev1@gmail.com
							</a>
							<a
								href="https://ahmedmaher-portfolio.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-outline-main"
							>
								<i
									className={`fa-solid fa-globe ${isRTL ? " ms-2" : "me-2"}`}
								></i>
								الموقع الشخصي
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactTrigger;
