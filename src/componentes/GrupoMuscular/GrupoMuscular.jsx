import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importa íconos de flecha

function GrupoMuscular({ grupo, ejercicios }) {
    const [desplegado, setDesplegado] = useState(false); // Estado para desplegar/ocultar
    const navigate = useNavigate();

    const toggleDesplegado = () => {
        setDesplegado(!desplegado);
    };

    return (
        <div className="grupo-muscular">
            <button onClick={toggleDesplegado} className="grupo-titulo">
                <span className='nombre-grupo'>{grupo}</span>
                <span className='triangulo'>
                    {desplegado ? <FaChevronUp /> : <FaChevronDown />}
                </span>
            </button>
            <div className={`lista-ejercicios ${desplegado ? 'desplegado' : ''}`}>
                {ejercicios.map((ejercicio) => (
                    <div key={ejercicio.id} className="ejercicio-item2">
                        <button
                            className="nombre-ejercicio"
                            onClick={() => navigate(`/usuario/ejercicio/${ejercicio.id}`)}
                        >
                            {ejercicio.nombre}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

GrupoMuscular.propTypes = {
    grupo: PropTypes.string.isRequired,
    ejercicios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default GrupoMuscular;