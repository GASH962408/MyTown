import React, { useState } from 'react';  
import Square from '../Seccion1/Seccion1';  // Importamos el componente `Square` desde su ubicación
import './Board.css';  // Importamos el archivo CSS para estilizar el tablero

// Definimos el componente `Board`
const Board = () => {
  // `isNext` controla de quién es el turno. Si es true, es el turno de "X"; si es false, es el turno de "O".
  // `useState(true)` inicializa el turno con "X".
  const [isNext, setIsNext] = useState(true);  
  
  // `squares` almacena el estado de los 9 cuadrados en el tablero. Comenzamos con un array de 9 `null` (tablero vacío).
  const [squares, setSquares] = useState(Array(9).fill(null)); 

  // Función que se ejecuta cuando se hace clic en un cuadrado.
  const handleClick = (index) => {
    const newSquares = [...squares];  // Hacemos una copia del array `squares` para no modificar el original directamente.

    // Si el cuadrado ya tiene un valor ("X" o "O"), no permitimos que se cambie de nuevo.
    if (newSquares[index]) return;

    // Si `isNext` es true, ponemos "X" en el cuadrado. Si es false, ponemos "O".
    newSquares[index] = isNext ? "X" : "O";
    setSquares(newSquares); 
    // Cambiamos el valor de `isNext` para alternar el turno entre "X" y "O".
    setIsNext(!isNext);  
  };

  // Renderizamos el tablero con tres filas de tres cuadrados cada una.
  return (
    <div>
      {/* Primera fila de cuadrados */}
      <div className='row'>
        <Square value={squares[0]} onClick={() => handleClick(0)} />  {/* Cuadrado 1 */}
        <Square value={squares[1]} onClick={() => handleClick(1)} />  {/* Cuadrado 2 */}
        <Square value={squares[2]} onClick={() => handleClick(2)} />  {/* Cuadrado 3 */}
      </div>

      {/* Segunda fila de cuadrados */}
      <div className='row'>
        <Square value={squares[3]} onClick={() => handleClick(3)} />  {/* Cuadrado 4 */}
        <Square value={squares[4]} onClick={() => handleClick(4)} />  {/* Cuadrado 5 */}
        <Square value={squares[5]} onClick={() => handleClick(5)} />  {/* Cuadrado 6 */}
      </div> 

      {/* Tercera fila de cuadrados */}
      <div className='row'>
        <Square value={squares[6]} onClick={() => handleClick(6)} />  {/* Cuadrado 7 */}
        <Square value={squares[7]} onClick={() => handleClick(7)} />  {/* Cuadrado 8 */}
        <Square value={squares[8]} onClick={() => handleClick(8)} />  {/* Cuadrado 9 */}
      </div>
    </div>
  );
};

export default Board;
