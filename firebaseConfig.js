// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYAirrOC5ps7dBNTR0fwZExdijffiV8-0",
  authDomain: "fir-muvi-app.firebaseapp.com",
  projectId: "fir-muvi-app",
  storageBucket: "fir-muvi-app.appspot.com",
  messagingSenderId: "837034625442",
  appId: "1:837034625442:web:004684df974ebf907b4afb"
};

// Initialize Firebase
export const firebase_App = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebase_App)