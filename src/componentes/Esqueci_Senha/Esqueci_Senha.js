import "./Esqueci_Senha.css";
import { useState } from "react";

export default function Forgot() {
  const [style, setStyle] = useState({ display: "none" });
  const [email, setEmail] = useState("");

  function dispairDisplay() {
    if (email.includes("@")) {
      setStyle({ display: "flex" });
    } else {
      alert("Digite um email válido!");
    }
  }

  return (
    <div className="body-esqueci-senha">
      <div className="div-esqueci-senha-image">
        <img src="/img/LoginImage.png" className="login-image" alt="CatolicaLogo" />
      </div>
      <div className="div-recuperacao-span">
        <span>Recuperação de Senha</span>
      </div>
      <div className="div-recuperacao-input">
        <span>Digite seu Email</span>
        <div>
          <input
            id="recuperacaoInput"
            placeholder="catolicas.sc@catolicasc.edu.br"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="div-recuperacao-button">
        <button onClick={dispairDisplay} className="button-div-recuperacao-button">Enviar</button>
      </div>
      <div style={style} className="div-recuperacao-email-enviado">
        <span>Pedido de recuperação de senha enviado para o Email de {email}</span>
        <button onClick={dispairDisplay}>Reenviar</button>
      </div>
    </div>
  );
}