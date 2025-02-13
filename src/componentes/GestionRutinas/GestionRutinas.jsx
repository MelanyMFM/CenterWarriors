import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';

const GestionRutinas = () => {
    const [rutinas, setRutinas] = useState([]);
    const [editando, setEditando] = useState(null); // Estado para controlar la edición
    const [nombreEditado, setNombreEditado] = useState('');
    const [objetivoEditado, setObjetivoEditado] = useState('');
    const [dificultadEditada, setDificultadEditada] = useState('');

    // Obtener las rutinas al cargar el componente
    useEffect(() => {
        obtenerRutinas();
    }, []);

    const obtenerRutinas = () => {
        axios.get(`${API_URL}/api/rutinas`)
            .then(response => setRutinas(response.data))
            .catch(error => console.error(error));
    };

    // Eliminar una rutina
    const eliminarRutina = (id) => {
        axios.delete(`${API_URL}/api/rutinas/${id}`)
            .then(() => {
                setRutinas(rutinas.filter(rutina => rutina.id !== id));
                alert('Rutina eliminada exitosamente');
            })
            .catch(error => console.error(error));
    };

    // Editar una rutina
    const iniciarEdicion = (rutina) => {
        setEditando(rutina.id);
        setNombreEditado(rutina.nombre);
        setObjetivoEditado(rutina.objetivo);
        setDificultadEditada(rutina.dificultad);
    };

    const guardarEdicion = (id) => {
        const rutinaActualizada = {
            nombre: nombreEditado,
            objetivo: objetivoEditado,
            dificultad: dificultadEditada
        };

        axios.put(`${API_URL}/api/rutinas/${id}`, rutinaActualizada)
            .then(() => {
                setEditando(null);
                obtenerRutinas(); // Refrescar la lista de rutinas
                alert('Rutina actualizada exitosamente');
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Gestión de Rutinas</h2>
            <ul>
                {rutinas.map(rutina => (
                    <li key={rutina.id}>
                        {editando === rutina.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={nombreEditado}
                                    onChange={(e) => setNombreEditado(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={objetivoEditado}
                                    onChange={(e) => setObjetivoEditado(e.target.value)}
                                />
                                <input
                                    type="text"
                                    value={dificultadEditada}
                                    onChange={(e) => setDificultadEditada(e.target.value)}
                                />
                                <button onClick={() => guardarEdicion(rutina.id)}>Guardar</button>
                                <button onClick={() => setEditando(null)}>Cancelar</button>
                            </div>
                        ) : (
                            <div>
                                <h3>{rutina.nombre}</h3>
                                <p>{rutina.objetivo} - {rutina.dificultad}</p>
                                <button onClick={() => iniciarEdicion(rutina)}>Editar</button>
                                <button onClick={() => eliminarRutina(rutina.id)}>Eliminar</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GestionRutinas;