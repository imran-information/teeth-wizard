// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZWZrmXumFF7go9GEP6BSFgW6-pdJYgtM",
    authDomain: "teeth-wizard-a9c6f.firebaseapp.com",
    projectId: "teeth-wizard-a9c6f",
    storageBucket: "teeth-wizard-a9c6f.firebasestorage.app",
    messagingSenderId: "1009535425339",
    appId: "1:1009535425339:web:72608e72c833f23a9db51e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)