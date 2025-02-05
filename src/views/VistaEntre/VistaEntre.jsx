import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import perrito from "../../assets/perrito.jpg";
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
        <div className="todo-temp">
            <img src={perrito} alt="perrito" className="perrito"/>
            <p >Sitio en Contrucción :c</p>
        </div>
    );
}

export default VistaEntre;
