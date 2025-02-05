import { useState } from "react";
import Menu from "../../componentes/Menu/Menu";
import Filtros from "../../componentes/Filtros/Filtros.jsx";
import ListaRutinas from "../../componentes/ListaRutinas/ListaRutinas.jsx";
import rutinas from "../../assets/rutinas.js";
import "./usuario.css";
import logo from "../../assets/logo.png";

function Usuario() {
    const [rutinasFiltradas, setRutinasFiltradas] = useState([]);

    const filtrarRutinas = ({ objetivo, dificultad }) => {
        const filtradas = rutinas.filter(r => 
            (objetivo ? r.objetivo === objetivo : true) && 
            (dificultad ? r.dificultad === dificultad : true)
        );
        setRutinasFiltradas(filtradas);
    };

    return (
        <div className="usuario-container vista">
            <Menu />
            <div className="usuCont">
                <img alt="logo" src={logo} className="logoHead"/>
                <div className="porfavorfunciona">              
                    <Filtros onFiltrar={filtrarRutinas} />
                    <ListaRutinas rutinas={rutinasFiltradas} />
                </div>
            </div>
            
        </div>
    );
}

export default Usuario;
