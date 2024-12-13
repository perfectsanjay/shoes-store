// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATKHzFC8sPITEhUgIhZxBQ16hRgBDIJEs",
  authDomain: "joota-dukaan.firebaseapp.com",
  projectId: "joota-dukaan",
  storageBucket: "joota-dukaan.firebasestorage.app",
  messagingSenderId: "8305332555",
  appId: "1:8305332555:web:7c41cf67db104e7f9ad8ce",
  measurementId: "G-RBGJV7FX4W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const saveUserData = async (user) => {
  try {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      displayName: user.displayName,
      email: user.email,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("erroe saving data to firestore", error);
  }
};

export const googleProvider = new GoogleAuthProvider();

export const SignInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error) {
    console.error("Error during Google Sign-In: ", error);
    throw error;
  }
};

export const signInWithEmailAndPasswordHandler = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    throw error;
  }
};

export const signUpWithEmailAndPasswordHandler = async (
  name,
  email,
  password
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: name });
    await saveUserData(userCredential.user);

    return userCredential;
  } catch (error) {
    throw error;
  }
};

export const signOutHandler = () => signOut(auth);
