import firebase from "firebase/app";
import "firebase/firestore";

let db: firebase.firestore.Firestore;

try {
  const firebaseConfig = {
    apiKey: "AIzaSyCDZfL4gBogSrPIMgpTwAclQhTixMyNf8o",
    authDomain: "susiyaki-portfolio.firebaseapp.com",
    projectId: "susiyaki-portfolio",
    storageBucket: "susiyaki-portfolio.appspot.com",
    messagingSenderId: "52419541464",
    appId: "1:52419541464:web:5f4fab7f0f74106a98daad",
    measurementId: "G-Z3EXZ0CJMS",
  };
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
} catch (error) {
  console.log(error);
}

export { db };
