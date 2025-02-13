import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';

const AgregarEjercicio = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [gif, setGif] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoEjercicio = { nombre, descripcion, gif };
        axios.post(`${API_URL}/api/ejercicios`, nuevoEjercicio)
            .then(response => alert('Ejercicio agregado exitosamente'))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Agregar Ejercicio</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre del ejercicio"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="URL del GIF explicativo"
                    value={gif}
                    onChange={(e) => setGif(e.target.value)}
                />
                <button type="submit">Agregar Ejercicio</button>
            </form>
        </div>
    );
};

export default AgregarEjercicio;