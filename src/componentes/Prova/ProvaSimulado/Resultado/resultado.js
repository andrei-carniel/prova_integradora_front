import "./resultado.css";
import { Link } from "react-router-dom";

export default function Resultado() {
    return (
        <>
            <div className="bodyResultadoProva">
                <div className="divHeaderResultadoProva">
                    <span className="spanHeaderResultadoProva">Eduardo Masquerim</span>
                    <img src="img/LobbyImage.png" className="imgHeaderResultadoProva" />
                </div>
                <div className="divMainResultadoProva">
                    <div className="divMainNomeResultadoProva">
                        <span className="spanMainNomeResultadoProva">NOTA FINAL:</span>
                    </div>
                    <div className="divMainNotaResultadoProva">
                        <span className="spanMainNotaResultadoProva">30%</span>
                    </div>
                </div>
                <div className="divFooterOpResultadoProva">
                    <Link to="../Provas">
                        <button className="buttonFooterSairResultadoProva">🡠ㅤVER PROVAS</button>
                    </Link>
                    <Link to="../Lobby">
                        <button className="buttonFooterSairResultadoProva">VOLTAR LOBBYㅤ🡢</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
