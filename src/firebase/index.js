import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBFB2VD4X-fMRwWLARDPDo16Z4rFpQITaE",
    authDomain: "moonment-ec82f.firebaseapp.com",
    databaseURL: "https://moonment-ec82f.firebaseio.com",
    projectId: "moonment-ec82f",
    storageBucket: "moonment-ec82f.appspot.com",
    messagingSenderId: "439314752126",
    appId: "1:439314752126:web:f229822f74b27d42d02e2f",
    measurementId: "G-EBDD4Z27TN"
});

export function getFirebase() {
    return app;
};

export function getFirestore() {
    return firebase.firestore(app);
};

