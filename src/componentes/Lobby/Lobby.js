import "./Lobby.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVariavelGlobal } from "../../VariavelGlobal";
import Button_Base from "../../components/Button/Button_Base/Button_Base";
import Tabela from "../../components/Tabela/Tabela";
import CardLobby from "../../components/cards/CardLobby/Card_Lobby";

export default function LobbyMain() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [dominio, setDominio] = useState("");

  useEffect(() => {
    const emailFromGlobal = getVariavelGlobal();
    if (emailFromGlobal) {
      setEmail(emailFromGlobal);
      setNome(emailFromGlobal.split("@").shift());
      setDominio(emailFromGlobal.split("@").pop());
    }
  }, []);
  return (
    <div>
      <div className="div-header-lobby">
        <div className="div-header-lobby-logo">
          <img src="/img/LobbyImage.png" className="lobby-image" alt="CatolicaLogo" />
        </div>
        <div className="div-span-header-lobby-title">
          <span className="span-lobby">Central do Aluno</span>
        </div>
        <div className="div-header-icon">

        </div>
      </div>
      <div className="div-main-lobby">
        <div className="div-div-main-lobby">
          <Tabela />
          <div className="div-lobby-pages">
            <CardLobby children={"Avançar"} Img="/img/ProvasFazer.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Provas a Fazer" LinkTo="/Provas" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} />
            <CardLobby children={"Acessar"} Img="/img/HistoricoProvas.png" onClick={() => { localStorage.setItem("SelectionOption", 2) }} Nome="Provas Feitas" LinkTo="/Provas" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} />
            {dominio === "catolicasc.org.br" && (
              <Link to={"../adminPage"}>
                <Button_Base children="Administrador" style={{ width: "100%" }} />
              </Link>
            )}
            <div className="slot-2-lobby">
              <Link to={"../"}>
                <Button_Base children="Deslogar" style={{ width: "100%" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}