import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import rutinas from '../../assets/rutinas.js'; // Importa las rutinas
import ejercicios from '../../assets/ejercicios.js'; // Importa los ejercicios
import "./rutinaDetalle.css";
import Menu from "../Menu/Menu.jsx";
import logo from "../../assets/logo.png";

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

    const reiniciarRutina = () => {
        setCompletados({});
        localStorage.removeItem(`rutina-${id}-completados`);
    };

    if (!rutina) {
        return <div>Rutina no encontrada</div>;
    }

    return (
        <div>
            <Menu />
            <div className="rutina-detalle vista">
                <img src={logo} alt="logo" className='logoHead' />
                <div className='rutina-detalle-contenido'>
                    <h2 className='texto-titulo'>{rutina.nombre}</h2>
                    <p>Entrenador: {rutina.entrenador}</p>

                    {rutina.dias.map((dia, diaIndex) => (
                        <div key={diaIndex} className="dia-rutina">
                            <h3 className='texto-titulo'>{dia.dia}</h3>
                            <div className='tablaEjercicios texto-titulo'>
                                {dia.ejercicios.map((ejercicio, ejercicioIndex) => {
                                    // Busca el nombre del ejercicio en la lista de ejercicios
                                    const ejercicioInfo = ejercicios.find(e => e.id === ejercicio.ejercicioId);
                                    return (
                                        <div key={ejercicioIndex} className="ejercicio-item">
                                            <label className='ejercicioRutina'>
                                                {ejercicioInfo ? ejercicioInfo.nombre : "Ejercicio no encontrado"} - {ejercicio.reps}
                                                <div
                                                    className={`checkbox-circle ${completados[`${diaIndex}-${ejercicioIndex}`] ? 'checked' : ''}`}
                                                    onClick={() => toggleEjercicioCompletado(diaIndex, ejercicioIndex)}
                                                ></div>
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                    <button onClick={reiniciarRutina} className="btn-reiniciar">
                        Reiniciar rutina 🔄
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RutinaDetalle;