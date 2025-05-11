import {
	collection,
	getDocs,
	query,
	where,
	addDoc,
	deleteDoc,
	updateDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";

export const checkWatchlistStatus = async (movieId) => {
	try {
		const q = query(collection(db, "watchlist"), where("id", "==", movieId));
		const querySnapshot = await getDocs(q);
		return !querySnapshot.empty;
	} catch (err) {
		console.error("Error checking watchlist:", err);
		return false;
	}
};

export const addToWatchlist = async (movieData) => {
	try {
		const { id, title, poster_path } = movieData;
		await addDoc(collection(db, "watchlist"), {
			id,
			title,
			poster_path,
			isWatched: false,
		});
		return true;
	} catch (err) {
		console.error("Error adding to watchlist:", err);
		return false;
	}
};

export const removeFromWatchlist = async (movieId) => {
	try {
		const q = query(collection(db, "watchlist"), where("id", "==", movieId));
		const querySnapshot = await getDocs(q);
		let success = false;
		for (const docSnap of querySnapshot.docs) {
			await deleteDoc(docSnap.ref);
			success = true;
		}
		return success;
	} catch (err) {
		console.error("Error removing from watchlist:", err);
		return false;
	}
};

export const updateWatchedStatus = async (movieId, isWatched) => {
	try {
		const q = query(collection(db, "watchlist"), where("id", "==", movieId));
		const querySnapshot = await getDocs(q);
		for (const docSnap of querySnapshot.docs) {
			await updateDoc(docSnap.ref, { isWatched });
		}
		return true;
	} catch (err) {
		console.error("Error updating watched status:", err);
		return false;
	}
};
