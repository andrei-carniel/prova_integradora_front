import { useState } from "react";
import "./main.css";
import { Link, useNavigate } from "react-router-dom";
import { setVariavel } from "../../VariavelGlobal";

function LoginMain() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function emailGlobal() {
    setVariavel(email);
  }

  function settEmail() {
    if (email.includes("@")) {
      navigate("/Lobby");
    } else {
      alert("Digite um email válido!");
    }
  }

  function handleLogin() {
    emailGlobal();
    settEmail();
  }

  return (
    <div className="body">
      <div className="geral">
        <div className="divLoginImage">
          <img src="/img/LoginImage.png" className="loginImage" alt="CatolicaLogo" />
        </div>
        <div className="divInput">
          <div className="divDivInputUser">
            <span className="spanUser">Usuário</span>
            <input
              className="inputUser"
              id="recuperacaoInput"
              placeholder="catolicas.sc@catolicasc.edu.br"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="divDivInputPass">
            <span className="spanPass">Senha</span>
            <input className="inputPass" placeholder="*******" type="password" />
            <Link to={"/forgot"}>
              <span>Esqueci minha senha...</span>
            </Link>
          </div>
        </div>
        <div className="divButtonConfirm">
          <button className="buttonConfirm" onClick={handleLogin}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginMain;