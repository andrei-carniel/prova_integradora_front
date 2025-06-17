import "./Admin_Page.css";
import { Link } from "react-router-dom";
import CardLobby from "../../components/cards/CardLobby/Card_Lobby";
import InputAdmin from "../../components/inputs/inputAdmin/Input_Admin";
import Button_Base from "../../components/Button/Button_Base/Button_Base";


export default function Admin_Page() {
  return (
    <>
      <div className="body-admin">
        <div className="header-admin">
          <div className="sair-header-admin">
            <Link to="../Lobby">
              <Button_Base children={"🡠ㅤVoltar"}/>
            </Link>
          </div>
          <div className="trocar-header-admin">
            <InputAdmin />
          </div>
        </div>
        <div className="main-admin">

          <CardLobby children={"Avançar"} Img="/img/ProvasFazer.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Provas a Fazer" LinkTo="/Provas" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}
          <CardLobby children={"Avançar"} Img="/img/ProvasFazer.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Vizualizar Provas Antigas" LinkTo="/ProvaView" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}
          <CardLobby children={"Avançar"} Img="/img/AddUser.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Adicionar User" LinkTo="/Provas" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}
          <CardLobby children={"Avançar"} Img="/img/DeleteUser.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Remover User" LinkTo="/Provas" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}
          <CardLobby children={"Avançar"} Img="/img/ModifyUser.png" onClick={() => { localStorage.setItem("SelectionOption", 1) }} Nome="Editar User" LinkTo="/Provas" style={{ height: "80%", width: "100%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }} styleImg={{ height: "100%", width: "100%" }} /> {/* Chamada da function dentro de '../../components/cards/CardLobby/Card_Lobby.js' */}

        </div>
      </div>
    </>
  )
}