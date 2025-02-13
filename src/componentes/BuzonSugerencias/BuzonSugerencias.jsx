import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';

const BuzonSugerencias = () => {
    const [retroalimentaciones, setRetroalimentaciones] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/api/retroalimentaciones`)
            .then(response => setRetroalimentaciones(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Buzón de Sugerencias</h2>
            <ul>
                {retroalimentaciones.map(retro => (
                    <li key={retro.id}>
                        <p><strong>Rutina:</strong> {retro.rutina.nombre}</p>
                        <p><strong>Comentario:</strong> {retro.comentario}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BuzonSugerencias;