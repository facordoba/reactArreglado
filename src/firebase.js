import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCCHYCSyrg_USDYlS7-aGtMQhYC4YP_8Ts",
  authDomain: "facundo-c13ee.firebaseapp.com",
  projectId: "facundo-c13ee",
  storageBucket: "facundo-c13ee.appspot.com",
  messagingSenderId: "148946646385",
  appId: "1:148946646385:web:6d4f37e99f044ec3fb72d0"
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)