import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactForm.css";

const ContactForm = () => {
	const form = useRef();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const websiteUrl = "https://movie-discovery-app-gamma.vercel.app/";
	const websiteName = "MovieApp - Movie Discovery App (Arabic)";

	const sendEmails = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Send email to owner (you)
			await emailjs.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
				{
					user_email: form.current.user_email.value,
					user_name: form.current.user_name.value,
					website_url: form.current.website_url.value,
					message: form.current.message.value,
					subject: form.current.subject.value,
					website_name: form.current.website_name.value,
				}
			);

			// Send confirmation email to user
			await emailjs.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
				{
					user_name: form.current.user_name.value,
					website_url: form.current.website_url.value,
					website_name: form.current.website_name.value,
				}
			);

			toast.success("تم إرسال الرسالة بنجاح!", {
				position: "top-center",
				rtl: true,
			});
			form.current.reset();
		} catch (error) {
			console.error("Error sending emails:", error);
			toast.error("حدث خطأ أثناء إرسال الرسالة", {
				position: "top-center",
				rtl: true,
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="contact-section">
			<div className="container">
				<div className="contact-content">
					<h2 className="section-title text-center mb-5">تواصل معنا</h2>
					<form ref={form} onSubmit={sendEmails} className="contact-form">
						<div className="form-group">
							<input
								type="text"
								name="user_name"
								placeholder="الاسم"
								required
							/>
						</div>
						<div className="form-group">
							<input
								type="email"
								name="user_email"
								placeholder="البريد الإلكتروني"
								required
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								name="subject"
								placeholder="الموضوع"
								required
							/>
						</div>
						<div className="form-group">
							<textarea
								name="message"
								placeholder="الرسالة"
								required
							></textarea>
						</div>
						<input type="hidden" name="website_url" value={websiteUrl} />
						<input type="hidden" name="website_name" value={websiteName} />
						<button
							type="submit"
							className="submit-btn"
							disabled={isSubmitting}
						>
							{isSubmitting ? "جاري الإرسال..." : "إرسال"}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
