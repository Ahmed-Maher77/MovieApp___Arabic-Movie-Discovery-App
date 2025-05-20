import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAI3oK6X8KN_3lJwfAhqO0pmpPIUO0TKAQ",
	authDomain: "multilingual-movie-app.firebaseapp.com",
	projectId: "multilingual-movie-app",
	storageBucket: "multilingual-movie-app.firebasestorage.app",
	messagingSenderId: "25016126325",
	appId: "1:25016126325:web:edfb2b33638b5f667f213c",
	measurementId: "G-DDBV1FFTPQ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

("================================================================================");
// Firestore Database:
export const db = getFirestore(); // initialize Firestore
export const colRef = collection(db, "watchlist");

("================================================================================");
// Authentication:
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); // login by google account
