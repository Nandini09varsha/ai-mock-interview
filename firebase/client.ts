import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNgq1MicVhzcuevC8L9kt3MQJcYbsgMMY",
  authDomain: "prepwise-c959d.firebaseapp.com",
  projectId: "prepwise-c959d",
  storageBucket: "prepwise-c959d.firebasestorage.app",
  messagingSenderId: "904318023712",
  appId: "1:904318023712:web:20d46943c700300a796445",
  measurementId: "G-1BB951VY55",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
