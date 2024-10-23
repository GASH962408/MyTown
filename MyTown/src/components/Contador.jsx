import React, {useState} from 'react';

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);

  const Add = () => {
    setCounter(counter+1);
  }

  const Reset = () => {
    setCounter(0);
  }


  return(
    <div>
      <h1>Estoy aqui</h1>
      <h2>The counter is: {counter}</h2>
      <button onClick={Add}>+</button>
      <button onClick={Reset}>Reset</button>

    </div>
  );

}

export default CounterComponent;
