import React from 'react'
import '/src/assets/Navbar.css'

const Navigation = () => {
  return (
    <div className="Navigation">
      {/* Contêiner para a barra de navegação principal */}
      <div className="logo-autora">
        {/* Subcontêiner para exibir o logotipo e o nome da autora */}
        <div className="cruz">
          <img src="src/images/cruz-03.svg" alt="Cruz" />
          {/* Imagem decorativa em formato de cruz */}
        </div>
        <div className="nome-navigation">Ana Clara Galli</div>
        {/* Exibe o nome da autora no menu de navegação */}
      </div>
      
      <div className="Navigation-itens">
        {/* Subcontêiner para os itens de navegação */}
        <div className="items">
          {/* Lista de links de navegação */}
          <p><a href="#" id="linkKits">Kits</a></p>
          {/* Link para a seção de Kits */}
          <p><a href="#" id="linkOndeComprar">Onde Comprar</a></p>
          {/* Link para a seção "Onde Comprar" */}
          <p><a href="#" id="linkFaleComigo">Fale Comigo</a></p>
          {/* Link para a seção "Fale Comigo" */}
          
          <div className="button-navigation">
            {/* Contêiner para o botão de destaque */}
            <div className="ComprarAgora">
              <a id="ComprarAgora" href="https://www.catarse.me/rduvng" target="_blank" rel="noopener noreferrer">
                Comprar Agora
              </a>
              {/* Botão que redireciona o usuário para o site do Catarse em uma nova aba */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
