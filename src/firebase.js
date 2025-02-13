
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyA4P75lD9kcUWRi9NCbQlQJ3hotw1TLhN4",
  authDomain: "centerwarriors-cb9c5.firebaseapp.com",
  projectId: "centerwarriors-cb9c5",
  storageBucket: "centerwarriors-cb9c5.firebasestorage.app",
  messagingSenderId: "274962851358",
  appId: "1:274962851358:web:f9e930d0d03e0645fcf00f",
  measurementId: "G-SY8KMWJNXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };