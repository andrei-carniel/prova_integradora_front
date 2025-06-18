import React, { useRef, useState, useEffect } from "react";
import "./Provas_Escolha.css";
import { Link } from "react-router-dom";
import CardLobby from "../../components/cards/CardLobby/Card_Lobby";
import Button_Base from "../../components/Button/Button_Base/Button_Base";
import { split } from "postcss/lib/list";

export default function Prova() {
  const divRef = useRef(null);
  const [choice, setChoice] = useState(localStorage.getItem("SelectionOption"));
  const [data, setData] = useState(null);
  const [dataProva, setDataProva] = useState(null);
  const [hourProvaComeco, setHourProvaComeco] = useState(null);
  const [hourProvaFim, setHourProvaFim] = useState(null);
  const [dataResult, setDataResult] = useState(null);
  const [error, setError] = useState('');
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const student_id = parseInt(localStorage.getItem('id_student'));

  const monthMap = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  };

  async function getDataResult() {
    try {
      const response = await fetch('http://10.197.12.103:5000/get_student_exams_list_results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        }, body: JSON.stringify({ student_id })
      });

      const dataIdResult = await response.json();
      setDataResult(dataIdResult);
      if (dataIdResult) {
        const examBeginFormat = () => {
          let slicedItens = dataIdResult.exam_list[0].student_start_date.split(' ');
          return slicedItens;
        };

        const examEndFormat = () => {
          let slicedItens = dataIdResult.exam_list[0].student_end_date.split(' ');
          return slicedItens;
        };

        const [nameB, dayB, monthB, yearB, hourB, GMTB] = examBeginFormat();
        const [nameE, dayE, monthE, yearE, hourE, GMTE] = examEndFormat();

        const dataFormated = `${dayB}/${monthMap[monthB]}/${yearB}`
        const HourBeginFormated = hourB.split(':').slice(0, 2).join(':'); // "10:00:00" → "10:00"
        const HourEndFormated = hourE.split(':').slice(0, 2).join(':');

        // Agora você pode definir os dados de início e fim com os valores corretos
        setDataProva(dataFormated); // Supondo que isso seja o que deseja
        setHourProvaComeco(HourBeginFormated);    // Ou substitua conforme necessário
        setHourProvaFim(HourEndFormated);    // Ou substitua conforme necessário

      }
    } catch (error) {
      setError('Erro ao conectar com o servidor.');
    }
  }

  async function getDataTodo() {
    try {
      const response = await fetch('http://10.197.12.103:5000/get_student_exams_list_todo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': token
        },
        body: JSON.stringify({ student_id })
      });

      const dataIdTodo = await response.json();
      setData(dataIdTodo);

      // Validação de estrutura antes de acessar a propriedade
      if (dataIdTodo) {
        const examBeginFormat = () => {
          let slicedItens = dataIdTodo.exam_list[0].student_start_date.split(' ');
          return slicedItens;
        };

        const examEndFormat = () => {
          let slicedItens = dataIdTodo.exam_list[0].student_end_date.split(' ');
          return slicedItens;
        };

        const [nameB, dayB, monthB, yearB, hourB, GMTB] = examBeginFormat();
        const [nameE, dayE, monthE, yearE, hourE, GMTE] = examEndFormat();

        const dataFormated = `${dayB}/${monthMap[monthB]}/${yearB}`
        const HourBeginFormated = hourB.split(':').slice(0, 2).join(':'); // "10:00:00" → "10:00"
        const HourEndFormated = hourE.split(':').slice(0, 2).join(':');

        // Agora você pode definir os dados de início e fim com os valores corretos
        setDataProva(dataFormated); // Supondo que isso seja o que deseja
        setHourProvaComeco(HourBeginFormated);    // Ou substitua conforme necessário
        setHourProvaFim(HourEndFormated);    // Ou substitua conforme necessário


      }

    } catch (error) {
      setError('Erro ao conectar com o servidor.');
    }
  }


  useEffect(() => {
    getDataResult();
    getDataTodo();
  }, [student_id, token]);

  function getchoice2() {
    setChoice("2");
    localStorage.setItem("SelectionOption", 2)
  }

  function getchoice1() {
    setChoice("1");
    localStorage.setItem("SelectionOption", 1)
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
            {data?.exam_list?.length > 0 ? (
              data.exam_list.map((exam, index) => {
                const formatDateTime = (str) => {
                  const date = new Date(str);
                  date.setHours(date.getHours() + 3);
                  const dia = String(date.getDate()).padStart(2, "0");
                  const mes = String(date.getMonth() + 1).padStart(2, "0");
                  const ano = date.getFullYear();
                  const hora = String(date.getHours()).padStart(2, "0");
                  const minuto = String(date.getMinutes()).padStart(2, "0");
                  return {
                    data: `${dia}/${mes}/${ano}`,
                    hora: `${hora}:${minuto}`,
                  };
                };

                const inicio = formatDateTime(exam.student_start_date);
                const fim = formatDateTime(exam.student_end_date);

                return (
                  <CardLobby
                    key={index}
                    type={1}
                    Img="/img/HistoricoProvas.png"
                    Nome={exam.name}
                    LinkTo={`/ProvaLobby/${exam.id}`}
                    data={inicio.data}
                    horaInicio={inicio.hora}
                    horaFim={fim.hora}
                    style={{ height: "70%", width: "90%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }}
                    styleImg={{ height: "100%", width: "100%" }}
                    children={"Vizualizar Prova →"}
                  />
                );
              })
            ) : (
              <span>Nenhuma Prova a Fazer...</span>
            )}
          </div>

          <div
            className="main-content-provas"
            style={{ display: choice === "2" ? "grid" : "none" }}
          >
            {dataResult?.exam_list?.length > 0 ? (
              dataResult.exam_list.map((exam, index) => {
                const formatDateTime = (str) => {
                  const date = new Date(str);
                  date.setHours(date.getHours() + 3);
                  const dia = String(date.getDate()).padStart(2, "0");
                  const mes = String(date.getMonth() + 1).padStart(2, "0");
                  const ano = date.getFullYear();
                  const hora = String(date.getHours()).padStart(2, "0");
                  const minuto = String(date.getMinutes()).padStart(2, "0");
                  return {
                    data: `${dia}/${mes}/${ano}`,
                    hora: `${hora}:${minuto}`,
                  };
                };

                const inicio = formatDateTime(exam.student_start_date);
                const fim = formatDateTime(exam.student_end_date);

                return (
                  <CardLobby
                    key={index}
                    type={1}
                    Img="/img/HistoricoProvas.png"
                    Nome={exam.name}
                    LinkTo={`/ResultadoSimulado/${exam.id}`}
                    data={inicio.data}
                    horaInicio={inicio.hora}
                    horaFim={fim.hora}
                    style={{ height: "70%", width: "90%", boxShadow: "rgba(0,0,0,0.25) 0px 0px 8px" }}
                    styleImg={{ height: "100%", width: "100%" }}
                    children={"Visualizar Resultado  →"}
                  />
                );
              })
            ) : (
              <span>Nenhuma Prova a Fazer...</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}