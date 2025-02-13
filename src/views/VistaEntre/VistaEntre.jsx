import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FetchFeedback from "../../componentes/fetchFeedback/fetchFeedback";
import "./vistaEntre.css";

function VistaEntre() {
    const navigate = useNavigate();

    useEffect(() => {
        const accesoValido = sessionStorage.getItem("codigoValido");
        if (!accesoValido) {
            navigate("/"); // Redirige a la página de ingreso si no está validado
        }
    }, [navigate]);

    return (
        <div className="temporal">
            <FetchFeedback/>
        </div>
    );
}

export default VistaEntre;
