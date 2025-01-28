import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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
          <ul className='listas'>
            <li className='listaMenu'>Inicio</li>
            <li className='listaMenu'>Catálogo de ejercicios</li>
            <li className='listaMenu'>Contacto</li>
            <li className='listaMenu'>Sugerencias</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;