import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function useFetchMovie(id, comingFrom) {
	const apikey = import.meta.env.VITE_API_KEY;

	const fetchMovieDetails = async () => {
		try {
			const movieApi = `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=ar`;
			const tvApi = `https://api.themoviedb.org/3/tv/${id}?api_key=${apikey}&language=ar`;
			const res = await axios.get(comingFrom === "moviesPage" ? movieApi : tvApi);
			return res.data;
		} catch (error) {
			throw new Error(
				"An Error occured while fetching the user's data: " + error.message
			);
		}
	};
	const { data, isLoading, error } = useQuery({
		queryKey: ["movie", id],
		queryFn: fetchMovieDetails,
		staleTime: 10000,
		enabled: !!id, // Ensures the query runs only if `id` is provided >> !! to ensure it is a boolean value
	});
	return { data, isLoading, error: error?.message };
}
export default useFetchMovie;
