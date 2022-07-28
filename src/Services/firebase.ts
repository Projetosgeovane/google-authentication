// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDG_-yrFxo6NEvw2582PehnpZny32it-v4",
    authDomain: "authentication-3211a.firebaseapp.com",
    projectId: "authentication-3211a",
    storageBucket: "authentication-3211a.appspot.com",
    messagingSenderId: "359667992076",
    appId: "1:359667992076:web:afeb8afe738f5d753bd029"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);