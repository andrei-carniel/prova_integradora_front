// Importação de bibliotecas
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useJwt } from "react-jwt";

// Cria a function principal
function LoginForm() {
  // Declarações de useState para armazenamento de informações
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState(null);
  const {decodedToken, isExpired } = useJwt(token)

  // Declara o Navigate(React Router DOM)
  const navigate = useNavigate();

  useEffect(() => {
  if (decodedToken) {
    localStorage.setItem('id_student', decodedToken.student_id);
    localStorage.setItem('ra_student', decodedToken.enterprise_id);
    localStorage.setItem('university_id', decodedToken.university_id);
    navigate('/lobby');
  }
}, [decodedToken]);


  // Função assíncrona, é chamada no envio do formulário ao clicar no botão de enviar da página "./componentes/login/Login.js"
  const handleSubmit = async (event) => {

    // Impede o comportamento padrão de ocorrer
    event.preventDefault();
    setError('');

    // Tentativa de consumir API em "http://10.197.12.103:5000/auth/login", acesso direto a geração de "Token"
    try {

      // Armazena o que recebe da API dentro de "response"
      const response = await fetch('http://10.197.12.103:5000/auth/login',
        {
          // Metódo 'POST'
          method: 'POST',

          // Chamada de um JSON 
          headers: {
            'Content-Type': 'application/json',
          },

          // Informações passadas (username, password)
          body: JSON.stringify({ username, password }),
        });

        // Prevenção de falhas
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao fazer login.');
        return;
      }

      // Recebe dados de 'response' em JSON
      const data = await response.json();

      // Armazena "Token" dentro de 'token'
      const token = data.token;
      setToken(token)

      // Armazena o "Token" dentro do 'localStorage()' com o nome de 'authToken'
      localStorage.setItem('authToken', token);

      // Direciona o usuário ao '"./componentes/Lobby/Lobby.js" se tudo der certo
      navigate('/lobby');

    } catch (error) { //falha na hora de requisitar 'http://10.197.12.103:5000/auth/login'
      setError('Erro ao conectar com o servidor.');
    }
  };

  // Html e CSS (Formato React)
  return (
    <form onSubmit={handleSubmit}>
      <div className='div-div-input-pass'>
        <label htmlFor="username">Nome de Usuário:</label>
        <input
          type="text"
          id="username"
          className='input-user'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='div-div-input-pass'>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          className='input-pass'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='div-button-confirm'>
        <button className='button-confirm' type="submit">Entrar</button>
      </div>
    </form>
  );
}

export default LoginForm;