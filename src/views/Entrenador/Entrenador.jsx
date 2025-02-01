import "./entrenador.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../componentes/Menu/Menu";
import codes from "../../assets/codes.js";
import logo from "../../assets/logo.png";

function Entrenador() {
    const [codigo, setCodigo] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        const codigoNumerico = parseInt(codigo.trim(), 10); 
        
        if (codes.includes(codigoNumerico)) {
            sessionStorage.setItem("codigoValido", "true"); // Guarda acceso
            navigate("/homeEntrenador"); // Redirige
        } else {
            setError("Código incorrecto, intente de nuevo.");
        }
    };
    

    return (
        <div style={{ paddingTop: "1rem", backgroundColor: "#000", height: "100%", paddingBottom: "33.75rem" }}>
            <Menu />
            <div className="entrenadore">
                <div className="headere">
                    <img src={logo} alt="logo" className="logoHead" />
                    <p className="titleEnt">Ingrese su código</p>
                </div>
                <input 
                    type="password" 
                    className="codigo-input"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    placeholder="Ingrese código"
                />
                {error && <p className="error-msg">{error}</p>}
                <button className="btn-aceptar" onClick={handleSubmit}>Aceptar</button>
                
            </div>
        </div>
    );
}

export default Entrenador;
