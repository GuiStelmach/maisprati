import React, { useState, useEffect } from 'react';

const BackgroundChanger = () => {
  // Estado para armazenar a cor de fundo atual.
  const [bgColor, setBgColor] = useState('#ffffff'); // Começa com branco.

  // Função para gerar uma cor aleatória no formato hexadecimal.
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return randomColor;
  };

  // Função chamada ao clicar no botão para alterar a cor de fundo.
  const changeBackgroundColor = () => {
    const newColor = generateRandomColor();
    setBgColor(newColor);
  };

  // useEffect para atualizar a cor de fundo do corpo da página sempre que bgColor mudar.
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]); // O array de dependências garante que o efeito seja disparado sempre que bgColor mudar.

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Alteração de Cor de Fundo</h1>
      <p>
        Clique no botão abaixo para alterar a cor de fundo da página. <br />
        Cor atual: <strong>{bgColor}</strong>
      </p>
      <button
        onClick={changeBackgroundColor}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Alterar Cor
      </button>
    </div>
  );
};

export default BackgroundChanger;
