// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARjpXY5dWIznP9uZ0VG4lJnd-GrjdZ_xs",
  authDomain: "gb1702-29730.firebaseapp.com",
  projectId: "gb1702-29730",
  storageBucket: "gb1702-29730.appspot.com",
  messagingSenderId: "689818884398",
  appId: "1:689818884398:web:4d37a125e2860d4ee742bf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) =>
  createUserWithEmailAndPassword(auth, email, pass);
export const login = (email, pass) =>
  signInWithEmailAndPassword(auth, email, pass);
export const logout = () => signOut(auth);
