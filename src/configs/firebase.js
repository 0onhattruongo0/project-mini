import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeimX2M_6kKDfwVWJhQlljScbujnBFwsM",
  authDomain: "project-mini-4de56.firebaseapp.com",
  projectId: "project-mini-4de56",
  storageBucket: "project-mini-4de56.appspot.com",
  messagingSenderId: "659159152625",
  appId: "1:659159152625:web:b0ddd874c03b21dc903650",
  measurementId: "G-1ZBQGJR71Z",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
const projectFireStoreCore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectAuth, projectFireStoreCore, timestamp };
