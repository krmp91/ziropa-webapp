// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtmcWbP0cxJtx3vwto2Q2x0S-eWUl8qbM",
  authDomain: "ziropa-webapp.firebaseapp.com",
  projectId: "ziropa-webapp",
  storageBucket: "ziropa-webapp.appspot.com",
  messagingSenderId: "131892700939",
  appId: "1:131892700939:web:b5e61d42fda87b4495e40e",
  measurementId: "G-KHE3NBSC5T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
