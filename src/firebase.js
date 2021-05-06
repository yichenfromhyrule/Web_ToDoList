import firebase from "firebase";
import "firebase/database";

let config = {
    apiKey: "AIzaSyC7HyxDz90r1aMiPMhvCYfBzdPXWn_baMc",
    authDomain: "todolist-8a891.firebaseapp.com",
    projectId: "todolist-8a891",
    storageBucket: "todolist-8a891.appspot.com",
    messagingSenderId: "764352849545",
    appId: "1:764352849545:web:803db37d9233534a390858",
    measurementId: "G-2ZGB0XJQ37"
};

firebase.initializeApp(config);

export default firebase.database();