import "./ProvaView.css";
import { Link } from "react-router-dom";
import CardProvaView from "../../components/cards/CardProvaView/cardProvaView";

export default function ProvaView(){
    return(
        <>
            <div className="body-provas-view">
                <div className="divisor-provas-view">
                    <div className="header-provas-view">
                        <div className="sair-header-provas-view">
                            <Link to="../adminPage"><button>
                                🡠ㅤSair
                            </button></Link>
                        </div>
                        <div className="trocar-header-provas-view">
                            <button>
                                Visualizar Provas Antigasㅤ🡢
                            </button>
                        </div>
                        <div className="adicionar-header-provas-view">
                            <Link to="../ProvaAddition"><button>
                                +
                            </button></Link>
                        </div>
                    </div>
                    <div className="main-provas-view">
                            <CardProvaView 
                                Img="/img/HistoricoProvas.png"
                                Nome="Prova do 4° Periodo/2°/2024"
                                LinkTo="/ProvaView"
                            />
                            
                            <CardProvaView 
                                Img="/img/HistoricoProvas.png"
                                Nome="Prova do 4° Periodo/2°/2024"
                                LinkTo="/ProvaView"
                            />
                            
                            <CardProvaView 
                                Img="/img/HistoricoProvas.png"
                                Nome="Prova do 4° Periodo/2°/2024"
                                LinkTo="/ProvaView"
                            />
                            
                            <CardProvaView 
                                Img="/img/HistoricoProvas.png"
                                Nome="Prova do 4° Periodo/2°/2024"
                                LinkTo="/ProvaView"
                            />
                            
                    </div>
                </div>
            </div>
        </>
    )
}