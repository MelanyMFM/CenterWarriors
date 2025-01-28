import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './contacto.css';
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import Entrenador from "../Entrenador/Entrenador";
import img from "../../assets/Ellipse 1.png";

function Contacto() {
    return (
        <div className='contacto' id="contacto">
            <p className='tituloContact'>Contáctanos</p>
            <div className='infoContact'>
                <p className='info'>
                    <FaMapMarkerAlt className="icon" /> {/* Icono de ubicación */}
                        Barbosa, Colombia
                </p>
                <p className='info'>
                    <FaEnvelope className="icon" /> {/* Icono de correo */}
                    <a href="mailto:softwareashen@gmail.com">softwareashen@gmail.com</a>
                </p>
                <p className='info'>
                    <FaPhone className="icon" /> {/* Icono de teléfono */}
                    <a href="tel:+57380652059">+57 380 652 059</a>
                </p>
            </div>

            <div className='logos'>
                <a href='https://www.instagram.com/centerwarriors/'><img alt="instagram" src={instagram}/></a>
                <a href='https://www.facebook.com/profile.php?id=100085446926975'><img alt="facebook" src={facebook}/></a>

            </div>

            <p className='tituloContact'>Entrenadores</p>
            <div className='entrenadores'>
                <Entrenador nombre="Entrenador 1" instagram="link ig" img={img} facebook="link face"/>
                <Entrenador nombre="ise guiso" instagram="link ig" img={img} facebook="link face"/>
                <Entrenador nombre="Honey" instagram="link ig" img={img} facebook="link face"/>
                <Entrenador nombre="Melany ola" instagram="link ig" img={img} facebook="link face"/>
            </div>
        </div>
    );
}

export default Contacto;