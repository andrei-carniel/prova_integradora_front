import './Tabela.css'
import alunosData from './Alunos/Alunos.json';

export default function Tabela(){
const alunosOrdenados = alunosData.alunos.sort((a, b) => Number(b.Pontuação) - Number(a.Pontuação));

    return(
        <div className='body-tabela'>
            <div className='nome-tabela'>
                <span>
                    Ranking Geral
                </span>
            </div>
            <div className='lista-tabela'>
                <div className="elementos-tabela-amostral">
                    <div className="div-elementos-tabela">#</div>
                    <div className="div-elementos-tabela">Nome</div>
                    <div className="div-elementos-tabela">Matrícula</div>
                    <div className="div-elementos-tabela">Pontuação (%)</div>
                </div>
                {alunosOrdenados.map((aluno, index) => (
                    <div className="elementos-tabela">
                        <div className="div-elementos-tabela">{index + 1}</div>
                        <div className="div-elementos-tabela">{aluno.Nome}</div>
                        <div className="div-elementos-tabela">{aluno.Matricula}</div>
                        <div className="div-elementos-tabela">{aluno.Pontuação}%</div>
                    </div>
                ))}
            </div>
        </div>
    )
}