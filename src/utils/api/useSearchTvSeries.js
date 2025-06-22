import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";

function useSearchTvSeries() {
	const apikey = import.meta.env.VITE_API_KEY;
	const tvSeriesName = useSelector(
		(state) => state.search_tvseries.searchByValue
	);

	const fetchTvSeries = async () => {
		if (!tvSeriesName) return null;

		try {
			const res = await axios.get(
				`https://api.themoviedb.org/3/search/tv?api_key=${apikey}&language=ar&query=${encodeURIComponent(
					tvSeriesName
				)}`
			);
			console.log(res.data);
			return res.data;
		} catch (error) {
			throw new Error(
				"An Error occurred while fetching tv series data: " + error.message
			);
		}
	};

	const { data, isLoading, error } = useQuery({
		queryKey: ["searched_tvseries", tvSeriesName],
		queryFn: fetchTvSeries,
		enabled: !!tvSeriesName, // Only run query when there's a search term
		staleTime: 60000 * 10, // 10 minute stale time
		keepPreviousData: true, // Keeps old data while fetching new
	});

	return { data, isLoading, error: error?.message };
}
export default useSearchTvSeries;
