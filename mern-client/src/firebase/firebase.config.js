// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9XOoejwgPYP-fcjbOeZwqhzDaltxVTe4",
  authDomain: "mern-book-inventory-2e6cb.firebaseapp.com",
  projectId: "mern-book-inventory-2e6cb",
  storageBucket: "mern-book-inventory-2e6cb.appspot.com",
  messagingSenderId: "573028854616",
  appId: "1:573028854616:web:ef491158b5064e2d2f132d",
  //measurementId: "G-WTDR5SD8Y1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;