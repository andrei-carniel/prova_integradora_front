import "./Prova_View.css";
import { Link } from "react-router-dom";
import CardProvaView from "../../components/cards/CardProvaView/Card_Prova_View";
import Button_Base from "../../components/Button/Button_Base/Button_Base";


export default function ProvaView() {
  return (
    <>
      <div className="body-provas-view">
        <div className="header-provas-view">
          <div className="sair-header-provas-view">
            <Link to="../Lobby">
              <Button_Base children={"🡠ㅤVoltar"}/>
            </Link>
          </div>
          <div className="trocar-header-provas-view">
            <Button_Base children={"Vizualizar Provas Antigas"}/>
          </div>
          <div className="addition-prova-view">
            <Button_Base children={"+"}/>
          </div>
        </div>
        <div className="main-provas-view">
          
          <CardProvaView
            Img="/img/HistoricoProvas.png"
            Nome="Provas a Fazer"
            LinkTo="/ProvaView"
          />
          <CardProvaView
            Img="/img/HistoricoProvas.png"
            Nome="Vizualizar Provas Antigas"
            LinkTo="/ProvaView"
          />
          <CardProvaView
            Img="/img/HistoricoProvas.png"
            Nome="Adicionar User"
            LinkTo="/ProvaView"
          />
          <CardProvaView
            Img="/img/HistoricoProvas.png"
            Nome="Remover User"
            LinkTo="/ProvaView"
          />

          <CardProvaView
            Img="/img/HistoricoProvas.png"
            Nome="Editar User"
            LinkTo="/ProvaView"
          />

        </div>
      </div>
    </>
  )
}