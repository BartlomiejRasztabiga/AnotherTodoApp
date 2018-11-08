import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const authUiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/signedIn",
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false
  }
};

const config = {
  apiKey: "AIzaSyDpQ0jtig2spLvlL7bajjyKN_w2KgTNmMk",
  authDomain: "smartfactortask.firebaseapp.com",
  databaseURL: "https://smartfactortask.firebaseio.com",
  storageBucket: "smartfactortask.appspot.com",
  projectId: "smartfactortask",
  messagingSenderId: "35151660370"
};
firebase.initializeApp(config);

const settings = { timestampsInSnapshots: true };
const firestore = firebase.firestore();
firestore.settings(settings);
const storage = firebase.storage();
const auth = firebase.auth();

export { firestore, firebase, storage, auth, authUiConfig };
