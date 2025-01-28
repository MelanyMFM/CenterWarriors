import Menu from "../../componentes/Menu/Menu";
import './home.css';
import logo from "../../assets/logo.png";
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="elHome">
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
    </div>
  );
};

export default Home;
