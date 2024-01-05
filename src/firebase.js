import firebase from 'firebase/compat/app'
import "firebase/compat/firestore";
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {

    apiKey: "AIzaSyCrvt5SPLy9hIh55bTRQhsM69S4mxnRK6o",
  
    authDomain: "challenge-45c9f.firebaseapp.com",
  
    projectId: "challenge-45c9f",
  
    storageBucket: "challenge-45c9f.appspot.com",
  
    messagingSenderId: "488340529594",
  
    appId: "1:488340529594:web:bf15b1d0a4928ce24e3d83",
  
    measurementId: "G-H6RK1008Z1"
  
  };

  const firbaseapp = firebase.initializeApp(firebaseConfig)

  const firebaseApp = initializeApp(firebaseConfig);

  const db = firbaseapp.firestore();

  const auth = getAuth(firebaseApp)

  export { db, auth };
   
  
  