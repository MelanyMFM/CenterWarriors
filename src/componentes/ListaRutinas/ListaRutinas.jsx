function ListaRutinas({ rutinas }) {
    return (
        <div className="lista-rutinas">
            {rutinas.length > 0 ? (
                rutinas.map((rutina) => (
                    <div key={rutina.id} className="rutina-card">
                        <p><strong>{rutina.nombre}</strong></p>
                        <p>{rutina.entrenador}</p>
                    </div>
                ))
            ) : (
                <p>No se encontraron rutinas</p>
            )}
        </div>
    );
}

export default ListaRutinas;
