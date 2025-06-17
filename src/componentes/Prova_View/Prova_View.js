import "./Prova_View.css";
import { Link } from "react-router-dom";
import CardLobby from "../../components/cards/CardLobby/Card_Lobby";
import Button_Base from "../../components/Button/Button_Base/Button_Base";


export default function ProvaView() {
  return (
    <>
      <div className="body-provas-view">
        <div className="header-provas-view">
          <div className="sair-header-provas-view">
            <Link to="../Lobby">
              <Button_Base children={"🡠ㅤVoltar"} />
            </Link>
          </div>
          <div className="trocar-header-provas-view">
            <Link to="../">
            <Button_Base children={"Vizualizar Provas Antigas"} />
            </Link>
          </div>
          <div className="addition-prova-view">
            <Link to="/ProvaAddition">
            <Button_Base children={"+"} />
            </Link>
          </div>
        </div>
        <div className="main-provas-view">

          <CardLobby children={"Avançar"} Img="/img/HistoricoProvas.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Prova do 1° semestre" LinkTo="/ProvaView" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}
          <CardLobby children={"Avançar"} Img="/img/HistoricoProvas.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Prova do 2° semestre" LinkTo="/Provas" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}
          <CardLobby children={"Avançar"} Img="/img/HistoricoProvas.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Prova do 3° semestre" LinkTo="/Provas" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}
          <CardLobby children={"Avançar"} Img="/img/HistoricoProvas.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Prova do 4° semestre" LinkTo="/Provas" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}
          <CardLobby children={"Avançar"} Img="/img/HistoricoProvas.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Prova do 5° semestre" LinkTo="/Provas" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}
          <CardLobby children={"Avançar"} Img="/img/HistoricoProvas.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Prova do 6° semestre" LinkTo="/Provas" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}
          <CardLobby children={"Avançar"} Img="/img/HistoricoProvas.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Prova do 7° semestre" LinkTo="/Provas" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}
          <CardLobby children={"Avançar"} Img="/img/HistoricoProvas.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Prova do 8° semestre" LinkTo="/Provas" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}

        </div>
      </div>
    </>
  )
}