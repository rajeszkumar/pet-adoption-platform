// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCL2xIdBYFIPdKSKBaW4inOA2hdduYBWrU",
    authDomain: "pet-adoption-6afff.firebaseapp.com",
    projectId: "pet-adoption-6afff",
    storageBucket: "pet-adoption-6afff.appspot.com",
    messagingSenderId: "117399348715",
    appId: "1:117399348715:web:f9f6010585d97be454e5ae",
    measurementId: "G-Y8YQ4FGZ4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
