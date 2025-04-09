import "./inputPergunta.css"

export default function InputPergunta({numQuestao, pergunta, respostaA, respostaB, respostaC, respostaD }){
    return (
        <div className="divDivProvaSimulado">
            <h2>{numQuestao}. {pergunta}</h2>
            <form className="formProvaSimulado">
                <div className='divOptions'>
                    <input type='radio' name='pergunta2'></input>
                    <label>a - {respostaA}</label>
                </div>
                <div className='divOptions'>
                    <input type='radio' name='pergunta2'></input>
                    <label>b - {respostaB}</label>
                </div>
                <div className='divOptions'>
                    <input type='radio' name='pergunta2'></input>
                    <label>c - {respostaC}</label>
                </div>
                <div className='divOptions'>
                    <input type='radio' name='pergunta2'></input>
                    <label>d - {respostaD}</label>
                </div>
            </form>
        </div>
    )
}