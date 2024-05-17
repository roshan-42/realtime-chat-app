// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB3j_mTEcakSaA-th-zUUHkqxhr08t8RAA",
  authDomain: "newchat-60cde.firebaseapp.com",
  projectId: "newchat-60cde",
  storageBucket: "newchat-60cde.appspot.com",
  messagingSenderId: "575361263964",
  appId: "1:575361263964:web:81cf7ff075dec73b2eb999",
  measurementId: "G-BZTP2C68MM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
