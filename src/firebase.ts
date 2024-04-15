import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4Yb5q4QhomDfqvwl6Y-etzSM5XFp-ahY",
  authDomain: "discord-clone-udemy-4754b.firebaseapp.com",
  projectId: "discord-clone-udemy-4754b",
  storageBucket: "discord-clone-udemy-4754b.appspot.com",
  messagingSenderId: "1069848045040",
  appId: "1:1069848045040:web:426ab41c4073abaf476935"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth,provider,db};