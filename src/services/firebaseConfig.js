import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMUL1Kmauj-fsnX7DRvsR3n8GySzefkhg",
  authDomain: "bioma-5ccd5.firebaseapp.com",
  projectId: "bioma-5ccd5",
  storageBucket: "bioma-5ccd5.appspot.com",
  messagingSenderId: "190666568247",
  appId: "1:190666568247:web:f7ba83c401677f6176c5b2",
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appFirebase);
export const db = getFirestore(appFirebase);
export const storage = getStorage(appFirebase);
