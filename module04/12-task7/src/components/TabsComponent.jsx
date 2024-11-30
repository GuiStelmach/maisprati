import React, { useState } from 'react'
import './TabsComponent.css'

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('sobre') // Aba inicial ativa

  const handleTabClick = (tab) => {
    setActiveTab(tab) // Atualiza a aba ativa quando clicada
  }

  return (
    <div className="tabs-container">
      {/* Barra de Abas */}
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'sobre' ? 'active' : ''}`}
          onClick={() => handleTabClick('sobre')}
        >
          Sobre
        </div>
        <div
          className={`tab ${activeTab === 'contato' ? 'active' : ''}`}
          onClick={() => handleTabClick('contato')}
        >
          Contato
        </div>
      </div>

      {/* Conteúdo das Abas */}
      <div className="tab-content">
        {activeTab === 'sobre' && (
          <div className="tab-pane">
            <h2>Sobre</h2>
            <p>Este componente faz parte da atividade 7 do módulo de React da formação Dev FullStack da +praTi em parceria com a CodificaEdu.</p>
          </div>
        )}
        {activeTab === 'contato' && (
          <div className="tab-pane">
            <h2>Contato</h2>
            <p>Este é um exemplo de conteúdo para a aba "Contato".</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TabsComponent
