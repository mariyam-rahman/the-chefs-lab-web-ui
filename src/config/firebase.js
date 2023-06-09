// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import.meta.env.VITE_FIREBASE_CONFIG

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";

const firebaseConfigString = import.meta.env.VITE_FIREBASE_CONFIG;
if (!firebaseConfigString) {
  throw new Error("VITE_FIREBASE_CONFIG env variable was not found");
}
// console.log({firebaseConfigString});
const firebaseConfig = JSON.parse(firebaseConfigString);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

// export default app;
