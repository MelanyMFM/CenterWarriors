import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './contacto.css';
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import Entrenador from "../Entrenador/Entrenador";

import sebas from "../../assets/sebas.png";
import faber from "../../assets/faber.png";
import dani from "../../assets/dani.png";
import juan from "../../assets/juan.png";

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
                    <a href="tel:+57380652059">+57 380 652 059</a>
                </p>
            </div>

            <div className='logos'>
                <a href='https://www.instagram.com/centerwarriors/'><img alt="instagram" src={instagram}/></a>
                <a href='https://www.facebook.com/profile.php?id=100085446926975'><img alt="facebook" src={facebook}/></a>

            </div>

            <p className='tituloContact'>Entrenadores</p>
            <div className='entrenadores'>
                <Entrenador nombre="Sebastian Osorio" instagram="https://www.instagram.com/jsebasosorio07/" img={sebas} />
                <Entrenador nombre="Faber Pineda" instagram="https://www.instagram.com/faberpinedav/" img={faber}/>
                <Entrenador nombre="Daniel Rodriguez" instagram="https://www.instagram.com/danirodriguez_37/" img={dani} />
                <Entrenador nombre="Juan P Buitrago" instagram="https://www.instagram.com/juanpablo_thefit/" img={juan} />
            </div>
        </div>
    );
}

export default Contacto;
