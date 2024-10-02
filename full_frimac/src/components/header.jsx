// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css'; // Asegúrate de crear e importar el archivo CSS

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú hamburguesa

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">Full-frimac ⛽</div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <button className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Símbolo de hamburguesa */}
        </button>
        <ul className="nav-list">
          <li className="nav-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            Items
            {isDropdownOpen && (
              <ul className="dropdown">
                <li className="dropdown-item">Subitem 1</li>
                <li className="dropdown-item">Subitem 2</li>
                <li className="dropdown-item">Subitem 3</li>
              </ul>
            )}
          </li>
          <li className="nav-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            Otro Item
            {isDropdownOpen && (
              <ul className="dropdown">
                <li className="dropdown-item">Subitem A</li>
                <li className="dropdown-item">Subitem B</li>
                <li className="dropdown-item">Subitem C</li>
              </ul>
            )}
          </li>
          <li className="nav-item">Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
