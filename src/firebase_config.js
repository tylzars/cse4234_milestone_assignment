// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC6TuWzA-8Dynlx6U6hMugLPUt4WNTwp-4",
  authDomain: "cse4234-milestone-assignment.firebaseapp.com",
  projectId: "cse4234-milestone-assignment",
  storageBucket: "cse4234-milestone-assignment.appspot.com",
  messagingSenderId: "273166003446",
  appId: "1:273166003446:web:4ba446ce1301c1b89d50d7",
  measurementId: "G-3TL9D446ML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);