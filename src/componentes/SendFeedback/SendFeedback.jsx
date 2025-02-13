import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


const SendFeedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (feedback.trim() === "") return;

    try {
      // Guardar la retroalimentación en Firestore
      await addDoc(collection(db, "feedback"), {
        message: feedback, // Asegúrate de incluir la propiedad "message"
        timestamp: serverTimestamp(), // Agrega un timestamp
      });
      setFeedback(""); // Limpiar el campo después de enviar
      alert("¡Gracias por tu retroalimentación!");
    } catch (error) {
      console.error("Error al enviar la retroalimentación: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-retroalimentacion">
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Escribe tu retroalimentación aquí..."
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default SendFeedback;