import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXYKiMAiVTRYPl1Z2kdTN6L6up46L268U",
  authDomain: "ogbeauty.firebaseapp.com",
  projectId: "ogbeauty",
  storageBucket: "ogbeauty.firebasestorage.app",
  messagingSenderId: "1068037876688",
  appId: "1:1068037876688:web:4fde344174c79c70f627d5",
  measurementId: "G-4KN0Q8FT6K"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
