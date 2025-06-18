import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Resultado_Simulado.css';
import InputPergunta from '../../components/inputs/inputPergunta/Input_Pergunta';
import Button_Base from '../../components/Button/Button_Base/Button_Base';


export default function ResultadoSimulado({ examId: propExamId, valid }) {
    const navigate = useNavigate();
    const [tempoRestante, setTempoRestante] = useState(3600);
    const [data, setData] = useState(null);
    const [dataDesable, setDataDesable] = useState(null);
    const { examId: paramExamId } = useParams();
    const examIdNumber = parseInt(propExamId ?? paramExamId);
    const [error, setError] = useState('');
    const [token, setToken] = useState(localStorage.getItem('authToken'));
    const student_id = parseInt(localStorage.getItem('id_student'));
    const [respostas, setRespostas] = useState({});
    const [confirmar, setConfirmar] = useState(false)
    const respostasValidas = Object.values(respostas).filter(r => r !== null && r !== '').length;

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch('http://10.197.12.103:5000/get_student_exams_questions_results', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': token,
                    },
                    body: JSON.stringify({ student_id, exam_id: examIdNumber }),
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

        getData();
    }, [student_id, token, examIdNumber]);

    if (!data) {
        return <div>Carregando dados...</div>;
    }

    const voltar = () => {
        navigate('/')
    }

    return (<>
        <Link to={'/Provas'}><Button_Base children="Voltar" style={{position: "fixed", left: "60px", top: "60px", padding: "2rem 4rem", backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 4px", color: "#780D28"}}/></Link>
        <div className='body-resultado-simulado'>
            <div className='barra-lateral-resultado-simulado'></div>
            <div className='main-resultado-simulado'>
                <div className='limit-main-resultado-simulado'>
                    <div className='img-resultado-simulado'>
                        <img src='/img/LobbyImage.png' alt="Imagem do Lobby" />
                    </div>

                    <span className='span-main-resultado-simulado'>
                        {data.exam_list[0].name.toUpperCase()}
                    </span>

                    <div className='div-divs-main-resultado-simulado'>
                        {data.exam_list && data.exam_list[0].questions.map((question, questionIndex) => (
                            <InputPergunta
                                key={question.id}
                                numQuestao={questionIndex + 1}
                                pergunta={question.description}
                                respostas={question.answer_list}
                                perguntaId={question.id}
                                disabled={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className='barra-lateral-resultado-simulado2'></div>
        </div>
</>
    );
}
