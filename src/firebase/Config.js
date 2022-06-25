import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxZ5eP-kWzLVcDv4GWRACH2qQkH-zqFSU",
  authDomain: "react-native-contact-app-kay.firebaseapp.com",
  projectId: "react-native-contact-app-kay",
  storageBucket: "react-native-contact-app-kay.appspot.com",
  messagingSenderId: "439365244432",
  appId: "1:439365244432:web:7ee8b75ae648b5e6ee9c95",
  measurementId: "G-BQR0F1TKB8",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
