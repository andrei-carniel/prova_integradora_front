import "./Input_Pergunta.css";

export default function InputPergunta({ numQuestao, pergunta, onRespostaChange, perguntaId, respostas, disabled }) {
  return (
    <div className="body-input-pergunta">
      <div className="questao-input-pergunta">
        <span className="num-questao">{numQuestao}.</span>
        <span>{pergunta}</span>
      </div>
      <form className="form-input-pergunta">
        {disabled != true && respostas.map((resposta, index) => (
          <div className="div-options" key={resposta.id}>
            <input
              type="radio"
              name={`pergunta-${perguntaId}`}
              value={resposta.id}
              className="input-radio-input-pergunta"
              onChange={() => onRespostaChange(perguntaId, resposta.id)}
            />

            <label className="label-answer-input-pergunta">
              <div className="index-answer-input-pergunta"> {String.fromCharCode(97 + index)} -</div>
              <div className="answer-input-pergunta"> {resposta.description}</div>
            </label>
          </div>
        ))}

        {disabled && respostas.map((resposta, index) => (
          <div className={`div-options  ${resposta.standard_correct_answer == 1 ? 'correct' : '' || resposta.standard_correct_answer == 0 && resposta.student_answer ? "incorrect" : ''}`} key={resposta.id}>
            <input
              type="radio"
              name={`pergunta-${perguntaId}`}
              value={resposta.id}
              className={"input-radio-input-pergunta"}
              checked={resposta.student_answer == 1}
              disabled
            />
            <label className={"label-answer-input-pergunta"}>
              <div className="index-answer-input-pergunta">{String.fromCharCode(97 + index)} -</div>
              <div className="answer-input-pergunta">{resposta.description}</div>
            </label>
          </div>
        ))}

      </form>
    </div>
  );
}