const ErrorState = ({ error }) => {
	return (
		<div className="container text-center py-5">
			<div className="alert alert-danger" role="alert">
				<i className="fas fa-exclamation-circle mx-2"></i>
				حدث خطأ أثناء تحميل قائمة المشاهدة: {error}
			</div>
		</div>
	);
};

export default ErrorState;
