import React, { useState, useEffect } from 'react'
import './CountdownTimer.css'

const CountdownTimer = () => {
  const [time, setTime] = useState(0) // Tempo inicial em segundos
  const [isActive, setIsActive] = useState(false) // Se o timer está ativo
  const [intervalId, setIntervalId] = useState(null) // Intervalo para contar o tempo
  const [isModalOpen, setIsModalOpen] = useState(false) // Controle do modal

  // Função para iniciar o timer
  const startTimer = () => {
    if (time > 0 && !isActive) {
      setIsActive(true)
      const id = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 1) {
            clearInterval(id)
            setIsActive(false)
            setIsModalOpen(true) // Abre o modal quando o tempo acaba
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
      setIntervalId(id)
    }
  }

  // Função para pausar o timer
  const pauseTimer = () => {
    clearInterval(intervalId)
    setIsActive(false)
  }

  // Função para reiniciar o timer
  const resetTimer = () => {
    clearInterval(intervalId)
    setIsActive(false)
    setTime(0)
  }

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Atualiza o timer quando o valor muda
  const handleTimeChange = (e) => {
    setTime(parseInt(e.target.value) || 0)
  }

  return (
    <div className="countdown-timer-container">
      <h1>Countdown Timer</h1>
      <div className="countdown-timer">
        <input
          type="number"
          value={time}
          onChange={handleTimeChange}
          placeholder="Defina os segundos"
          disabled={isActive}
          min="0"
        />
        <div className="time-display">
          <span>{time}</span> segundos
        </div>
        <div className="buttons">
          <button onClick={startTimer} disabled={isActive || time <= 0}>
            Iniciar
          </button>
          <button onClick={pauseTimer} disabled={!isActive}>
            Pausar
          </button>
          <button onClick={resetTimer}>
            Reiniciar
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>X</span>
            <h2>O tempo acabou!</h2>
            <button className="close-modal-btn" onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CountdownTimer
