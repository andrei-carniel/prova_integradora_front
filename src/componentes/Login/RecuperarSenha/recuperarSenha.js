import "./recuperarSenha.css";
import { useState } from "react";

export default function RecoverPassword() {
    const [style, setStyle] = useState({ display: "none" });
    const [email, setEmail] = useState("");

  function dispairDisplay() {
    setStyle({ display: "flex" });
  }

  return (
    <div className="bodyEsqueciSenha">
      <div className="divEsqueciSenhImage">
        <img src="/img/LoginImage.png" className="loginImage" alt="CatolicaLogo" />
      </div>
      <div className="divRecuperacaoSpan">
        <span>Recuperação de Senha</span>
      </div>
      <div className="divRecuperacaoInput">
        <span>Digite sua nova senha</span>
        <div>
          <input
            id="recuperacaoInput"
            type="password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
      </div>
      <div className="divRecuperacaoButton">
        <button onClick={dispairDisplay}>Enviar</button>
      </div>
      <div style={style} className="divRecuperacaoEmailEnviado">
        <span>Senha nova salva com sucesso</span>
      </div>
    </div>
  );
}
