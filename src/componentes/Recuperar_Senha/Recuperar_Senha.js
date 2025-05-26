import "./Recuperar_Senha.css";
import { useState } from "react";

export default function RecoverPassword() {
  const [style, setStyle] = useState({ display: "none" });
  const [email, setEmail] = useState("");

  function dispairDisplay() {
    setStyle({ display: "flex" });
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
        <span>Digite sua nova senha</span>
        <div>
          <input
            id="recuperacaoInput"
            type="password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="div-recuperacao-button">
        <button className="button-div-recuperacao-button" onClick={dispairDisplay}>Enviar</button>
      </div>
      <div style={style} className="div-recuperacao-email-enviado">
        <span>Senha nova salva com sucesso</span>
      </div>
    </div>
  );
}