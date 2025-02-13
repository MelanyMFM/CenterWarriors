// Importa las funciones que necesitas de los SDKs de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa Firestore

// Configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyCCxBwLOdQ9gvtIezLG7wob920tzYTNRow",
  authDomain: "centerwarriors-db.firebaseapp.com",
  projectId: "centerwarriors-db",
  storageBucket: "centerwarriors-db.firebasestorage.app",
  messagingSenderId: "656114582964",
  appId: "1:656114582964:web:6f44a83d05a14043ea5ee1"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una instancia de Firestore
const db = getFirestore(app);

// Exporta la instancia de Firestore para usarla en otros archivos
export { db };