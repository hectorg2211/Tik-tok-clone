import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOC6eiXlgJ8wr6kvcsSwag7SSEq2siK_M",
  authDomain: "tik-tok-clone-30a84.firebaseapp.com",
  projectId: "tik-tok-clone-30a84",
  storageBucket: "tik-tok-clone-30a84.appspot.com",
  messagingSenderId: "429890022632",
  appId: "1:429890022632:web:a3a01ca4bd6c8d563e6d5d",
  measurementId: "G-GYBBN1PCHJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
