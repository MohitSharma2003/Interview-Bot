import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAGNuFeZAzOOUl0eCLLPHIePnJ8HBG7gyY",
  authDomain: "interview-bot-7cb0f.firebaseapp.com",
  projectId: "interview-bot-7cb0f",
  storageBucket: "interview-bot-7cb0f.appspot.com",
  messagingSenderId: "256611108181",
  appId: "1:256611108181:web:fd7ec3d46fa98ec4b09bdc",
  measurementId: "G-539RXH7SXM",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
