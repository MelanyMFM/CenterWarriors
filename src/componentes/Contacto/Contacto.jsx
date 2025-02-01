import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './contacto.css';
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import Entrenador from "../Entrenador/Entrenador";

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
                    <a href="mailto:mefrancom@unal.edu.co">mefrancom@unal.co</a>
                </p>
                <p className='info'>
                    <FaPhone className="icon" /> {/* Icono de teléfono */}
                    <a href="tel:+57380652059">+57 380 652 059 (ni se de quien es xd)</a>
                </p>
            </div>

            <div className='logos'>
                <a href='https://www.instagram.com/centerwarriors/'><img alt="instagram" src={instagram}/></a>
                <a href='https://www.facebook.com/profile.php?id=100085446926975'><img alt="facebook" src={facebook}/></a>

            </div>

            <p className='tituloContact'>Entrenadores</p>
            <div className='entrenadores'>
                <Entrenador nombre="Sebastian Osorio" instagram="https://www.instagram.com/jsebasosorio07/" img="src\assets\sebas.png" />
                <Entrenador nombre="Faber Pineda" instagram="https://www.instagram.com/faberpinedav/" img="src\assets\faber.png"/>
                <Entrenador nombre="Daniel Rodriguez" instagram="https://www.instagram.com/danirodriguez_37/" img="src\assets\dani.png" />
                <Entrenador nombre="Juan P Buitrago" instagram="https://www.instagram.com/juanpablo_thefit/" img="src\assets\juan.png" />
            </div>
        </div>
    );
}

export default Contacto;