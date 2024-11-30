import React, { useState } from 'react';
import './NameFilter.css'; // Importa o CSS

const NameFilter = () => {
  const [filter, setFilter] = useState(''); // Valor digitado no campo de filtro

  // Lista de nomes para exibir
  const names = [
    'Ana',
    'Bruno',
    'Carlos',
    'Diana',
    'Eduardo',
    'Fernanda',
    'Gabriel',
    'Helena',
  ];

  // Lista de nomes filtrados
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(filter.toLowerCase()) // Ignora maiúsculas e minúsculas
  );

  return (
    <div className="filter-container">
      <h1>Filtro de Lista</h1>
      <input
        type="text"
        placeholder="Digite um nome para filtrar"
        className="filter-input"
        value={filter}
        onChange={(e) => setFilter(e.target.value)} // Atualiza o filtro com o texto digitado
      />
      <ul className="name-list">
        {filteredNames.length > 0 ? (
          filteredNames.map((name, index) => (
            <li key={index} className="name-item">
              {name}
            </li>
          ))
        ) : (
          <li className="name-item no-results">Nenhum nome encontrado</li>
        )}
      </ul>
    </div>
  );
};

export default NameFilter;
