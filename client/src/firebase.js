// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "last-option-blog.firebaseapp.com",
  projectId: "last-option-blog",
  storageBucket: "last-option-blog.appspot.com",
  messagingSenderId: "649228270741",
  appId: "1:649228270741:web:eedec350c473f6e641ef9c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);