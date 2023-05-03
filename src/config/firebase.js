// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD5U3xR0dLDno-LCcyk1DJOaIa0JCpDks",
  authDomain: "the-chefs-lab.firebaseapp.com",
  projectId: "the-chefs-lab",
  storageBucket: "the-chefs-lab.appspot.com",
  messagingSenderId: "505822118488",
  appId: "1:505822118488:web:126cf6586e1086fa2e002d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getAuth(app);

// export default app;
