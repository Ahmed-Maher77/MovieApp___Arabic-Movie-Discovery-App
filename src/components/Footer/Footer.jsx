import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				{/* ==================== Brand Section ==================== */}
				<div className="footer-brand">
					<h2>🎬 موقع الأفلام</h2>
					<p>أفضل مكان لمشاهدة ومتابعة أحدث الأفلام!</p>
				</div>

				{/* ==================== Navigation Links ==================== */}
				<ul className="footer-links">
					<li>
                        <NavLink to="/">الرئيسية</NavLink>
					</li>
					<li>
                        <NavLink to="/movies">الأفلام</NavLink>
					</li>
					<li>
						<a href="https://ahmedmaher-portfolio.vercel.app/" target="_blank" title="Go To Ahmed Maher's Portfolio">من نحن</a>
					</li>
					<li>
                        <a href="https://ahmedmaher-portfolio.vercel.app/" target="_blank" title="Contact Ahmed Maher">اتصل بنا</a>
					</li>
				</ul>

				{/* ==================== Social Media Links ==================== */}
				<div className="footer-social">
                    <a href="https://www.linkedin.com/in/ahmed-maher-algohary" target="_blank" rel="noopener noreferrer" title="Go To LinkedIn">
						<i className="fa-brands fa-linkedin"></i>
					</a>
					<a href="https://ahmedmaher-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" title="Go To Ahmed Maher's Portfolio">
						<i className="fa-solid fa-briefcase"></i>
					</a>
					<a href="https://web.facebook.com/profile.php?id=100012154268952" target="_blank" rel="noopener noreferrer" title="Go To Facebook">
						<i className="fa-brands fa-facebook"></i>
					</a>
					<a href="https://github.com/Ahmed-Maher77" target="_blank" rel="noopener noreferrer" title="Go To GitHub">
						<i className="fa-brands fa-github"></i>
					</a>
				</div>
			</div>

			{/* ==================== Copyright ==================== */}
			<div className="footer-bottom">
				<p>
					جميع الحقوق محفوظة &copy; {new Date().getFullYear()} &nbsp;| &nbsp;
                    <a href="https://ahmedmaher-portfolio.vercel.app/" className="main-color fw-bold fs-6 text-decoration-none" target="_blank" title="Go To Ahmed Maher's Portfolio">أحمد ماهر</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
