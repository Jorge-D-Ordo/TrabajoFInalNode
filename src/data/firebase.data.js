import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: "trabajofinalbackendnode.firebasestorage.app",
  messagingSenderId: "718457598724",
  appId: "1:718457598724:web:c29f1881ad292da8ac9651",
  measurementId: "G-58MNQ7R1R7"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export { db };
