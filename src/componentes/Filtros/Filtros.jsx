import React, { useState, useRef } from "react";
import { FaSearch } from 'react-icons/fa'; 

function Filtros({ onFiltrar }) {
    const [objetivo, setObjetivo] = useState("");
    const [dificultad, setDificultad] = useState("");
    const buttonRef = useRef(null); // Referencia al botón

    const handleFiltrar = () => {
        onFiltrar({ objetivo, dificultad });
        if (buttonRef.current) {
            buttonRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="filtros">
            <div className="filtro-box">
                <p className="tituloFiltro">¿Cuáles son tus objetivos?</p>
                <div className="opciones">
                    <label className="label">
                        <input type="radio" name="objetivo" value="Ganar masa muscular" onChange={(e) => setObjetivo(e.target.value)} /> Ganar masa muscular
                    </label>
                    <label className="label">
                        <input type="radio" name="objetivo" value="Perder peso" onChange={(e) => setObjetivo(e.target.value)} /> Perder peso
                    </label>
                </div>
            </div>

            <div className="filtro-box">
                <p className="tituloFiltro">DIFICULTAD DE LA RUTINA</p>
                <div className="opciones">
                    <label className="label">
                        <input type="radio" name="dificultad" value="Principiante" onChange={(e) => setDificultad(e.target.value)} /> Principiante
                    </label>
                    <label className="label">
                        <input type="radio" name="dificultad" value="Intermedio" onChange={(e) => setDificultad(e.target.value)} /> Intermedio
                    </label>
                    <label className="label">
                        <input type="radio" name="dificultad" value="Avanzado" onChange={(e) => setDificultad(e.target.value)} /> Avanzado
                    </label>
                </div>
            </div>

            <button ref={buttonRef} className="btn-filtrar" onClick={handleFiltrar}>
                Filtrar rutina <FaSearch />
            </button>
        </div>
    );
}

export default Filtros;
