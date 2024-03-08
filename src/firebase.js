import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC0rro60QomWCHXeTJBksrDeec0FpqN5NY",
    authDomain: "esports-ndbr.firebaseapp.com",
    projectId: "esports-ndbr",
    storageBucket: "esports-ndbr.appspot.com",
    messagingSenderId: "939781763874",
    appId: "1:939781763874:web:2516df22c9d26888626b7b"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase auth
export const auth = getAuth()
