// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blogproject.firebaseapp.com",
    projectId: "mern-blogproject",
    storageBucket: "mern-blogproject.appspot.com",
    messagingSenderId: "717459786628",
    appId: "1:717459786628:web:231fc1695017074ada2bd1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
