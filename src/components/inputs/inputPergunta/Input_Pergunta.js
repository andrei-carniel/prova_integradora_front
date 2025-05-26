import "./Input_Pergunta.css";

export default function InputPergunta({   numQuestao, pergunta, onRespostaChange, perguntaId, respostas }) {
  return (
    <div className="body-input-pergunta">
      <div className="questao-input-pergunta">
        <span className="num-questao">{numQuestao}.</span>
        <span>{pergunta}</span>
      </div>
      <form className="form-input-pergunta">
        {respostas.map((resposta, index) => (
          <div className="div-options" key={resposta.id}>
            <input
              type="radio"
              name={`pergunta-${perguntaId}`}
              value={resposta.id}
              className="input-radio-input-pergunta"
              onChange={() => onRespostaChange(perguntaId, resposta.id)}
            />
            <label>{String.fromCharCode(97 + index)} - {resposta.description}</label>
          </div>
        ))}
      </form>
    </div>
  );
}