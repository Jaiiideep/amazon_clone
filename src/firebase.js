import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyASj62zx_1Ryie7sOkeVaqkJGFeycdfzos",
  authDomain: "clone-e527c.firebaseapp.com",
  projectId: "clone-e527c",
  storageBucket: "clone-e527c.appspot.com",
  messagingSenderId: "416227561325",
  appId: "1:416227561325:web:a59888c63d68168df69464",
  measurementId: "G-48XR4HXNPN"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };