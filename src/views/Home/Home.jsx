import Menu from "../../componentes/Menu/Menu";
import './home.css';
import logo from "../../assets/logo.png";
import {Link} from 'react-router-dom';
import Contacto from "../../componentes/Contacto/Contacto";
import SendFeedback from "../../componentes/SendFeedback/SendFeedback";

function Home() {
  return (
    <div className="elHome vista">
      <Menu/>
      <div className="home"> 
        <img alt="logo"src={logo} className="logo"/>
        <p className="titulo">Center Warriors</p>
        <div className="roles">
          <p className="seleccione">Seleccione su rol</p>
          <Link className="rol" to={"/usuario"}>Usuario</Link>
          <Link className="rol" to={"/entrenador"}>Entrenador</Link>
        </div>


      </div>
      <Contacto/>
      <SendFeedback/>
    </div>
  );
};

export default Home;
