
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-a370d.firebaseapp.com",
  projectId: "mern-real-estate-a370d",
  storageBucket: "mern-real-estate-a370d.appspot.com",
  messagingSenderId: "203777121383",
  appId: "1:203777121383:web:1348ba7d70799d4fe188c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);