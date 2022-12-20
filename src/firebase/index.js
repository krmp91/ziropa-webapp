import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

//Kasper

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
export const storage = getStorage(app);
export const db = getFirestore(app);
