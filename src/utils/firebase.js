import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: /* USE_YOUR_FIREBASE_CONFIG */,
  authDomain: /* USE_YOUR_FIREBASE_CONFIG */,
  projectId:/* USE_YOUR_FIREBASE_CONFIG */,
  storageBucket:/* USE_YOUR_FIREBASE_CONFIG */,
  messagingSenderId: /* USE_YOUR_FIREBASE_CONFIG */,
  appId: /* USE_YOUR_FIREBASE_CONFIG */,
  measurementId: /* USE_YOUR_FIREBASE_CONFIG */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app

