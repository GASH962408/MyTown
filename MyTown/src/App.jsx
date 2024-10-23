import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Inicio from './Inicio';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/pagina1" element={<Pagina1 />} />
            <Route path="/pagina2" element={<Pagina2 />} />
            {/* Agrega más rutas según necesites */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
