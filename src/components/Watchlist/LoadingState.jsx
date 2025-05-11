const LoadingState = () => {
	return (
		<div className="container text-center py-5 page-height mt-5">
			<div className="spinner-border text-primary" role="status">
				<span className="visually-hidden">جاري التحميل...</span>
			</div>
			<p className="mt-3">جاري تحميل قائمة المشاهدة...</p>
		</div>
	);
};

export default LoadingState;
