import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./vistaEntre.css";
import PanelEntrenador from "../../componentes/EntrenadorPanel/EntrenadorPanel";

function VistaEntre() {
    const navigate = useNavigate();

    useEffect(() => {
        const accesoValido = sessionStorage.getItem("codigoValido");
        if (!accesoValido) {
            navigate("/"); // Redirige a la página de ingreso si no está validado
        }
    }, [navigate]);

    return (
        <div className="todo-temp">
            <PanelEntrenador/>
        </div>
    );
}

export default VistaEntre;
