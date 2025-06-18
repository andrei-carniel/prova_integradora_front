// Importação de Functions, bibliotecas e pagina de estilização
import "./Lobby.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVariavelGlobal } from "../../VariavelGlobal";
import Button_Base from "../../components/Button/Button_Base/Button_Base";
import Tabela from "../../components/Tabela/Tabela";
import CardLobby from "../../components/cards/CardLobby/Card_Lobby";
import getPerson from "../../requests/Get_Person/GetPerson"

export default function LobbyMain() {
  const [dataPerson, setDataPerson] = useState(null)


  // Function executada logo após a pagina renderizar
  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const id = localStorage.getItem("id_student");
        const person = await getPerson(id)
        setDataPerson(person)
      } catch (e) {
        alert("error falha")
      }
    }
    fetchPerson()
  }, []);

  // Html e CSS (Formato React)
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
          <Tabela /> {/* Chamada da function dentro de '../../components/Tabela/Tabela.js' */}
          <div className="div-lobby-pages">
            <CardLobby children={"Avançar"} Img="/img/ProvasFazer.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Provas a Fazer" LinkTo="/Provas" style={{ height: "50%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}
            <CardLobby children={"Acessar"} Img="/img/HistoricoProvas.png" onClick={() => { localStorage.setItem("SelectionOption", 2) }} Nome="Provas Feitas" LinkTo="/Provas" style={{ height: "50%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}
            {dataPerson?.is_admin && (
              <Link to={"../adminPage"}>
                <Button_Base children="Administrador" style={{ width: "100%" }} /> {/* Chamada da function dentro de '../../components/Button/Button_Base/Button_Base.js' */}
              </Link>
            )}
            <div className="slot-2-lobby">
              <Link to={"../"}>
                <Button_Base children="Deslogar" style={{ width: "100%" }} /> {/* Chamada da function dentro de '../../components/Button/Button_Base/Button_Base.js' */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}