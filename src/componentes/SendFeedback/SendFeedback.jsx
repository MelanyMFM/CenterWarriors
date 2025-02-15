import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./sendFeedback.css";

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
    <div className="form-retroalimentacion" id="form-retroalimentacion">
      <p className="form-retroalimentacion-titulo">¿Tienes sugerencias para ayudarnos a mejorar?</p>
      <p className="form-retroalimentacion-subtitulo">No dudes en llenar este buzón de sugerencias </p>

    <form className="formulario" onSubmit={handleSubmit} >
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Escribe tu retroalimentación aquí..."
        required
        className="area-texto"
      />
      <button type="submit" className="boton-sugerencia">Enviar</button>
    </form>

</div>

  );
};

export default SendFeedback;