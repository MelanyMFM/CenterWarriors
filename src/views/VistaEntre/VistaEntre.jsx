import React, { useEffect } from "react"; // Importa useEffect
import { useNavigate } from "react-router-dom";
import FetchFeedback from "../../componentes/FetchFeedback/FetchFeedback";
import "./vistaEntre.css";
import Menu from "../../componentes/Menu/Menu";

function VistaEntre() {
    const navigate = useNavigate();

    useEffect(() => {
        const accesoValido = sessionStorage.getItem("codigoValido");
        if (!accesoValido) {
            navigate("/"); // Redirige a la página de ingreso si no está validado
        }
    }, [navigate]);

    return (
        <>
            <Menu/>
            <div className="vista-entre">
                <p>Buzón de Sugerencias</p>
                <FetchFeedback />
            </div>
       </> 
    );
}

export default VistaEntre;