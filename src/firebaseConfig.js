// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestor";

const firebaseConfig = {
  apiKey: "AIzaSyAtmcWbP0cxJtx3vwto2Q2x0S-eWUl8qbM",
  authDomain: "ziropa-webapp.firebaseapp.com",
  projectId: "ziropa-webapp",
  storageBucket: "ziropa-webapp.appspot.com",
  messagingSenderId: "131892700939",
  appId: "1:131892700939:web:b5e61d42fda87b4495e40e",
  measurementId: "G-KHE3NBSC5T",
};

// init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "Produkter");

//get collection data

getDocs(colRef)
  .then((snapshot) => {
    console.log(snapshot.docs);
    let Produkter = [];
    snapshot.doc.forEach((doc) => {
      Produkter.push({ ...doc.data(), id: doc.id });
    });
    console.log(Produkter);
  })
  .catch((err) => {
    console.log(err.message);
  });
