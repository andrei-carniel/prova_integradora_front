import "./Resultado.css";
import { Link } from "react-router-dom";
import Button_Base from "../../components/Button/Button_Base/Button_Base";

export default function Resultado() {

  const nota_porcentagem = 85;
  const nota_aluno = 34;
  const nota_maxima = 40
  return (
    <>
      <div className="body-resultado">
        <div className="container-resultado">
          <div className="title-resultado">
            <span className="span-resultado-resultado">
              SUA NOTA
            </span>
          </div>
          <div className="notap-resultado">
            <span className="span-notap-resultado">
              {nota_porcentagem}%
            </span>
          </div>
          <div className="notaq-resultado">
            <span className="span-notaq-resultado">
              Você acertou {nota_aluno} de {nota_maxima} questões
            </span>
          </div>
          <div className="sair-resultado">
            <Link to={'/Lobby'}>
              <Button_Base children="Sair" style={{padding: "1rem 5rem"}}/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}