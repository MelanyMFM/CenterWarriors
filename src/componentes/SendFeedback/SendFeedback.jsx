import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./sendFeedback.css";

const SendFeedback = () => {
    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false); // Estado de carga
    const [message, setMessage] = useState(""); // Mensaje de éxito/error

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (feedback.trim() === "") return;

        setLoading(true); // Activar estado de carga
        setMessage(""); // Limpiar mensajes anteriores

        try {
            // Guardar la retroalimentación en Firestore
            await addDoc(collection(db, "feedback"), {
                message: feedback,
                timestamp: serverTimestamp(),
            });
            setFeedback(""); // Limpiar el campo después de enviar
            setMessage("¡Gracias por tu retroalimentación!"); // Mensaje de éxito
        } catch (error) {
            console.error("Error al enviar la retroalimentación: ", error);
            setMessage("Hubo un error al enviar tu retroalimentación. Inténtalo de nuevo."); // Mensaje de error
        } finally {
            setLoading(false); // Desactivar estado de carga
        }
    };

    return (
        <div className="form-retroalimentacion" id="form-retroalimentacion">
            <p className="form-retroalimentacion-titulo">¿Tienes sugerencias para ayudarnos a mejorar?</p>
            <p className="form-retroalimentacion-subtitulo">No dudes en llenar este buzón de sugerencias</p>

            <form className="formulario" onSubmit={handleSubmit}>
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Escribe tu retroalimentación aquí..."
                    required
                    className="area-texto"
                    disabled={loading} // Deshabilitar mientras se carga
                />
                <button
                    type="submit"
                    className="boton-sugerencia"
                    disabled={loading || feedback.trim() === ""} // Deshabilitar si está vacío o cargando
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>
                {message && <p className="mensaje">{message}</p>}
            </form>
        </div>
    );
};

export default SendFeedback;