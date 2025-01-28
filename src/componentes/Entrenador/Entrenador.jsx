import ig from "../../assets/instagram.png";
import face from "../../assets/facebook.png";
import PropTypes from 'prop-types';
import "./entrenador.css";

function Entrenador({ nombre, instagram, img, facebook }) {
    return (
        <div className="entrenador">
            <div className="foto-nombre">
                <img src={img} alt="foto entrenador" className="fotoEnt"/>
                <p className="nombreEnt">{nombre}</p>
            </div>

            <div className="logos">
                <a href={instagram}><img src={ig} alt="logo instagram"/></a>
                <a href={facebook}><img src={face} alt="logo facebook"/></a>
            </div>
        </div>
    );
}

Entrenador.propTypes = {
    nombre: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
};

export default Entrenador;