import React from 'react';
import './Sidebar.css'; // Opcional para agregar estilos

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sección 1</a></li>
        <li><a href="#">Sección 2</a></li>
        <li><a href="#">Sección 3</a></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
