import "firebase/auth" ;
import firebase from "firebase"
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpg6yt46eO_PMEy1ffCt8gOpdZpVUI-so",
    authDomain: "games-database-f08e5.firebaseapp.com",
    projectId: "games-database-f08e5",
    storageBucket: "games-database-f08e5.appspot.com",
    messagingSenderId: "890874063800",
    appId: "1:890874063800:web:c7036b5c6b62275d4cbd4d"
  };
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage()

export { auth, storage, db }
