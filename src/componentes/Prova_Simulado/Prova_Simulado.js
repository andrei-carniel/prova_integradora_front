import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Prova_Simulado.css';
import InputPergunta from '../../components/inputs/inputPergunta/Input_Pergunta';



export default function ProvaSimulado({ examId: propExamId, valid }) {
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
    const [hour, setHour] = useState(null)

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch('http://10.197.12.103:5000/get_student_exams_questions_todo', {
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

                const examEndFormat = () => {
                    let slicedItens = dataIdUm.exam_list[0].student_end_date.split(' ');
                    return slicedItens;
                };

                const [nameE, dayE, monthE, yearE, hourE, GMTE] = examEndFormat();

                const HourEndFormated = hourE.split(':').slice(0, 2).join(':');
                setHour(HourEndFormated)
            } catch (error) {
                setError('Erro ao conectar com o servidor.');
            }
        }

        getData();
    }, [student_id, token, examIdNumber]);

    useEffect(() => {
        if (!hour) return; // impede erro se hour for null

        const verificarHorario = setInterval(() => {
            const agora = new Date();
            const horaAtualMinutos = agora.getHours() * 60 + agora.getMinutes();

            if (typeof hour === 'string' && hour.includes(':')) {
                const [horaE, minutoE] = hour.split(':').map(Number);
                // const horaFinalMinutos = horaE * 60 + minutoE;
                const horaFinalMinutos = 1009

                if (horaAtualMinutos >= horaFinalMinutos) {
                    clearInterval(verificarHorario);
                    
                }

                console.log(`Atual: ${horaAtualMinutos} | Final: ${horaFinalMinutos}`);
            }
        }, 1000);

        return () => clearInterval(verificarHorario);
    }, [hour]);


    useEffect(() => {
        if (tempoRestante > 0) {
            const timer = setInterval(() => {
                setTempoRestante((prevTempo) => prevTempo - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else {
            finalizarProva();
        }

    }, [tempoRestante]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                navigate(`/ProvaLobby/${examIdNumber}`);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [examIdNumber, navigate]);


    const formatarTempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
    };

    const finalizarProva = async () => {
        const respostasFormatadas = Object.entries(respostas).map(([questionId, answerId]) => ({
            question_id: parseInt(questionId),
            answer_id: parseInt(answerId)
        }));

        try {
            const response = await fetch('http://10.197.12.103:5000/student_exams_finish', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                },
                body: JSON.stringify({
                    student_id,
                    exam_id: examIdNumber,
                    question_list: respostasFormatadas
                })
            });
            if (!response.ok) {
                const errorData = await response.text();
                return;
            }

        } catch (error) {
        }


        navigate(`/Resultado/${examIdNumber}`);
    };

    const handleRespostaChange = (questionId, answer) => {
        setRespostas((prevRespostas) => {
            const jaRespondida = prevRespostas[questionId] !== undefined;
            return {
                ...prevRespostas,
                [questionId]: answer
            };
        });
    };

    if (!data) {
        return <div>Carregando dados...</div>;
    }

    let qtd = 0;

    if (data.exam_list && data.exam_list[0]) {
        qtd = data.exam_list[0].questions.length;
    }
    return (
        <div className='body-prova-simulado'>
            <div className='barra-lateral-provas-simulado'></div>
            <div className='main-prova-simulado'>
                <div className='limit-main-prova-simulado'>
                    <div className='img-prova-simulado'>
                        <img src='/img/LobbyImage.png' alt="Imagem do Lobby" />
                    </div>

                    <span className='span-main-prova-simulado'>
                        {data.exam_list[0].name.toUpperCase()}
                        <h1><strong>Atenção!</strong></h1>
                        <span className='aviso-main-prova-simulado'>Sair da prova resultará na perda de todas as suas respostas.</span>
                    </span>

                    <div className='div-divs-main-prova-simulado'>
                        {data.exam_list && data.exam_list[0].questions.map((question, questionIndex) => (
                            <InputPergunta
                                key={question.id}
                                numQuestao={questionIndex + 1}
                                pergunta={question.description}
                                respostas={question.answer_list}
                                perguntaId={question.id}
                                onRespostaChange={handleRespostaChange}
                            />
                        ))}
                    </div>
                    {valid !== false && (
                        <div className='final-main-prova-simulado'>
                            <button onClick={() => setConfirmar(true)} className='button-final-main-prova-simulado'>
                                Finalizar Prova
                            </button>

                            <div className='timer-prova-simulado'>{formatarTempo(tempoRestante)}</div>
                            <span className="span-final-main-prova-simulado">
                                {respostasValidas}/{qtd}
                            </span>
                        </div>
                    )}


                    {confirmar && (
                        <div className='black-page-prova-simulado'>
                            <div className='white-counteiner-prova-simulado'>
                                <div className='title-counteiner-prova-simulado'>
                                    <span>Confirmação</span>
                                </div>
                                <div className='text-counteiner-prova-simulado'>
                                    <span>Deseja finalizar a prova?</span>
                                    {respostasValidas !== qtd && (
                                        <span><strong>Você não respondeu todas as questões</strong></span>)}
                                </div>
                                <div className='buttons-counteiner-prova-simulado'>
                                    <button onClick={() => setConfirmar(false)}>Cancelar</button>
                                    <button onClick={finalizarProva}>Confirmar</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className='barra-lateral-provas-simulado2'></div>
        </div>

    );
}
