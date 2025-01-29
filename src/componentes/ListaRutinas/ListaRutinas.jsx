import { Link } from 'react-router-dom'; // Importa Link

function ListaRutinas({ rutinas }) {
    return (
        <div className="lista-rutinas">
            {rutinas.length > 0 ? (
                rutinas.map((rutina) => (
                    <Link to={`/usuario/rutina/${rutina.id}`} key={rutina.id} className="rutina-card links1">
                        <p className="tituloRutina links1">{rutina.nombre}</p>
                        <p className="entrenadorRutina links1">{rutina.entrenador}</p>
                    </Link>
                ))
            ) : (
                <p>No se encontraron rutinas</p>
            )}
        </div>
    );
}

export default ListaRutinas;