// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
 apiKey: process.env.REACT_APP_apiKey,
 authDomain: process.env.REACT_APP_authDomain,
 projectId: process.env.REACT_APP_projectId,
 storageBucket: process.env.REACT_APP_storageBucket,
 messagingSenderId: process.env.REACT_APP_messagingSenderId,
 appId: process.env.REACT_APP_appId,
}; */
const firebaseConfig = {
 apiKey: "AIzaSyAvTh7pP2Y1X8JE618JGZl8uZBS0l0H-KI",
 authDomain: "warehouse-fa3c4.firebaseapp.com",
 projectId: "warehouse-fa3c4",
 storageBucket: "warehouse-fa3c4.appspot.com",
 messagingSenderId: "1033190119526",
 appId: "1:1033190119526:web:1fb1fc2689ab2969d275a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;