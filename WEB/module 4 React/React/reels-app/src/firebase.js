// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import secret from "./secrets"
// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA8v5iDa6lQXq7cpo5M6AGWoPXdcycnvsE",
//   authDomain: "class-demo-56ea1.firebaseapp.com",
//   projectId: "class-demo-56ea1",
//   storageBucket: "class-demo-56ea1.appspot.com",
//   messagingSenderId: "282608977221",
//   appId: "1:282608977221:web:058b84eee046a7f76e2a2c"
// };

// Initialize Firebase

const app = initializeApp(secret);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"
// import {getFirestore} from "firebase/firestore"
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import secret from "./secrets"
// // Your web app's Firebase configuration


// // Initialize Firebase
// const app = initializeApp(secret);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);