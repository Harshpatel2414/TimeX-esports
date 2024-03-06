import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC0rro60QomWCHXeTJBksrDeec0FpqN5NY",
    authDomain: "esports-ndbr.firebaseapp.com",
    projectId: "esports-ndbr",
    storageBucket: "esports-ndbr.appspot.com",
    messagingSenderId: "939781763874",
    appId: "1:939781763874:web:2516df22c9d26888626b7b"
};


export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const db = getFirestore()
