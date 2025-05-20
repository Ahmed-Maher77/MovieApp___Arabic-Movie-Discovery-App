import { db } from "./firebase-config";
import {
	doc,
	getDoc,
	setDoc,
	updateDoc,
	arrayUnion,
	arrayRemove,
} from "firebase/firestore";

export const watchlistService = {
	// Get user's watchlist
	async getUserWatchlist(userId, name, email) {
		const userDoc = doc(db, "users", userId);
		const userSnap = await getDoc(userDoc);

		if (!userSnap.exists()) {
			// Create new user document with correct name/email
			await setDoc(userDoc, {
				watchlist: [],
				name: name || "",
				email: email || "",
			});
			return [];
		} else {
			// If name or email is missing, update them
			const data = userSnap.data();
			if ((!data.name && name) || (!data.email && email)) {
				await updateDoc(userDoc, {
					name: name || data.name || "",
					email: email || data.email || "",
				});
			}
			return data.watchlist || [];
		}
	},

	// Add movie to watchlist
	async addToWatchlist(userId, movie, name, email) {
		const userDoc = doc(db, "users", userId);
		const userSnap = await getDoc(userDoc);

		if (!userSnap.exists()) {
			// Create new user document with the movie and correct name/email
			await setDoc(userDoc, {
				watchlist: [movie],
				name: name || "",
				email: email || "",
			});
			return;
		}

		await updateDoc(userDoc, {
			watchlist: arrayUnion(movie),
		});
	},

	// Remove movie from watchlist
	async removeFromWatchlist(userId, movieId) {
		const userDoc = doc(db, "users", userId);
		const userSnap = await getDoc(userDoc);

		if (userSnap.exists()) {
			const watchlist = userSnap.data().watchlist || [];
			const movieToRemove = watchlist.find((movie) => movie.id === movieId);

			if (movieToRemove) {
				await updateDoc(userDoc, {
					watchlist: arrayRemove(movieToRemove),
				});
			}
		}
	},

	// Update movie watched status
	async updateMovieStatus(userId, movieId, isWatched) {
		const userDoc = doc(db, "users", userId);
		const userSnap = await getDoc(userDoc);

		if (userSnap.exists()) {
			const watchlist = userSnap.data().watchlist || [];
			const updatedWatchlist = watchlist.map((movie) =>
				movie.id === movieId ? { ...movie, isWatched } : movie
			);

			await updateDoc(userDoc, {
				watchlist: updatedWatchlist,
			});
		}
	},
};
