// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCag7gehpecrFOC2Exl-SlMiBTzmpw8m2c",
  authDomain: "reactlogineg.firebaseapp.com",
  projectId: "reactlogineg",
  storageBucket: "reactlogineg.appspot.com",
  messagingSenderId: "578313568126",
  appId: "1:578313568126:web:06b66c2170af49e58ebd2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider =  new GoogleAuthProvider()
export const db = getFirestore(app)