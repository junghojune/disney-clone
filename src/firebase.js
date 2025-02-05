// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrRNY7kubkD4f8RmzOwkWHZ9ECZ0XPsG8",
  authDomain: "react-disney-project-5c10a.firebaseapp.com",
  projectId: "react-disney-project-5c10a",
  storageBucket: "react-disney-project-5c10a.firebasestorage.app",
  messagingSenderId: "904129856649",
  appId: "1:904129856649:web:a6274c2490548f643b7258",
  measurementId: "G-2QY8W1C62L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; 