import { db } from "../firebase";
import { collection, addDoc, getDocs, doc, setDoc, query, where } from "firebase/firestore";


// Agregar un entrenador
export const addEntrenador = async (entrenador) => {
  try {
    const docRef = await addDoc(collection(db, "entrenadores"), entrenador);
    return docRef.id;
  } catch (error) {
    console.error("Error agregando entrenador:", error);
  }
};

// Obtener entrenadores
export const getEntrenadores = async () => {
  const querySnapshot = await getDocs(collection(db, "entrenadores"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Agregar rutina
export const addRutina = async (rutina) => {
  try {
    const docRef = await addDoc(collection(db, "rutinas"), rutina);
    return docRef.id;
  } catch (error) {
    console.error("Error agregando rutina:", error);
  }
};

// Agregar ejercicio
export const addEjercicio = async (ejercicio) => {
  try {
    const docRef = await addDoc(collection(db, "ejercicios"), ejercicio);
    return docRef.id;
  } catch (error) {
    console.error("Error agregando ejercicio:", error);
  }
};

// Agregar retroalimentación
export const addRetroalimentacion = async (retro) => {
  try {
    const docRef = await addDoc(collection(db, "retroalimentaciones"), retro);
    return docRef.id;
  } catch (error) {
    console.error("Error agregando retroalimentación:", error);
  }
};

export const getEntrenadorRutinas = async (entrenadorId) => {
    try {
      const q = query(collection(db, "rutinas"), where("entrenadorId", "==", entrenadorId));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error obteniendo rutinas:", error);
    }
  };
  
  // Eliminar rutina
  export const deleteRutina = async (rutinaId) => {
    try {
      await deleteDoc(doc(db, "rutinas", rutinaId));
      console.log("Rutina eliminada con éxito");
    } catch (error) {
      console.error("Error eliminando rutina:", error);
    }
  };
  
  // Obtener retroalimentaciones de una rutina
  export const getRetroalimentaciones = async (rutinaId) => {
    try {
      const q = query(collection(db, "retroalimentaciones"), where("rutinaId", "==", rutinaId));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error obteniendo retroalimentaciones:", error);
    }
  };