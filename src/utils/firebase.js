import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBj3XbFzDMLIH5hOCsjXG5QyEPoN4wtypI",
  authDomain: "kodigo-manager.firebaseapp.com",
  projectId: "kodigo-manager",
  storageBucket: "kodigo-manager.appspot.com",
  messagingSenderId: "626438990496",
  appId: "1:626438990496:web:3c1316758c6a208d60f7c5",
  measurementId: "G-ZQLMTPDYVM"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app

