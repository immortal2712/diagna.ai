import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUnY-MF7jhOoEG8dWH2wemYkNWcL2dklI",
  authDomain: "openinappdashboard.firebaseapp.com",
  projectId: "openinappdashboard",
  storageBucket: "openinappdashboard.appspot.com",
  messagingSenderId: "966136944590",
  appId: "1:966136944590:web:fc419131d9092b122e7d9f",
  measurementId: "G-X77294XXCN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
