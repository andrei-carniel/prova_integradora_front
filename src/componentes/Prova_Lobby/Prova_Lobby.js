import "./Prova_Lobby.css";
import { useEffect, useState, } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button_Base from "../../components/Button/Button_Base/Button_Base";

export default function ProvaLobby() {
  const navigate = useNavigate();
  const { examId } = useParams();
  const examIdNumber = parseInt(examId);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const student_id = parseInt(localStorage.getItem('id_student'));

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('http://10.197.12.103:5000/get_student_exams_questions_todo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
          },
          body: JSON.stringify({ student_id, exam_id: examIdNumber })
        });

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message || 'Erro ao fazer login.');
          return;
        }

        const dataIdUm = await response.json();
        setData(dataIdUm);

      } catch (error) {
        setError('Erro ao conectar com o servidor.');
      }
    }

    if (student_id) {
      getData();
    }
  }, [student_id, token, examIdNumber]);

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
    setTimeout(() => navigate(`/ProvaSimulado/${examIdNumber}`), 500);
  };




  return (
    <div className="body-prova-lobby">
      <div className="div-header-prova-lobby">
        <div className="div-sair-prova-lobby">
          <Link to={"/Lobby"} className="link-div-sair-prova-lobby">
            <Button_Base children={"Voltar"} />
          </Link>
        </div>
        <div className="div-perfil-prova-lobby">
        </div>
      </div>
      <div className="div-main-prova-lobby">

          <div className="div-central-main-prova-lobby">
            <div className="div-img-main-prova-lobby">
              <img src="/img/LoginImage.png" className="img-main-prova-lobby" alt="Login" />
            </div>
            <div className="div-button-main-prova-lobby">
              <div onClick={() => {
                iniciarProva();
              }}>
                <Button_Base children={"Começar Prova"} style={{ padding: "2rem 3.5rem" }} />
              </div>
            </div>
          </div>
          {data?.exam_list && (
            <div className="div-central-main-prova-tipo">
              <h1>Prova do 2° Semestre</h1>
              <h2>Temas:</h2>
              {[...new Set(
                data.exam_list.flatMap((exam) =>
                  exam.questions.map((q) => q.syllabi_name)
                )
              )].map((syllabi, index) => (
                <span key={index}>{syllabi}</span>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}