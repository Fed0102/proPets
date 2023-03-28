import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBnaw19yGCif979jXN3llkWVbczSDDXX6k",
    authDomain: "propetslvafed.firebaseapp.com",
    projectId: "propetslvafed",
    storageBucket: "propetslvafed.appspot.com",
    messagingSenderId: "622314829392",
    appId: "1:622314829392:web:6e9dc509d7c8d432e2c355",
    measurementId: "G-G1VGQHNFBR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);