import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import rutinas from '../../assets/rutinas.js'; // Importa las rutinas

function RutinaDetalle() {
    const { id } = useParams(); // Obtiene el ID de la URL
    const rutina = rutinas.find(r => r.id === parseInt(id)); // Encuentra la rutina correspondiente

    const [completados, setCompletados] = useState(() => {
        const saved = localStorage.getItem(`rutina-${id}-completados`);
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem(`rutina-${id}-completados`, JSON.stringify(completados));
    }, [completados, id]);

    const toggleEjercicioCompletado = (diaIndex, ejercicioIndex) => {
        setCompletados(prev => {
            const key = `${diaIndex}-${ejercicioIndex}`;
            return { ...prev, [key]: !prev[key] };
        });
    };

    if (!rutina) {
        return <div>Rutina no encontrada</div>;
    }

    return (
        <div className="rutina-detalle">
            <h2>{rutina.nombre}</h2>
            <p>Entrenador: {rutina.entrenador}</p>
            {rutina.dias.map((dia, diaIndex) => (
                <div key={diaIndex} className="dia-rutina">
                    <h3>{dia.dia}</h3>
                    <ul>
                        {dia.ejercicios.map((ejercicio, ejercicioIndex) => (
                            <li key={ejercicioIndex}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={completados[`${diaIndex}-${ejercicioIndex}`] || false}
                                        onChange={() => toggleEjercicioCompletado(diaIndex, ejercicioIndex)}
                                    />
                                    {ejercicio}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default RutinaDetalle;