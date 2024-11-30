import React, { useState, useEffect } from 'react';
import './Timer.css'; // Importa o CSS

const Timer = () => {
  const [seconds, setSeconds] = useState(0); // Armazena o tempo em segundos
  const [isRunning, setIsRunning] = useState(true); // Controla se o temporizador está ativo

  // useEffect para controlar o temporizador
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000); // Incrementa o contador a cada segundo
    }
    return () => clearInterval(timer); // Limpa o intervalo quando o componente é desmontado ou o estado muda
  }, [isRunning]);

  // Função para pausar o temporizador
  const pauseTimer = () => setIsRunning(false);

  // Função para reiniciar o temporizador
  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  // Função para retomar o temporizador
  const startTimer = () => setIsRunning(true);

  return (
    <div className="timer-container">
      <h1>Temporizador</h1>
      <p className="timer-display">{seconds}s</p>
      <div className="timer-buttons">
        <button onClick={pauseTimer} className="timer-button pause">
          Pausar
        </button>
        <button onClick={resetTimer} className="timer-button reset">
          Reiniciar
        </button>
        <button onClick={startTimer} className="timer-button start">
          Iniciar
        </button>
      </div>
    </div>
  );
};

export default Timer;
