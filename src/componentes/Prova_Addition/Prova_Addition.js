import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Prova_Addition.css";

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
  const [criarPergunta, setCriarPergunta] = useState(false);
  const [perguntasAtivas, setPerguntasAtivas] = useState([]);
  const [provaAmostral, setProvaAmostral] = useState([]);

  function AskCreate() {
    setCriarPergunta(!criarPergunta);
  }

  useEffect(() => {
    fetch("/perguntas.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPerguntas(data);
          setPerguntasAtivas(data);
        } else if (Array.isArray(data.perguntas)) {
          setPerguntas(data.perguntas);
          setPerguntasAtivas(data.perguntas);
        } else {
          console.error("Formato inesperado do JSON:", data);
          setPerguntas([]);
          setPerguntasAtivas([]);
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar perguntas:", error);
        setPerguntas([]);
        setPerguntasAtivas([]);
      });
  }, []);

  function togglePergunta(pergunta) {
    setPerguntasAtivas((prevAtivas) => {
      if (prevAtivas.some((p) => p.pergunta === pergunta.pergunta)) {
        return prevAtivas.filter((p) => p.pergunta !== pergunta.pergunta);
      } else {
        return [...prevAtivas, pergunta];
      }
    });
  }

  function ButtonQuestionOpen() {
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

    const perguntasAleatorias = [...perguntasAtivas]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    setProvaAmostral(perguntasAleatorias);
    setModalQuestionOpen(false);
  }

  return (
    <div className="body-prova-addition">
      <div className="left-body-prova-addition">
        <div className="container-prova-addition">
          <div className="sair-prova-addition">
            <Link to={"../ProvaView"}>
              <button>🡠ㅤSair</button>
            </Link>
          </div>
          <div className="info-prova-addition">
            <div className="info-details-prova-addition">
              <span>Nome da Prova</span>
              <span>Duração(minutos)</span>
              <span>Data de Aplicação</span>
              <span>Metade do ano</span>
            </div>
            <div className="info-details-prova-addition">
              <input placeholder="Ex: Prova do 6° semestre" />
              <input type="number" placeholder="Ex: 90" />
              <input type="date" />
              <select className="input-select">
                <option value={"1°"}>1°</option>
                <option value={"2°"}>2°</option>
              </select>
            </div>
          </div>
          <div className="materias-prova-addition">
            <div className="limitar-materias-prova-addition">
              {materiasAdicionadas.map((materia) => (
                <button className="button-select-delete" onClick={() => RemoverMateria(materia)} key={materia}>
                  {materia}
                </button>
              ))}
              <button className="adicionar-materias-prova-addition" onClick={ButtonClick}>
                Adicionar
              </button>
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
          <div className="logo-catolica-right-side">
            <img src="/img/LobbyImage.png" alt="Logo Católica" />
          </div>
          {mostrarBotao && (
            <div className="questao-right-side">
              <button onClick={ButtonQuestionOpen} className="botao-lateral-direito">
                +
              </button>
            </div>
          )}
          {provaAmostral.length > 0 && (
            <div className="container-mid-modal-prova-amostral">
              {provaAmostral.map((pergunta, perguntaIndex) => (
                <div
                  key={pergunta.pergunta}
                  className={`pergunta-item ${
                    perguntasAtivas.some((p) => p.pergunta === pergunta.pergunta) ? "pergunta-ativa" : "pergunta-inativa"
                  }`}
                >
                  <div className="title-question-modal">
                    <span>{pergunta.pergunta}</span>
                  </div>
                  <form>
                    <div className="container-question-modal">
                      {pergunta.respostas.map((resposta, respostaIndex) => (
                        <div className="response-question-modal" key={`${perguntaIndex}-${respostaIndex}`}>
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
          <div className="modal-question">
            <div className="grid-modal">
              <div className="top-modal-question">
                <div className="complete">
                  <button onClick={ButtonQuestionOpen}>X</button>
                </div>
                <span>Clique em uma questão para desativá-la. Apenas as questões ativas serão escolhidas na prova.</span>
              </div>
              <div className="container-mid-modal-question">
                <div className="button-criar-pergunta">
                  <button onClick={AskCreate}>Criar pergunta</button>
                </div>
                {criarPergunta && (
                  <div className="pergunta-item">
                    <div className="title-question-modal">
                      <div className="response-question-modal">
                        <input type="radio" disabled />
                        <input className="input-pergunta" placeholder="Pergunta..." />
                      </div>
                    </div>
                    <form>
                      <div className="container-question-modal">
                        <div className="respostas-criar-pergunta">
                          <div className="response-question-modal">
                            <input type="radio" name="novaPergunta" disabled />
                            <input className="input-resposta" placeholder="Resposta correta..." />
                          </div>
                          <div className="response-question-modal">
                            <input type="radio" disabled />
                            <input className="input-resposta" placeholder="Resposta errada..." />
                          </div>
                          <div className="response-question-modal">
                            <input type="radio" disabled />
                            <input className="input-resposta" placeholder="Resposta errada..." />
                          </div>
                          <div className="response-question-modal">
                            <input type="radio" disabled />
                            <input className="input-resposta" placeholder="Resposta errada..." />
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
                      className={`pergunta-item ${
                        perguntasAtivas.some((p) => p.pergunta === pergunta.pergunta) ? "pergunta-ativa" : "pergunta-inativa"
                      }`}
                      onClick={() => togglePergunta(pergunta)}
                    >
                      <div className="title-question-modal">
                        <span>{pergunta.pergunta}</span>
                      </div>
                      <form>
                        <div className="container-question-modal">
                          {pergunta.respostas.map((resposta, respostaIndex) => (
                            <div className="response-question-modal" key={`${perguntaIndex}-${respostaIndex}`}>
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
              <button className="confirm-button-modal" onClick={gerarProvaAmostral}>
                Concluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}