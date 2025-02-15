import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import "./menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContactoClick = (e) => {
    e.preventDefault(); // Evita la navegación predeterminada
    setIsOpen(false); // Cierra el menú
    if (location.pathname !== '/') {
      navigate('/'); // Navega a la ruta principal
    }
    // Espera a que la navegación se complete antes de hacer el scroll
    setTimeout(() => {
      const contactoSection = document.getElementById('contacto');
      if (contactoSection) {
        contactoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Un pequeño retraso para asegurar que la navegación haya terminado
  };

  const handleSugerenciaClick = (e) => {
    e.preventDefault(); // Evita la navegación predeterminada
    setIsOpen(false); // Cierra el menú
    if (location.pathname !== '/') {
      navigate('/'); // Navega a la ruta principal
    }
    // Espera a que la navegación se complete antes de hacer el scroll
    setTimeout(() => {
      const sugerenciaSection = document.getElementById("form-retroalimentacion");
      if (sugerenciaSection) {
        sugerenciaSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Un pequeño retraso para asegurar que la navegación haya terminado
  };

  return (
    <div className='todo'>
      <button onClick={toggleMenu} className="menu-icon">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className="menu-content">
          <div className='listas'>
            <Link to={"/"} className='listaMenu' onClick={() => setIsOpen(false)}>Inicio</Link>
            <li className='listaMenu' onClick={() => setIsOpen(false)}>Catálogo de ejercicios</li>
            <Link to={"/"} className='listaMenu' onClick={handleContactoClick}>Contacto</Link>
            <Link to={"/"} className='listaMenu' onClick={handleSugerenciaClick}>Sugerencias</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;