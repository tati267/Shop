import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

firestore.collection("users");
