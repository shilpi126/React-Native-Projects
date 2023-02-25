// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
//import firebase from "firebase"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8cN80K6H1iG0GOui7sRRHIiO2TAka2_U",
  authDomain: "rn-instagram-clone-87cc7.firebaseapp.com",
  projectId: "rn-instagram-clone-87cc7",
  storageBucket: "rn-instagram-clone-87cc7.appspot.com",
  messagingSenderId: "302207156464",
  appId: "1:302207156464:web:3a3273d77f0bbd7d67c235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// !firebase.apps.length? 
// firebase.initializeApp(firebaseConfig) : 
// firebase.app()

export default  auth;