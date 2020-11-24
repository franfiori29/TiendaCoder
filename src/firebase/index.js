import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDN_eVbg59I7nYyCkAMNfQHyc05wJvvOP0",
    authDomain: "coder-app-5542e.firebaseapp.com",
    databaseURL: "https://coder-app-5542e.firebaseio.com",
    projectId: "coder-app-5542e",
    storageBucket: "coder-app-5542e.appspot.com",
    messagingSenderId: "909470092826",
    appId: "1:909470092826:web:3f3514acd62c037ac28ba3"
});
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}