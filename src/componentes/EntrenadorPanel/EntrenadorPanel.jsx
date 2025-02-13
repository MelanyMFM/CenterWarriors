import { useEffect, useState } from "react";
import { getEntrenadorRutinas, addEjercicio, addRutina, deleteRutina, getRetroalimentaciones } from "../../componentes/firestoreService";


const objetivos = ["Ganar masa muscular", "Perder de peso" ];

const EntrenadorPanel = ({ entrenadorId }) => {
  const [rutinas, setRutinas] = useState([]);
  const [retroalimentaciones, setRetroalimentaciones] = useState([]);
  const [nuevoEjercicio, setNuevoEjercicio] = useState({ nombre: "", descripcion: "", gifUrl: "" });
  const [nuevaRutina, setNuevaRutina] = useState({ nombre: "", objetivo: objetivos[0] });

  useEffect(() => {
    const fetchData = async () => {
      setRutinas(await getEntrenadorRutinas(entrenadorId));
      setRetroalimentaciones(await getRetroalimentaciones(entrenadorId));
    };
    fetchData();
  }, [entrenadorId]);

  const handleAddEjercicio = async () => {
    await addEjercicio(nuevoEjercicio);
    setNuevoEjercicio({ nombre: "", descripcion: "", gifUrl: "" });
  };

  const handleAddRutina = async () => {
    await addRutina({ ...nuevaRutina, entrenadorId });
    setRutinas(await getEntrenadorRutinas(entrenadorId));
    setNuevaRutina({ nombre: "", objetivo: objetivos[0] });
  };

  const handleDeleteRutina = async (rutinaId) => {
    await deleteRutina(rutinaId);
    setRutinas(await getEntrenadorRutinas(entrenadorId));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Panel de Entrenador</h1>
      
      <section className="mt-4">
        <h2 className="text-xl font-semibold">Buzón de Retroalimentaciones</h2>
        <ul>
          {retroalimentaciones.map((retro) => (
            <li key={retro.id}>{retro.comentario} - ⭐ {retro.calificacion}</li>
          ))}
        </ul>
      </section>
      
      <section className="mt-4">
        <h2 className="text-xl font-semibold">Crear Ejercicio</h2>
        <input type="text" placeholder="Nombre" value={nuevoEjercicio.nombre} onChange={(e) => setNuevoEjercicio({ ...nuevoEjercicio, nombre: e.target.value })} />
        <input type="text" placeholder="Descripción" value={nuevoEjercicio.descripcion} onChange={(e) => setNuevoEjercicio({ ...nuevoEjercicio, descripcion: e.target.value })} />
        <input type="text" placeholder="URL del GIF" value={nuevoEjercicio.gifUrl} onChange={(e) => setNuevoEjercicio({ ...nuevoEjercicio, gifUrl: e.target.value })} />
        <button onClick={handleAddEjercicio}>Agregar Ejercicio</button>
      </section>
      
      <section className="mt-4">
        <h2 className="text-xl font-semibold">Crear Rutina</h2>
        <input type="text" placeholder="Nombre" value={nuevaRutina.nombre} onChange={(e) => setNuevaRutina({ ...nuevaRutina, nombre: e.target.value })} />
        <select value={nuevaRutina.objetivo} onChange={(e) => setNuevaRutina({ ...nuevaRutina, objetivo: e.target.value })}>
          {objetivos.map((obj) => <option key={obj} value={obj}>{obj}</option>)}
        </select>
        <button onClick={handleAddRutina}>Agregar Rutina</button>
      </section>
      
      <section className="mt-4">
        <h2 className="text-xl font-semibold">Mis Rutinas</h2>
        <ul>
          {rutinas.map((rutina) => (
            <li key={rutina.id}>{rutina.nombre} - {rutina.objetivo} <button onClick={() => handleDeleteRutina(rutina.id)}>Eliminar</button></li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default EntrenadorPanel;
