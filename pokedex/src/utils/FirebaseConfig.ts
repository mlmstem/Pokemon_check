// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection, getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDfKz8u3Wi2GSvWoXWvEc595zYlPd4JPFs",
  authDomain: "pokemonweb-a1c82.firebaseapp.com",
  projectId: "pokemonweb-a1c82",
  storageBucket: "pokemonweb-a1c82.appspot.com",
  messagingSenderId: "287420971831",
  appId: "1:287420971831:web:02728889a4a58fa1a7b8b2",
  measurementId: "G-CYBM7PDNDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "user");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
