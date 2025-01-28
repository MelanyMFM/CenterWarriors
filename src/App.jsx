import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./views/Home/Home";
import Usuario from './views/Usuario/Usuario';
import Entrenador from './views/Entrenador/Entrenador';
import Contacto from './componentes/Contacto/Contacto';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usuario" element={<Usuario/> }/>
                <Route path="/entrenador" element={<Entrenador/> }/>

                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </Router>
    );
}

export default App;
