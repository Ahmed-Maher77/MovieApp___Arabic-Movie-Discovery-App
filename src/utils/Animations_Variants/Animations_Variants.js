// ================= Home Page: =================
export const homePageVariants = {
	initial: { opacity: 0, x: -100, transition: { duration: 0.9 } },
	animate: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.9, when: "beforeChildren" },
	},
	exit: { opacity: 0, x: 100, transition: { duration: 0.9 } },
};

// ================= MoviesDetails Page: =================
export const moviesDetailsPageVariants = {
	initial: { scale: 0.8, opacity: 0 },
	animate: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
	exit: {
		scale: 0.8,
		opacity: 0,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
};

// ================= MoviesList Page: =================
export const moviesListPageVariants = {
	initial: { opacity: 0, y: 100, transition: { duration: 0.9 } },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.9, when: "beforeChildren" },
	},
	exit: { opacity: 0, y: -100, transition: { duration: 0.9 } },
};

// ================= MovieCard Component: =================
export const movieCardVariants = {
	hidden: {
		opacity: 0,
		y: 50,
		transition: { duration: 0.8 },
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8, ease: "easeOut", when: "beforeChildren" },
	},
};

// ================= Slider Component: =================
export const HomeSliderPosterVariants = {
	initial: { opacity: 0, y: 100, transition: { duration: 0.9 } },
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.9, when: "beforeChildren" },
	},
	exit: { opacity: 0, y: -100, transition: { duration: 0.9 } },
};
export const HomeSliderHeadingVariants = {
	initial: { opacity: 0, scale: 0.9, transition: { duration: 0.9 } },
	animate: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.9, when: "beforeChildren" },
	},
	exit: { opacity: 0, scale: 1.05 },
};
export const HomeSliderInfoVariants = {
	initial: { opacity: 0, x: -100, transition: { duration: 0.9 } },
	animate: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.9, when: "beforeChildren" },
	},
	exit: { opacity: 0, x: 100, transition: { duration: 0.9 } },
};
