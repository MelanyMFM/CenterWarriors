import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function VistaEntre() {
    const navigate = useNavigate();

    useEffect(() => {
        const accesoValido = sessionStorage.getItem("codigoValido");
        if (!accesoValido) {
            navigate("/"); // Redirige a la página de ingreso si no está validado
        }
    }, [navigate]);

    return (
        <div>
            <h1>Vista de las cosas del entrenador</h1>
            <p>Sitio en construccion :c</p>
        </div>
    );
}

export default VistaEntre;
