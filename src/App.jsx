import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./views/Home/Home";
import Usuario from './views/Usuario/Usuario';
import Entrenador from './views/Entrenador/Entrenador';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/usuario" element={<Usuario/> }/>
                <Route path="/entrenador" element={<Entrenador/> }/>
            </Routes>
        </Router>
    );
}

export default App;
