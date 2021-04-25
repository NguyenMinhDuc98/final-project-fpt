// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCO9iCxOUz22RWWA4VgTcCQTw2bm74bjKs",
    authDomain: "fixit-web-f65d0.firebaseapp.com",
    projectId: "fixit-web-f65d0",
    storageBucket: "fixit-web-f65d0.appspot.com",
    messagingSenderId: "480376671654",
    appId: "1:480376671654:web:ef97c599d0d62f8fd4d367",
    measurementId: "G-V9PY9B2X6X"
};
firebase.initializeApp(firebaseConfig);

export default firebase;