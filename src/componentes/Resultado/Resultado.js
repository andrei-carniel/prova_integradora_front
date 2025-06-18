import "./Resultado.css";
import { Link, useParams } from "react-router-dom";
import Button_Base from "../../components/Button/Button_Base/Button_Base";
import { useEffect, useState } from "react";

export default function Resultado() {
  const { examId } = useParams();
  const examIdNumber = parseInt(examId);
  const student_id = parseInt(localStorage.getItem('id_student'));
  const [token, setToken] = useState(localStorage.getItem('authToken'));
  const [grade, setGrade] = useState(null)
  const [questionsLength, setQuestionsLength] = useState(null)
  const [correctQuestions, setCorrectQuestions] = useState(null)
  

  useEffect(() => {
    async function getResultado() {
      try {
        const response = await fetch('http://10.197.12.103:5000/get_student_exams_questions_results', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
          }, body: JSON.stringify({ student_id, exam_id: examIdNumber })
        })

        const dataResult = await response.json();
        const getGrade = dataResult.exam_list[0].grade;
        const questions = dataResult.exam_list[0].questions;
        const questionslength = dataResult.exam_list[0].questions.length;
        const correctAnswers = questions.filter(question => {
          return question.answer_list.some(
            answer => answer.student_answer === 1 && answer.standard_correct_answer === 1
          );
        }).length;

        setGrade(getGrade);
        setCorrectQuestions(correctAnswers)
        setQuestionsLength(questionslength)
      } catch (e) {
      }
    }

    getResultado();
  }, [student_id, examIdNumber, token]);;

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
              {grade}%
            </span>
          </div>
          <div className="notaq-resultado">
            <span className="span-notaq-resultado">
              Você acertou {correctQuestions} de {questionsLength} questões
            </span>
          </div>
          <div className="sair-resultado">
            <Link to={'/Lobby'}>
              <Button_Base children="Voltar" style={{ padding: "1rem 5rem" }} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}