// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVoPytfLzfeuGlKbzqGdkk-0CuQ9LQzXo",
  authDomain: "cryptex-64ff7.firebaseapp.com",
  projectId: "cryptex-64ff7",
  storageBucket: "cryptex-64ff7.appspot.com",
  messagingSenderId: "265122656235",
  appId: "1:265122656235:web:f5c9152b23e44f33fa33ae",
  measurementId: "G-K3MR27YJYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
