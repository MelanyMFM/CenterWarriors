function ListaRutinas({ rutinas }) {
    return (
        <div className="lista-rutinas">
            {rutinas.length > 0 ? (
                rutinas.map((rutina) => (
                    <div key={rutina.id} className="rutina-card">
                        <p className="tituloRutina">{rutina.nombre}</p>
                        <p className="entrenadorRutina">{rutina.entrenador}</p>
                    </div>
                ))
            ) : (
                <p>No se encontraron rutinas</p>
            )}
        </div>
    );
}

export default ListaRutinas;
