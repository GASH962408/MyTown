import React from 'react';
import "./Seccion1.css";

const Square = ({ value, onClick }) => {
  return (
    <div>
      <button className="boton" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default Square;
