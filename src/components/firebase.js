// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC95iwtJtIGxrEjKeLtM0_vqc0mMzePt0g",
  authDomain: "pet-e-comm.firebaseapp.com",
  projectId: "pet-e-comm",
  storageBucket: "pet-e-comm.appspot.com",
  messagingSenderId: "611720917954",
  appId: "1:611720917954:web:71fedc815d5ce499e31c5b",
  measurementId: "G-L1LSEZHNFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);