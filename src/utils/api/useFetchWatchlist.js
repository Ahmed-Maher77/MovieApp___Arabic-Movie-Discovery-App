import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase-config";

const useFetchWatchlist = () => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchWatchlist = async () => {
			try {
				const querySnapshot = await getDocs(collection(db, "watchlist"));
				const watchlistData = querySnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setData(watchlistData);
				setError(null);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchWatchlist();
	}, []);

	const isInWatchlist = async (movieId) => {
		try {
			const docRef = doc(db, "watchlist", movieId);
			const docSnap = await getDoc(docRef);
			return docSnap.exists();
		} catch (err) {
			console.error("Error checking watchlist:", err);
			return false;
		}
	};

	return { data, isLoading, error, isInWatchlist };
};

export default useFetchWatchlist;
