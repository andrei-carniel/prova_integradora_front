import "./main.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVariavelGlobal } from "../../VariavelGlobal";

let name = "EDUARDO MASQUERIM";
let nameLower = name.toLowerCase();

function LobbyMain() {
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

  if (dominio === "catolicasc.org.br") {
    return (
      <div>
        {/* ... (seu código JSX para catolicasc.org.br) ... */}
        <div className="divHeaderLobby">
          <div className="divHeaderLobbyLogo">
            <img src="/img/LobbyImage.png" className="lobbyImage" alt="CatolicaLogo" />
          </div>
          <div className="divSpanHeaderLobbyTitle">
            <span className="spanLobby">Seja Bem Vindo, {nameLower}...</span>
          </div>
          <div className="divHeaderIcon">
            <Link to={"../"}>
              <span className="spanHeaderIcon">🡠ㅤDeslogar</span>
            </Link>

            <Link to={"../adminPage"}>
              <span className="spanHeaderIcon">AdminPageㅤ🡢</span>
            </Link>
          </div>
        </div>
        <div className="divMainLobby">
          <div className="divDivMainLobby">
            <div className="divLobbyTable">
              <table>
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Nome</th>
                    <th>Semestre</th>
                    <th>Nota</th>
                  </tr>
                </thead>
                <tr>
                  <td>1°</td>
                  <td>Ana</td>
                  <td>7°</td>
                  <td>30/30</td>
                </tr>
                <tr>
                  <td>1°</td>
                  <td>Eduardo</td>
                  <td>3°</td>
                  <td>30/30</td>
                </tr>
                <tr>
                  <td>1°</td>
                  <td>Isabella</td>
                  <td>5°</td>
                  <td>30/30</td>
                </tr>
                <tr>
                  <td>4°</td>
                  <td>Helena</td>
                  <td>4°</td>
                  <td>29/30</td>
                </tr>
                <tr>
                  <td>4°</td>
                  <td>Andrei</td>
                  <td>1°</td>
                  <td>29/30</td>
                </tr>
                <tr>
                  <td>4°</td>
                  <td>Edson</td>
                  <td>2°</td>
                  <td>29/30</td>
                </tr>
                <tr>
                  <td>4°</td>
                  <td>João</td>
                  <td>1°</td>
                  <td>29/30</td>
                </tr>
                <tr>
                  <td>4°</td>
                  <td>Maria</td>
                  <td>7°</td>
                  <td>29/30</td>
                </tr>
                <tr>
                  <td>9°</td>
                  <td>Miguel</td>
                  <td>8°</td>
                  <td>28/30</td>
                </tr>
                <tr>
                  <td>9°</td>
                  <td>Luiz</td>
                  <td>5°</td>
                  <td>28/30</td>
                </tr>
              </table>
            </div>
            <div className="divLobbyPages">
              <div className="divDivLobbyPages">
                <Link to={"/Provas"}>
                  <div className="divSpanLobbyPage">
                    <span>Provas a Fazer</span>
                  </div>
                  <div className="divImgLobbyPage">
                    <img className="img" src="/img/ProvasFazer.png" alt="Provas a Fazer" />
                  </div>
                </Link>
              </div>
              <div className="divDivLobbyPages">
                <Link to={"/Provas"}>
                  <div className="divSpanLobbyPage">
                    <span>Histórico de Provas</span>
                  </div>
                  <div className="divImgLobbyPage">
                    <img className="img" src="/img/HistoricoProvas.png" alt="Histórico de Provas" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (dominio === "catolicasc.edu.br") {
    return (
      <div>
        {/* ... (seu código JSX para catolicasc.edu.br) ... */}
        <div className="divHeaderLobby">
          <div className="divHeaderLobbyLogo">
            <img src="/img/LobbyImage.png" className="lobbyImage" alt="CatolicaLogo" />
          </div>
          <div className="divSpanHeaderLobbyTitle">
            <span className="spanLobby">Seja Bem Vindo, {nameLower}...</span>
          </div>
          <div className="divHeaderIcon">
            <Link to={"../"}>
              <span className="spanHeaderIcon">🡠ㅤDeslogar</span>
            </Link>
          </div>
        </div>
        <div className="divMainLobby">
          <div className="divDivMainLobby">
            <div className="divLobbyTable">
              <table>
                <thead>
                  <tr>
                    <th>N°</th>
                    <th>Nome</th>
                    <th>Semestre</th>
                    <th>Nota</th>
                  </tr>
                </thead>
                <tr>
                  <td>1°</td>
                  <td>Ana</td>
                  <td>7°</td>
                  <td>30/30</td>
                </tr>
                <tr>
                  <td>1°</td>
                  <td>Eduardo</td>
                  <td>3°</td>
                  <td>30/30</td>
                </tr>
                <tr>
                  <td>1°</td>
                  <td>Isabella</td>
                  <td>5°</td>
                  <td>30/30</td>
                </tr>
                <tr>
                  <td>4°</td>
                  <td>Helena</td>
                  <td>4°</td>
                  <td>29/30</td>
                </tr>
                <tr>
                  <td>4°</td>
                  <td>Andrei</td>
                  <td>1°</td>
                  <td>29/30</td>
                </tr>
                <tr>
                  <td>4°</td>
                  <td>Edson</td>
                  <td>2°</td>
                  <td>29/30</td>
                </tr>
                <tr>
                  <td>4°</td>
                  <td>João</td>
                  <td>1°</td>
                  <td>29/30</td>
                </tr>
                <tr>
                  <td>4°</td>
                  <td>Maria</td>
                  <td>7°</td>
                  <td>29/30</td>
                </tr>
                <tr>
                  <td>9°</td>
                  <td>Miguel</td>
                  <td>8°</td>
                  <td>28/30</td>
                </tr>
                <tr>
                  <td>9°</td>
                  <td>Luiz</td>
                  <td>5°</td>
                  <td>28/30</td>
                </tr>
              </table>
            </div>
            <div className="divLobbyPages">
              <div className="divDivLobbyPages">
                <Link to={"/Provas"}>
                  <div className="divSpanLobbyPage">
                    <span>Provas a Fazer</span>
                  </div>
                  <div className="divImgLobbyPage">
                    <img className="img" src="/img/ProvasFazer.png" alt="Provas a Fazer" />
                  </div>
                </Link>
              </div>
              <div className="divDivLobbyPages">
                <Link to={"/Provas"}>
                  <div className="divSpanLobbyPage">
                    <span>Histórico de Provas</span>
                  </div>
                  <div className="divImgLobbyPage">
                    <img className="img" src="/img/HistoricoProvas.png" alt="Histórico de Provas" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return(<>
    <div className="main-content-3op">
      <div>
        Domínio de email desconhecido.
      </div>
      <Link to="../"><button className="botao-retornar">🡠ㅤRetornar para o login </button></Link>
    </div>
    </> );
  }
}

export default LobbyMain;