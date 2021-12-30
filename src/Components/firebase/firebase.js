// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1RgBoKIhLQ-XOWwWJpkBHIKz72jNjAF4",
  authDomain: "meal-recipe-aecea.firebaseapp.com",
  projectId: "meal-recipe-aecea",
  storageBucket: "meal-recipe-aecea.appspot.com",
  messagingSenderId: "245500653702",
  appId: "1:245500653702:web:8ebaf4016634b74be36107",
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();
export { auth };
