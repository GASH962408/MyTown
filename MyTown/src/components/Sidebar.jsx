import React from 'react';
import './Sidebar.css'; // Opcional: para estilos
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/pagina1">Página 1</Link></li>
        <li><Link to="/pagina2">Página 2</Link></li>
        {/* Agrega más enlaces según necesites */}
      </ul>
    </nav>
  );
};

export default Sidebar;
