import React from 'react';
import './Login.css'
import Token_Request from '../../requests/Token/Token_Request'; // Ajuste o caminho

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
          <Token_Request />
        </div>
      </div>
    </div>
  );
}