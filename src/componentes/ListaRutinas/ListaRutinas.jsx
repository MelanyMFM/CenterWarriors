import { Link } from 'react-router-dom'; // Importa Link

function ListaRutinas({ rutinas }) {
    return (
        <div className="lista-rutinas">
            {rutinas.length > 0 ? (
                rutinas.map((rutina) => (
                    <Link to={`/usuario/rutina/${rutina.id}`} key={rutina.id} className="rutina-card">
                        <p className="tituloRutina">{rutina.nombre}</p>
                        <p className="entrenadorRutina">{rutina.entrenador}</p>
                    </Link>
                ))
            ) : (
                <p>No se encontraron rutinas</p>
            )}
        </div>
    );
}

export default ListaRutinas;