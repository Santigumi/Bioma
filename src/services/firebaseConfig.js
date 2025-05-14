// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMUL1Kmauj-fsnX7DRvsR3n8GySzefkhg",
  authDomain: "bioma-5ccd5.firebaseapp.com",
  projectId: "bioma-5ccd5",
  storageBucket: "bioma-5ccd5.firebasestorage.app",
  messagingSenderId: "190666568247",
  appId: "1:190666568247:web:f7ba83c401677f6176c5b2",
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(appFirebase);
export const auth = getAuth(appFirebase);
