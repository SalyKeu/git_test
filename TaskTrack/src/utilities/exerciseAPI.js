// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu7KEB_r8ZONt2BYINixUn14fQJH5JrKY",
  authDomain: "tasktrack-b65e4.firebaseapp.com",
  projectId: "tasktrack-b65e4",
  storageBucket: "tasktrack-b65e4.firebasestorage.app",
  messagingSenderId: "892889239174",
  appId: "1:892889239174:web:808c698f80d46da51bcb07",
  measurementId: "G-31XF8EQLQB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
