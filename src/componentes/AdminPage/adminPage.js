import CardAdmin from "../../components/cards/CardAdmin/cardAdmin";
import InputAdmin from "../../components/inputs/inputAdmin/inputAdmin";
import "./adminPage.css"
import { Link } from "react-router-dom";

export default function AdminPage(){
    return (
        <>
        <div className="body-admin">
            <div className="tela-main">
                <div className="tela-input">
                    <InputAdmin />
                </div>
                          <div className="main-admin-provas">
                            <div className="main-admin-main-body">
                              <CardAdmin
                                Img="/img/HistoricoProvas.png"
                                Nome="Vizualizar Provas"
                                LinkTo="/ProvaView"
                              />
                              <CardAdmin
                                Img="/img/HistoricoProvas.png"
                                Nome="Vizualizar Provas Antigas"
                                LinkTo="/ProvaView"
                              />
                            </div>
                          </div>
            </div>
            <div className="nav-bar">
                <div className="nav-bar-nome">
                  <span>Eduardo Masquerim</span>
                </div>
                <div className="nav-bar-role">
                  <span>Administrador</span>
                </div>
                <div className="nav-bar-data">
                    <span>25/03/2025</span>
                </div>
                <div className="nav-bar-sair">
                    <Link to="../Lobby"><button>🡠ㅤSair</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}