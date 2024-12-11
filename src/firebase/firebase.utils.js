// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATKHzFC8sPITEhUgIhZxBQ16hRgBDIJEs",
  authDomain: "joota-dukaan.firebaseapp.com",
  projectId: "joota-dukaan",
  storageBucket: "joota-dukaan.firebasestorage.app",
  messagingSenderId: "8305332555",
  appId: "1:8305332555:web:7c41cf67db104e7f9ad8ce",
  measurementId: "G-RBGJV7FX4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



