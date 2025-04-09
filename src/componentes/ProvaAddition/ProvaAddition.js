import { useState, useEffect  } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./ProvaAddition.css";

export default function ProvaAddition() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalQuestionOpen, setModalQuestionOpen] = useState(false);
    const [materiaOpen, setMateriaOpen] = useState(false);
    const [materias, setMaterias] = useState(["POO", "Redes", "Requisitos", "Estrutura de dados", "Fundamentos"]);
    const [materiasAdicionadas, setMateriasAdicionadas] = useState([]);
    const [materiasSelecionadas, setMateriasSelecionadas] = useState([]);
    const [mostrarBotao, setMostrarBotao] = useState(false);
    const [perguntas, setPerguntas] = useState([]);
    const [respostasSelecionadas, setRespostasSelecionadas] = useState({}); 
    const [criarPergunta, setCriarPergunta] = useState(false)
    const [perguntasAtivas, setPerguntasAtivas] = useState([]); 
    const [provaAmostral, setProvaAmostral] = useState([]);

    function AskCreate(){
         setCriarPergunta(!criarPergunta)
    }

    function PergNum(a = 1){
        a++;
        return "pergunta" + a;
    }
    
    useEffect(() => {
        fetch("/perguntas.json")
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setPerguntas(data);
                    setPerguntasAtivas(data); // Inicialmente, todas as perguntas estão ativas
                } else if (Array.isArray(data.perguntas)) {
                    setPerguntas(data.perguntas);
                    setPerguntasAtivas(data.perguntas);
                } else {
                    console.error("Formato inesperado do JSON:", data);
                    setPerguntas([]);
                    setPerguntasAtivas([]);
                }
            })
            .catch(error => {
                console.error("Erro ao carregar perguntas:", error);
                setPerguntas([]);
                setPerguntasAtivas([]);
            });
    }, []);

    function togglePergunta(pergunta) {
        setPerguntasAtivas((prevAtivas) => {
            if (prevAtivas.some(p => p.pergunta === pergunta.pergunta)) {
                return prevAtivas.filter(p => p.pergunta !== pergunta.pergunta); // Remove a pergunta se já estiver ativa
            } else {
                return [...prevAtivas, pergunta]; // Adiciona de volta se estiver desativada
            }
        });
    }

    function ButtonQuestionOpen(){
        setModalQuestionOpen(!modalQuestionOpen);
    }

    function ButtonClick() {
        setModalOpen(!modalOpen);
    }

    function OpenButton() {
        setMateriaOpen(!materiaOpen);
    }

    function AdicionarMateria(materia) {
        setMaterias(materias.filter((m) => m !== materia)); 
        setMateriasAdicionadas([...materiasAdicionadas, materia]);
        setMateriasSelecionadas([...materiasSelecionadas, materia]);
    }

    function RemoverMateria(materia) {
        setMateriasAdicionadas(materiasAdicionadas.filter((m) => m !== materia)); 
        setMateriasSelecionadas(materiasSelecionadas.filter((m) => m !== materia)); 
        setMaterias([...materias, materia]); 
    }

    function AplicarMaterias() {
        if (materiasSelecionadas.length > 0) {
            setMostrarBotao(true);
        } else {
            setMostrarBotao(false);
        }
        setModalOpen(false);
    }

    function handleRespostaChange(perguntaIndex, respostaIndex, event) { 
        setRespostasSelecionadas({
            ...respostasSelecionadas,
            [perguntaIndex]: respostaIndex,
        });
    }

    function gerarProvaAmostral() {
        if (perguntasAtivas.length === 0) {
            alert("Nenhuma pergunta ativa selecionada!");
            return;
        }
    
        const perguntasAleatorias = [...perguntasAtivas] // Agora pega apenas perguntas ativas
            .sort(() => Math.random() - 0.5) // Embaralha as perguntas
            .slice(0, 10); // Pega no máximo 10
    
        setProvaAmostral(perguntasAleatorias);
        setModalQuestionOpen(false); // Fecha o modal
    }

    return (
        <div className="body-prova-addition">
            <div className="left-body-prova-addition">
                <div className="container-prova-addition">
                    <div className="sair-prova-addition">
                        <Link to={"../ProvaView"}><button>🡠ㅤSair</button></Link> 
                    </div>
                    <div className="info-prova-addition">
                        <div className="info-details-prova-addition">
                            <span>Nome da Prova</span>
                            <span>Duração(minutos)</span>
                            <span>Data de Aplicação</span>
                            <span>Metade do ano</span>
                        </div>
                        <div className="info-details-prova-addition">
                            <input placeholder="Ex: Prova do 6° semestre"></input>
                            <input type="number" placeholder="Ex: 90"></input>
                            <input type="date"></input>
                            <select className="inputSelect">
                                <option value={"1°"}>1°</option>
                                <option value={"2°"}>2°</option>
                            </select>
                        </div>
                    </div>
                    <div className="materias-prova-addition">
                        <div className="limitarMateriasProvaAddition">
                        {materiasAdicionadas.map((materia) => (
                            <button className="buttonSelectDelete" onClick={() => RemoverMateria(materia)} key={materia}>
                                {materia}
                            </button>
                        ))}
                        <button className="adicionarMateriasProvaAddition" onClick={ButtonClick}>Adicionar</button>
                        </div>
                    </div>
                    <div className="concluir-prova-addition">
                        <Link>
                            <button>Concluirㅤ🡢</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="right-body-prova-addition">
                <div className="prova-right-side-prova-addition">
                    <div className="Logo-catolica-right-side"><img src="/img/LobbyImage.png"></img></div>
                    {mostrarBotao && (
                        <div className="questao-right-side">
                            <button onClick={ButtonQuestionOpen} className="botao-lateral-direito">+</button>
                        </div>
                    )}
                    {provaAmostral.length > 0 && (
                        <div className="containerMidModalProvaAmostral">
                            {provaAmostral.map((pergunta, perguntaIndex) => (
                                <div
                                    key={pergunta.pergunta}
                                    className={`pergunta-item ${perguntasAtivas.some(p => p.pergunta === pergunta.pergunta) ? "pergunta-ativa" : "pergunta-inativa"}`}
                                >
                                    <div className="titleQuestionModal">
                                        <span>{pergunta.pergunta}</span>
                                    </div>
                                    <form>
                                        <div className="containerQuestionModal">
                                            {pergunta.respostas.map((resposta, respostaIndex) => (
                                                <div className="responseQuestionModal" key={`${perguntaIndex}-${respostaIndex}`}>
                                                    <input
                                                        disabled
                                                        type="radio"
                                                        name={`pergunta-${perguntaIndex}`}
                                                        value={respostaIndex}
                                                        checked={respostasSelecionadas[perguntaIndex] === respostaIndex}
                                                        onChange={(event) => handleRespostaChange(perguntaIndex, respostaIndex, event)}
                                                    />
                                                    <label>{resposta.texto}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </form>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            
            {modalOpen && (
                <div className="overlay">
                    <div className="modal">
                        <div className="top-modal">
                            <button onClick={AplicarMaterias}>X</button>
                        </div>
                        <div className="mid-modal">
                            <div className="left-mid-modal">
                                <div className="materias-mid-modal">
                                    <div className="add-materia-mid-modal">MATERIAS A ADICIONAR</div>
                                    <div className="limitador-mid-modal">
                                        <div>
                                            <button onClick={OpenButton}>
                                                Engenharia de Software {materiaOpen ? "▲" : "▼"}
                                            </button>
                                            {materiaOpen && (
                                                <div className="materias-open-modal">
                                                    {materias.map((materia) => (
                                                        <button key={materia} onClick={() => AdicionarMateria(materia)}>
                                                            {materia}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <span>Clique na matéria para adicionar</span>
                            </div>

                            <div className="right-mid-modal">
                                <div className="materias-mid-modal">
                                    <div className="add-materia-mid-modal">MATERIAS SELECIONADAS</div>
                                    <div className="div-add-materia-mid-modal">
                                        {materiasAdicionadas.map((materia) => (
                                            <button key={materia} onClick={() => RemoverMateria(materia)}>
                                                {materia} 
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <span>Clique na matéria para remover</span>
                            </div>
                        </div>
                        <div className="bottom-modal">
                            <button onClick={AplicarMaterias}>Aplicarㅤ🡢</button>
                        </div>
                    </div>
                </div>
            )}

{modalQuestionOpen && (
                <div className="overlay">
                    <div className="modalQuestion">
                        <div className="gridModal">
                            <div className="topModalQuestion">
                                <div className="complete">
                                    <button onClick={ButtonQuestionOpen}>X</button>
                                </div>
                                <span>Clique em uma questão para desativá-la. Apenas as questões ativas serão escolhidas na prova.</span>
                            </div>
                            <div className="containerMidModalQuestion">
                                <div className="buttonCriarPergunta">
                                    <button onClick={AskCreate}>Criar pergunta</button>
                                </div>
                                {criarPergunta && (
                                    <div className="pergunta-item">
                                        <div className="titleQuestionModal">
                                            <div className="responseQuestionModal">
                                                <input type="radio" disabled />
                                                <input className="inputPergunta" placeholder="Pergunta..." />
                                            </div>
                                        </div>
                                        <form>
                                            <div className="containerQuestionModal">
                                                <div className="respostasCriarPergunta">
                                                    <div className="responseQuestionModal">
                                                        <input type="radio" name="novaPergunta" disabled />
                                                        <input className="inputResposta" placeholder="Resposta correta..." />
                                                    </div>
                                                    <div className="responseQuestionModal">
                                                        <input type="radio" disabled />
                                                        <input className="inputResposta" placeholder="Resposta errada..." />
                                                    </div>
                                                    <div className="responseQuestionModal">
                                                        <input type="radio" disabled />
                                                        <input className="inputResposta" placeholder="Resposta errada..." />
                                                    </div>
                                                    <div className="responseQuestionModal">
                                                        <input type="radio" disabled />
                                                        <input className="inputResposta" placeholder="Resposta errada..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                )}

                                {perguntas.length > 0 ? (
                                    perguntas.map((pergunta, perguntaIndex) => (
                                        <div
                                            key={pergunta.pergunta}
                                            className={`pergunta-item ${perguntasAtivas.some(p => p.pergunta === pergunta.pergunta) ? "pergunta-ativa" : "pergunta-inativa"}`}
                                            onClick={() => togglePergunta(pergunta)}
                                        >
                                            <div className="titleQuestionModal">
                                                <span>{pergunta.pergunta}</span>
                                            </div>
                                            <form>
                                                <div className="containerQuestionModal">
                                                    {pergunta.respostas.map((resposta, respostaIndex) => (
                                                        <div className="responseQuestionModal" key={`${perguntaIndex}-${respostaIndex}`}>
                                                            <input
                                                                disabled
                                                                type="radio"
                                                                name={`pergunta-${perguntaIndex}`}
                                                                value={respostaIndex}
                                                                checked={respostasSelecionadas[perguntaIndex] === respostaIndex}
                                                                onChange={(event) => handleRespostaChange(perguntaIndex, respostaIndex, event)}
                                                            />
                                                            <label>{resposta.texto}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </form>
                                        </div>
                                    ))
                                ) : (
                                    <span>Carregando perguntas...</span>
                                )}
                            </div>
                            <button className="confirmButtonModal" onClick={gerarProvaAmostral}>Concluir</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
