import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useFetchAllMovies(page) {
	const apikey = import.meta.env.VITE_API_KEY;

	const fetchMovies = async () => {
		try {
			const res = await axios.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=ar&page=${page}`
			);
			return res.data;
		} catch (error) {
			throw new Error(
				"An Error occured while fetching movies data: " + error.message
			);
		}
	};
	
	const { data, isLoading, error } = useQuery({
		queryKey: ["movies", page],
		queryFn: fetchMovies,
		staleTime: 60000 * 10, // 10 minute stale time
		keepPreviousData: true, // Keeps old data while fetching new
	});
	
	if (!page || page < 1) {
		console.error("Invalid page number:", page);
		return;
	}

	return { data, isLoading, error: error?.message };
}
export default useFetchAllMovies;
