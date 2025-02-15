// src/componentes/Catalogo/GrupoMuscular.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GrupoMuscular({ grupo, ejercicios }) {
    const [desplegado, setDesplegado] = useState(false); // Estado para desplegar/ocultar
    const navigate = useNavigate();

    const toggleDesplegado = () => {
        setDesplegado(!desplegado);
    };

    return (
        <div className="grupo-muscular">
            <h3 onClick={toggleDesplegado} className="grupo-titulo">
                {grupo} {desplegado ? '▲' : '▼'}
            </h3>
            {desplegado && (
                <ul className="lista-ejercicios">
                    {ejercicios.map((ejercicio) => (
                        <li key={ejercicio.id} className="ejercicio-item">
                            <span
                                className="nombre-ejercicio"
                                onClick={() => navigate(`/usuario/ejercicio/${ejercicio.id}`)}
                            >
                                {ejercicio.nombre}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default GrupoMuscular;