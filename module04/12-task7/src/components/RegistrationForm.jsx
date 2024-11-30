import React, { useState } from 'react';
import './RegistrationForm.css'; // Importa o CSS

// Componente para exibir a mensagem de boas-vindas
const WelcomeMessage = ({ name, email }) => {
  return (
    <div className="welcome-container">
      <h2>Bem-vindo(a), {name}!</h2>
      <p>Seu registro com o e-mail <strong>{email}</strong> foi concluído com sucesso.</p>
    </div>
  );
};

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Atualiza os valores do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Valida os campos e envia o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError('Todos os campos devem ser preenchidos!');
    } else {
      setError('');
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <WelcomeMessage name={formData.name} email={formData.email} />;
  }

  return (
    <div className="form-container">
      <h1>Formulário de Registro</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Digite seu nome"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Digite sua senha"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="submit-button">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
