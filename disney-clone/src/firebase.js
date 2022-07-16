import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDJNy1aDeIDw8YQPMZHV84tkTKh0A3yjo0",
    authDomain: "disneyplus-clone-e03d5.firebaseapp.com",
    projectId: "disneyplus-clone-e03d5",
    storageBucket: "disneyplus-clone-e03d5.appspot.com",
    messagingSenderId: "880608367728",
    appId: "1:880608367728:web:d70b38a7a180b3776450b5",
    measurementId: "G-R95ZNXG6X2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;
