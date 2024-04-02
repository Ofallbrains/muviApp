// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
import {FIREBASE_API_KEY,FIREBASE_AUTH_DOMAIN,FIREBASE_PROJECT_ID,FIREBASE_STORAGE_BUCKET,FIREBASE_MESSAGE_SENDER,FIREBASE_APPID} from 'app/config'

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGE_SENDER,
  appId: FIREBASE_APPID
};

// Initialize Firebase
export const firebase_App = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebase_App)