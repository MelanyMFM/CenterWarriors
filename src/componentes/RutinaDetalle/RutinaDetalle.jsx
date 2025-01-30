import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import rutinas from '../../assets/rutinas.js'; // Importa las rutinas
import "./rutinaDetalle.css";
import Menu from "../Menu/Menu.jsx"

function RutinaDetalle() {
    const { id } = useParams(); // Obtiene el ID de la URL
    const rutina = rutinas.find(r => r.id === parseInt(id)); // Encuentra la rutina correspondiente

    // Estado para los ejercicios completados, inicializado desde localStorage
    const [completados, setCompletados] = useState(() => {
        const saved = localStorage.getItem(`rutina-${id}-completados`);
        return saved ? JSON.parse(saved) : {};
    });

    // Guardar cambios en localStorage cuando cambia el estado
    useEffect(() => {
        localStorage.setItem(`rutina-${id}-completados`, JSON.stringify(completados));
    }, [completados, id]);

    // Alternar estado de completado de un ejercicio
    const toggleEjercicioCompletado = (diaIndex, ejercicioIndex) => {
        setCompletados(prev => {
            const key = `${diaIndex}-${ejercicioIndex}`;
            return { ...prev, [key]: !prev[key] };
        });
    };

    // Reiniciar la rutina (desmarca todos los ejercicios)
    const reiniciarRutina = () => {
        setCompletados({}); // Borra el estado de completados
        localStorage.removeItem(`rutina-${id}-completados`); // Borra el localStorage
    };

    if (!rutina) {
        return <div>Rutina no encontrada</div>;
    }

    return (
        <div >
            <Menu/>
        <div className="rutina-detalle">
            
            <h2>{rutina.nombre}</h2>
            <p>Entrenador: {rutina.entrenador}</p>

            {rutina.dias.map((dia, diaIndex) => (
                <div key={diaIndex} className="dia-rutina">
                    <h3>{dia.dia}</h3>
                    <div className='tablaEjercicios'>
                        {dia.ejercicios.map((ejercicio, ejercicioIndex) => (
                            <p key={ejercicioIndex} >
                                <label className='ejercicioRutina'>
                                    {ejercicio}
                                    <input
                                        type="checkbox"
                                        checked={completados[`${diaIndex}-${ejercicioIndex}`] || false}
                                        onChange={() => toggleEjercicioCompletado(diaIndex, ejercicioIndex)}
                                    />
                                    
                                </label>
                            </p>
                        ))}
                    </div>
                </div>
            ))}

            {/* Botón para reiniciar la rutina */}
            <button onClick={reiniciarRutina} className="btn-reiniciar">
                Reiniciar rutina 🔄
            </button>
            </div>
        </div>
    );
}

export default RutinaDetalle;
