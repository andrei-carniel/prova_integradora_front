import "./index.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ProvaLobby() {
    const navigate = useNavigate();

    // Função para ativar o modo fullscreen
    const iniciarProva = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }

        // Espera um pequeno tempo antes de navegar para garantir que o fullscreen ativou
        setTimeout(() => navigate("/ProvaSimulado"), 500);
    };

    return (
        <div className="bodyProvaLobby">
            <div className="divHeaderProvaLobby">
                <div className="divSairProvaLobby">
                    <Link to={'/Lobby'} className="linkDivSairProvaLobby">🡠ㅤVOLTAR</Link>
                </div>
                <div className="divPerfilProvaLobby">
                    <span className="spanPerfilProvaLobby">EDUARDO MASQUERIM</span>
                    <img src="img/LobbyImage.png" className="imgPerfilProvaLobby" alt="Perfil" />
                </div>
            </div>
            <div className="divMainProvaLobby">
                <div className="divCentralMainProvaLobby">
                    <div className="divImgMainProvaLobby">
                        <img src="img/LoginImage.png" className="imgMainProvaLobby" alt="Login" />
                    </div>
                    <div className="divButtonMainProvaLobby">
                        <button onClick={iniciarProva} className="buttonMainProvaLobby">
                            INICIAR PROVAㅤ🡢
                        </button>
                    </div>
                </div>

                <div className="divCentralMainProvaTipo">
                    <h1>Prova do 2° Semestre</h1>
                    <h2>Temas:</h2>
                    <span>REDES DE COMPUTADORES</span>
                    <span>REQUISITOS DE SOFTWARE</span>
                    <span>POO</span>
                    <span>ESTRUTURA DE SOFTWARE</span>
                </div>
            </div>
        </div>
    );
}
