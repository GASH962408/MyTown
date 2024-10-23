import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Siderbar/Sidebar';
import './App.css'; // Si deseas agregar estilos

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="main-container">
        <Sidebar />
        <div className="content">
        </div>
      </div>
    </div>
  );
}

export default App;
