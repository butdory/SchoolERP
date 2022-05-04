// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqFsssl9elE7Rss6AfCZIN3qGsVaDp9kQ",
  authDomain: "schoolerp-69be6.firebaseapp.com",
  projectId: "schoolerp-69be6",
  storageBucket: "schoolerp-69be6.appspot.com",
  messagingSenderId: "586451391337",
  appId: "1:586451391337:web:aa9df46021eb5dca28e3f8",
  measurementId: "G-799QSPGLF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);