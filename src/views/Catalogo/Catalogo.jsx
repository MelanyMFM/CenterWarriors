import ejercicios from '../../assets/ejercicios.js'; // Importa la lista de ejercicios
import GrupoMuscular from "../../componentes/GrupoMuscular/GrupoMuscular.jsx"; // Importa el componente GrupoMuscular
import "./catalogo.css";
import Menu from "../../componentes/Menu/Menu.jsx";
import logo from "../../assets/logo.png";

function Catalogo() {
    // Agrupa los ejercicios por grupoMuscular
    const gruposMusculares = ejercicios.reduce((grupos, ejercicio) => {
        const grupo = ejercicio.grupoMuscular;
        if (!grupos[grupo]) {
            grupos[grupo] = [];
        }
        grupos[grupo].push(ejercicio);
        return grupos;
    }, {});

    return (
        <div>
            <Menu />
            <div className="catalogo vista">
                <img src={logo} alt="logo" className='logoHead' />
                <div className='catalogo-contenido'>
                    <p className='texto-titulo-cat'>Catálogo de Ejercicios</p>
                    {Object.keys(gruposMusculares).map((grupo) => (
                        <GrupoMuscular
                            key={grupo}
                            grupo={grupo}
                            ejercicios={gruposMusculares[grupo]}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catalogo;