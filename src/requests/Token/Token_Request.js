import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {

      const response = await fetch('http://10.197.12.103:5000/auth/login', 
        { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao fazer login.');
        return;
      }

      //Token
      const data = await response.json();
      const token = data.token;
      localStorage.setItem('authToken', token);

      //Id do estudante
      //const id = data.id;
      //localStorage.setItem('id_student', id)
      localStorage.setItem('id_student', 1)

      navigate('/lobby');
    } catch (error) {
      console.error('Erro na requisição:', error);
      setError('Erro ao conectar com o servidor.');
    }
  };
  
  

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