// src/componentes/FetchFeedback/FetchFeedback.jsx
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { FaTimes } from "react-icons/fa"; // Importa un ícono para cerrar
import "./fetchFeedback.css";

const FetchFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el buzón está abierto

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, "feedback"), orderBy("timestamp", "desc"));
                const querySnapshot = await getDocs(q);
                const feedbackList = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setFeedbacks(feedbackList);
            } catch (error) {
                console.error("Error fetching feedback: ", error);
            } finally {
                setLoading(false);
            }
        };

        if (isOpen) {
            fetchData(); // Solo carga los datos cuando el buzón está abierto
        }
    }, [isOpen]);

    const handleBuzonClick = () => {
        setIsOpen(true); // Abre el buzón y activa la carga de datos
    };

    const handleCerrarBuzon = () => {
        setIsOpen(false); // Cierra el buzón
    };

    return (
        <div className="buzon-container">
            {!isOpen ? (
                <button className="buzon-cerrado" onClick={handleBuzonClick}>
                    <span>📪</span>
                    <p className="cerrado-titulo">Haz clic para ver las sugerencias</p>
                </button>
            ) : (
                <div className="buzon-abierto">
                    <button className="btn-cerrar" onClick={handleCerrarBuzon}>
                        <FaTimes />
                    </button>
                    {loading ? (
                        <div className="cargando">
                            <span role="img" aria-label="cargando">⏳</span>
                            <p className="cerrado-titulo">Cargando retroalimentaciones...</p>
                        </div>
                    ) : (
                        <div className="retroalimentaciones">
                            <p className="retroalimentaciones-title">Retroalimentaciones</p>
                            <ul>
                                {feedbacks.map((feedback) => (
                                    <li key={feedback.id}>
                                        <p className="retro-text">{feedback.message || "Mensaje no disponible"}</p>
                                        <small>
                                            {feedback.timestamp
                                                ? new Date(feedback.timestamp.toDate()).toLocaleString()
                                                : "Fecha no disponible"}
                                        </small>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default FetchFeedback;