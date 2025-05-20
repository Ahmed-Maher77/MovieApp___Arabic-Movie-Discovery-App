import React from "react";

const ContactInfo = () => {
	return (
		<section className="contact-section mb-5">
			<h2 className="section-title main-color mb-4">معلومات التواصل</h2>
			<div className="card shadow-sm border-0 p-4">
				<div className="contact-links">
					<a
						href="https://ahmedmaher-portfolio.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-item"
					>
						<i className="fa-solid fa-globe"></i>
						<div className="contact-info-text">
							<span className="label">الموقع الشخصي</span>
							<span className="url">ahmedmaher-portfolio.vercel.app</span>
						</div>
					</a>
					<a href="mailto:ahmedmaher.dev1@gmail.com" className="contact-item">
						<i className="fa-solid fa-envelope"></i>
						<div className="contact-info-text">
							<span className="label">البريد الإلكتروني</span>
							<span className="url">ahmedmaher.dev1@gmail.com</span>
						</div>
					</a>
					<a
						href="https://www.linkedin.com/in/ahmed-maher-algohary"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-item"
					>
						<i className="fa-brands fa-linkedin"></i>
						<div className="contact-info-text">
							<span className="label">LinkedIn</span>
							<span className="url">linkedin.com/in/ahmed-maher-algohary</span>
						</div>
					</a>
					<a
						href="https://github.com/Ahmed-Maher77"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-item"
					>
						<i className="fa-brands fa-github"></i>
						<div className="contact-info-text">
							<span className="label">GitHub</span>
							<span className="url">github.com/Ahmed-Maher77</span>
						</div>
					</a>
					<a
						href="https://wa.me/+201150383416"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-item"
					>
						<i className="fa-brands fa-whatsapp"></i>
						<div className="contact-info-text">
							<span className="label">WhatsApp</span>
							<span className="url">+20 115 038 3416</span>
						</div>
					</a>
					<a
						href="https://web.facebook.com/profile.php?id=100012154268952"
						target="_blank"
						rel="noopener noreferrer"
						className="contact-item"
					>
						<i className="fa-brands fa-facebook"></i>
						<div className="contact-info-text">
							<span className="label">Facebook</span>
							<span className="url">
								facebook.com/profile.php?id=100012154268952
							</span>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
};

export default ContactInfo;
