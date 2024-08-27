import { initializeApp } from "firebase/app";

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