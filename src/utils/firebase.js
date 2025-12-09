// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa1E7QL0iHWe7qNkm2cpX-aniYeq4SKyE",
  authDomain: "netflixgpt-98be4.firebaseapp.com",
  projectId: "netflixgpt-98be4",
  storageBucket: "netflixgpt-98be4.firebasestorage.app",
  messagingSenderId: "962261559376",
  appId: "1:962261559376:web:b432f5c1c2ed2b7ca9c955",
  measurementId: "G-6H9PM1QRG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()