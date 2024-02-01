import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: `${process.env.API_KEY}`,
    authDomain: `${process.env.API_KEY}`,
    databaseURL: `${process.env.API_KEY}`,
    projectId: `${process.env.API_KEY}`,
    storageBucket: `${process.env.API_KEY}`,
    messagingSenderId: `${process.env.API_KEY}`,
    appId: `${process.env.API_KEY}`,
    measurementId: `${process.env.API_KEY}`
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};