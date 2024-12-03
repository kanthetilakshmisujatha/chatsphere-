// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCubM-u59iKghFgjC_jnNCAcCT9Ly4Z_OA",
  authDomain: "react-chat-82d13.firebaseapp.com",
  projectId: "react-chat-82d13",
  storageBucket: "react-chat-82d13.appspot.com",
  messagingSenderId: "897028320084",
  appId: "1:897028320084:web:e90e2e1607d5ef3acef6c1"
};

// Initialize Firebase

 export const app = initializeApp(firebaseConfig);
 export const auth= getAuth();
export const storage = getStorage();
export const db= getFirestore();