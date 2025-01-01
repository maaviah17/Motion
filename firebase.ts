import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyBPEgJGeyp-tfSGt6jz9Js_JNxWY7lwwLA",
    authDomain: "motion-next.firebaseapp.com",
    projectId: "motion-next",
    storageBucket: "motion-next.firebasestorage.app",
    messagingSenderId: "222308396105",
    appId: "1:222308396105:web:2b158bc1df320ab00fe398",
    measurementId: "G-1B1KFKVXCF"
};
  
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db =getFirestore(app);

export { db };