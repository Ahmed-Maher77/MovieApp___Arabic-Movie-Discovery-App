import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useFetchTrendingMovies(page) {
    const apikey = import.meta.env.VITE_API_KEY;

    const fetchMovies = async () => {
        try {
            const res = await axios.get(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${apikey}&language=ar&page=${page}`
            );
            return res.data;
        } catch (error) {
            throw new Error(
                "An Error occured while fetching trending movies data: " + error.message
            );
        }
    };
    
    const { data, isLoading, error } = useQuery({
        queryKey: ["trending_movies", page],
        queryFn: fetchMovies,
        staleTime: 60000 * 10, // 10 minute stale time
        keepPreviousData: true, // Keeps old data while fetching new
    });
    
    if (!page || page < 1) {
        return;
    }

    return { data, isLoading, error: error?.message };
}
export default useFetchTrendingMovies;
