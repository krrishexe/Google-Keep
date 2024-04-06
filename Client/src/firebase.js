import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/functions';


const firebaseConfig = {
    apiKey: "AIzaSyBfENYQTEVRsEaLfB1T95ciUoRhYbR2mbM",
    authDomain: "ecowiser-1ad80.firebaseapp.com",
    projectId: "ecowiser-1ad80",
    storageBucket: "ecowiser-1ad80.appspot.com",
    messagingSenderId: "93804731903",
    appId: "1:93804731903:web:941e782caca62372af5bca",
    measurementId: "G-TG1BK4NEJJ"
  };
  
  
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const functions = firebase.functions();

export default firebase;
