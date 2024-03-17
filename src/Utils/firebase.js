// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGEcTG1nr_gz54XmXm0Md1CUYIHwsEW-w",
  authDomain: "netflixgpt-bbc20.firebaseapp.com",
  projectId: "netflixgpt-bbc20",
  storageBucket: "netflixgpt-bbc20.appspot.com",
  messagingSenderId: "362100963958",
  appId: "1:362100963958:web:4145cb237a25b9d2f67d57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();