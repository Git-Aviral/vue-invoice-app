import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBd_ryEoM26_LUk5y4Ap7SS5letn3Z4Vg",
  authDomain: "vue-invoice-app-efe09.firebaseapp.com",
  projectId: "vue-invoice-app-efe09",
  storageBucket: "vue-invoice-app-efe09.appspot.com",
  messagingSenderId: "865774560989",
  appId: "1:865774560989:web:65f1c382398c21f2295d34"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
