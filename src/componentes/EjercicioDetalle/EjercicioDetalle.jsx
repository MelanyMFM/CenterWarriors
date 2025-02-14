import React from 'react';
import { useParams } from 'react-router-dom';
import ejercicios from "../../assets/ejercicios.js"; // Importa la lista de ejercicios
import "./EjercicioDetalle.css";
import Menu from "../Menu/Menu.jsx";
import logo from "../../assets/logo.png";

function EjercicioDetalle() {
    const { id } = useParams(); // Obtiene el ID del ejercicio de la URL
    const ejercicio = ejercicios.find(e => e.id === parseInt(id)); // Busca el ejercicio correspondiente

    if (!ejercicio) {
        return <div>Ejercicio no encontrado</div>;
    }

    return (
        <div>
            <Menu />
            <div className="ejercicio-detalle vista">
                <img src={logo} alt="logo" className='logoHead' />
                <div className='ejercicio-detalle-contenido'>
                    <h2 className='texto-titulo'>{ejercicio.nombre}</h2>
                    <p className='descripcion-ejercicio'>{ejercicio.descripcion}</p>
                    {ejercicio.link && (
                        <div className="gif-container">
                            <img src={ejercicio.link} alt={`Gif de ${ejercicio.nombre}`} className="gif-ejercicio" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default EjercicioDetalle;