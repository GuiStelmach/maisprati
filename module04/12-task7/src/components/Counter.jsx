import React, { useState } from 'react';

const Counter = () => {
  // Definimos o estado inicial do contador como 0.
  const [count, setCount] = useState(0);

  // Função para incrementar o contador.
  const increment = () => {
    setCount(count + 1);
  };

  // Função para decrementar o contador. 
  // Aqui garantimos que o valor nunca seja menor que 0.
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador Simples</h1>
      {/* Exibe o valor atual do contador */}
      <h2>{count}</h2>
      {/* Botões de incremento e decremento */}
      <button onClick={increment} style={{ margin: '0 10px', padding: '10px 20px' }}>
        Incrementar
      </button>
      <button onClick={decrement} style={{ margin: '0 10px', padding: '10px 20px' }}>
        Decrementar
      </button>
    </div>
  );
};

export default Counter;
