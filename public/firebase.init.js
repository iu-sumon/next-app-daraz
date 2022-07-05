
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_VeH-0dB55Om0bqoFOurbTlRCkSU3CEQ",
    authDomain: "daraz-app-35262.firebaseapp.com",
    projectId: "daraz-app-35262",
    storageBucket: "daraz-app-35262.appspot.com",
    messagingSenderId: "644612184497",
    appId: "1:644612184497:web:8f56b293b33ec397064590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;