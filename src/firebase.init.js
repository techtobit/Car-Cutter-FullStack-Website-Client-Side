// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//  apiKey: process.env.REACT_APP_apiKey,
//  authDomain: process.env.REACT_APP_authDomain,
//  projectId: process.env.REACT_APP_projectId,
//  storageBucket: process.env.REACT_APP_storageBucket,
//  messagingSenderId: process.env.REACT_APP_messagingSenderId,
//  appId: process.env.REACT_APP_appId
// };

const firebaseConfig = {
    apiKey: "AIzaSyDyNvhBLhw_xo3MLUkCvDaqVzXfchEIhCk",
    authDomain: "warehouse-2e28c.firebaseapp.com",
    projectId: "warehouse-2e28c",
    storageBucket: "warehouse-2e28c.appspot.com",
    messagingSenderId: "740244815052",
    appId: "1:740244815052:web:098538124cfdf16f269669"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;