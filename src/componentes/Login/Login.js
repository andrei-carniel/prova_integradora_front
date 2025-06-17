// Importação de Functions, bibliotecas e pagina de estilização
import React from 'react';
import './Login.css'
import Token_Request from '../../requests/Token/Token_Request';

// Html e CSS (Formato React)
export default function LoginMain() {
  return (
    <div className="body">
      <div className="geral">
        <div className="div-login-image">
          <img
            src="/img/LoginImage.png"
            className="login-image"
            alt="CatolicaLogo"
          />
        </div>
        <div className="div-input">
          <Token_Request /> {/* Chamada da function dentro de '../../requests/Token/Token_Request' */}
        </div>
      </div>
    </div>
  );
}