import "./Admin_Page.css";
import { Link } from "react-router-dom";
import CardAdmin from "../../components/cards/Card_Admin/Card_Admin";
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
          
          <CardAdmin
            Img="/img/HistoricoProvas.png"
            Nome="Provas a Fazer"
            LinkTo="/ProvaView"
          />
          <CardAdmin
            Img="/img/HistoricoProvas.png"
            Nome="Vizualizar Provas Antigas"
            LinkTo="/ProvaView"
          />
          <CardAdmin
            Img="/img/HistoricoProvas.png"
            Nome="Adicionar User"
            LinkTo="/ProvaView"
          />
          <CardAdmin
            Img="/img/HistoricoProvas.png"
            Nome="Remover User"
            LinkTo="/ProvaView"
          />

          <CardAdmin
            Img="/img/HistoricoProvas.png"
            Nome="Editar User"
            LinkTo="/ProvaView"
          />

        </div>
      </div>
    </>
  )
}