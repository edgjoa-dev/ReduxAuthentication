import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCShZfqecA7qS1tAlwSMoz5QxrozIHqYEM",
    authDomain: "auth-app-6352a.firebaseapp.com",
    projectId: "auth-app-6352a",
    storageBucket: "auth-app-6352a.appspot.com",
    messagingSenderId: "430457322505",
    appId: "1:430457322505:web:4b49da4adcb0e595b14cd8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);