import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./menu.css";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            <li className='listaMenu'>Contacto</li>
            <li className='listaMenu'>Sugerencias</li>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;