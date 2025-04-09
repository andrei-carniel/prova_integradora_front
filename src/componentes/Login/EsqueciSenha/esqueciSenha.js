import "./esqueciSenha.css";
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
    <div className="bodyEsqueciSenha">
      <div className="divEsqueciSenhImage">
        <img src="/img/LoginImage.png" className="loginImage" alt="CatolicaLogo" />
      </div>
      <div className="divRecuperacaoSpan">
        <span>Recuperação de Senha</span>
      </div>
      <div className="divRecuperacaoInput">
        <span>Digite seu Email</span>
        <div>
          <input
            id="recuperacaoInput"
            placeholder="catolicas.sc@catolicasc.edu.br"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
      </div>
      <div className="divRecuperacaoButton">
        <button onClick={dispairDisplay}>Enviar</button>
      </div>
      <div style={style} className="divRecuperacaoEmailEnviado">
        <span>Pedido de recuperação de senha enviado para o Email de {email}</span>
        <button onClick={dispairDisplay}>Reenviar</button>

      </div>
    </div>
  );
}
