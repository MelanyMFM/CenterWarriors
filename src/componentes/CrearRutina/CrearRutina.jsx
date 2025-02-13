import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';

const CrearRutina = () => {
    const [nombre, setNombre] = useState('');
    const [objetivo, setObjetivo] = useState('');
    const [dificultad, setDificultad] = useState('');
    const [ejercicios, setEjercicios] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaRutina = { nombre, objetivo, dificultad, ejercicios };
        axios.post(`${API_URL}/api/rutinas`, nuevaRutina)
            .then(response => alert('Rutina creada exitosamente'))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Crear Nueva Rutina</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre de la rutina"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Objetivo"
                    value={objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Dificultad"
                    value={dificultad}
                    onChange={(e) => setDificultad(e.target.value)}
                />
                <button type="submit">Crear Rutina</button>
            </form>
        </div>
    );
};

export default CrearRutina;