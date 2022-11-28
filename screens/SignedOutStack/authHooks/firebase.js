// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxv9ofVJvZNbfUN1vRwAIlenAEtYTyqC8",
  authDomain: "naictv1.firebaseapp.com",
  projectId: "naictv1",
  storageBucket: "naictv1.appspot.com",
  messagingSenderId: "115887056207",
  appId: "1:115887056207:web:d191e2988e53677e59d13a",
  measurementId: "G-WMEL4G8H34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const db = getFirestore(app)

export { auth, db }