import React, { useRef, useState, useEffect } from "react";
import "./Provas_Escolha.css";
import { Link } from "react-router-dom";
import CardLobby from "../../components/cards/CardLobby/Card_Lobby";
import Button_Base from "../../components/Button/Button_Base/Button_Base";

export default function Prova() {
  const divRef = useRef(null);
  const [choice, setChoice] = useState(localStorage.getItem("SelectionOption"));
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const student_id = parseInt(localStorage.getItem('id_student'));

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('http://10.197.12.103:5000/get_student_exams_list_todo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
          }, body: JSON.stringify({ student_id })
        });

        const dataIdUm = await response.json();
        setData(dataIdUm);
        console.log(token)
        console.log(data);
        console.log(data.exam_list.is_finished)

      } catch (error) {
        console.error('Erro na requisição:', error);
        setError('Erro ao conectar com o servidor.');
      }
    }

    getData();
  }, [student_id, token]);

  function getchoice2() {
    setChoice("2");
  }

  function getchoice1() {
    setChoice("1");
  }

  return (
    <>
      <div className="body-provas">
        <div className="navbar-provas">
          <div className="navbar-logo">
            <img src="/img/LoginImage.png" alt="Logo" className="img-nav-logo" />
          </div>
          <div className="menu-provas">
            <span
              onClick={getchoice1}
              className={choice === "1" ? "active" : ""}
            >
              Provas a Fazer
            </span>
            <span
              onClick={getchoice2}
              className={choice === "2" ? "active" : ""}
            >
              Provas Feitas
            </span>
          </div>
          <div className="menu-provas-sair">
            <Link to="/lobby">
              <Button_Base children="Voltar" />
            </Link>
          </div>
        </div>

        <div ref={divRef} className="tela-prova">
          <div
            className="main-content-provas"
            style={{ display: choice === "1" ? "grid" : "none" }}
          >
            {data && data?.exam_list?.filter(exam => exam.is_finished == false).map((exam, index) => (
              <CardLobby
                type={1}
                key={index}
                Img="/img/HistoricoProvas.png"
                Nome={exam.name}
                LinkTo={`/ProvaLobby/${exam.id}`}
                style={{
                  width: "90%",
                  boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px"
                }}
                styleImg={{
                  height: "100%",
                  width: "100%"
                }}
                children={"Vizualizar Prova →"}
              />
            ))}

            {data && data.exam == null && (
              <span>Nenhuma Prova a Fazer...</span>
            )}

          </div>
          <div
            className="main-content-provas"
            style={{ display: choice === "2" ? "grid" : "none" }}
          >
            {data && data?.exam_list?.filter(exam => exam.is_finished == true).map((exam, index) => (
              <CardLobby
                type={1}
                key={index}
                Img="/img/HistoricoProvas.png"
                Nome={exam.name}
                LinkTo={`/ProvaLobby/${exam.id}`}
                style={{
                  width: "90%",
                  boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px"
                }}
                styleImg={{
                  height: "100%",
                  width: "100%"
                }}
                children={"Vizualizar Prova →"}
              />
            ))}

            {data && data.exam == null && (
              <span>Nenhuma Prova Feita...</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}