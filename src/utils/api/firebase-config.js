import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGESENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);

// Only initialize analytics in the browser (not SSR or Node.js)
let analytics;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

("================================================================================");
// Firestore Database:
export const db = getFirestore(); // initialize Firestore
export const colRef = collection(db, "watchlist");

("================================================================================");
// Authentication:
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); // login by google account

export { analytics };
