import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import "./menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleContactoClick = (e) => {
    e.preventDefault(); // Evita la navegación predeterminada
    navigate('/');
    setTimeout(() => {
      const contactoSection = document.getElementById('contacto');
      if (contactoSection) {
        contactoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <div className='todo'>
      <button onClick={toggleMenu} className="menu-icon">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className="menu-content">
          <div className='listas'>
            <Link to={"/"} className='listaMenu'>Inicio</Link>
            <li className='listaMenu'>Catálogo de ejercicios</li>
            <Link to="/" className='listaMenu' onClick={handleContactoClick}>Contacto</Link>
            <li className='listaMenu'>Sugerencias</li>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;