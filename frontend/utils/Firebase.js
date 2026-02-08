// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-dd51e.firebaseapp.com",
  projectId: "loginonecart-dd51e",
  storageBucket: "loginonecart-dd51e.firebasestorage.app",
  messagingSenderId: "263518355062",
  appId: "1:263518355062:web:f84b025c090ad4b8532957"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth , provider}