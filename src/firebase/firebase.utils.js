import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCEjUpI7IYii5_nvH-YspvFTxzRnrboRwk",
  authDomain: "shop-cd0e7.firebaseapp.com",
  projectId: "shop-cd0e7",
  storageBucket: "shop-cd0e7.appspot.com",
  messagingSenderId: "624309321810",
  appId: "1:624309321810:web:a17a7c4bca4cf3ed6b9f8b",
  measurementId: "G-M0CHKDX955",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
