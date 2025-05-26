import { useState } from 'react';
import './Dashboard.css'
import BarChart from '../../components/BarChart/BarChart';
import LineChart from '../../components/LineChart/LineChart';
import BarChartH from '../../components/BarChartH/BarChartH';

export default function Dashboard() {
    const [selecionadoCurso, setSelecionadoCurso] = useState(false)
    const [selecionadoAluno, setSelecionadoAluno] = useState(false)


    return (
        <>
            <div className='body-dashboard'>
                <div className='header-dashboard'></div>
                <div className='filter-dashboard'>
                    <span className='span-filter-dashboard'>Filtros</span>
                    <div className='grid-filter-dashboard'>
                        <div className='materia-input-dashboard'>
                            <label>Curso</label>
                            <select onChange={(e) => e.target.value == 'Selecione' ? setSelecionadoCurso(false) : setSelecionadoCurso(e.target.value)}>
                                <option>Selecione</option>
                                <option>Engenharia de Software</option>
                                <option>Design</option>
                                <option>Direito</option>
                                <option>Engenharia Civil</option>
                            </select>
                        </div>
                        {selecionadoCurso == 'Engenharia de Software' && (
                            <>
                                <div className='materia-input-dashboard'>
                                    <label>Materia</label>
                                    <select>
                                        <option>Selecione</option>
                                        <option>Desenvolvimento WEB</option>
                                        <option>UX/UI</option>
                                        <option>Data Science</option>
                                        <option>Fundamentos de Programação</option>
                                    </select>
                                </div>

                                <div className='area-input-dashboard'>
                                    <label>Área de conhecimento</label>
                                    <select>
                                        <option>Selecione</option>
                                        <option>Desenvolvimento Web</option>
                                        <option>Engenharia de Requisitos</option>
                                        <option>Arquitetura de Software</option>
                                        <option>Testes de Software</option>
                                        <option>DevOps</option>
                                        <option>Banco de Dados</option>
                                        <option>Engenharia de Software Ágil</option>
                                        <option>Qualidade de Software</option>
                                        <option>Segurança da Informação</option>
                                        <option>Inteligência Artificial Aplicada</option>
                                    </select>
                                </div>

                                <div className='aluno-input-dashboard'>
                                    <label>Aluno</label>
                                    <select onChange={(e) => e.target.value == 'Selecione' ? setSelecionadoAluno(false) : setSelecionadoAluno(e.target.value)}>
                                        <option>Selecione</option>
                                        <option>Felipe</option>
                                        <option>Anderson</option>
                                        <option>João</option>
                                        <option>Lucas</option>
                                        <option>Maria</option>
                                        <option>Carlos</option>
                                        <option>Ana</option>
                                        <option>Bruno</option>
                                        <option>Letícia</option>
                                        <option>Rafael</option>
                                        <option>Camila</option>
                                        <option>Vinícius</option>
                                        <option>Jéssica</option>
                                        <option>Eduardo</option>
                                        <option>Fernanda</option>
                                        <option>Thiago</option>
                                        <option>Patrícia</option>
                                        <option>Gustavo</option>
                                        <option>Larissa</option>
                                        <option>Diego</option>
                                    </select>
                                </div>
                            </>
                        )}
                        {selecionadoCurso === 'Design' && (
                            <>
                                <div className='materia-input-dashboard'>
                                    <label>Matéria</label>
                                    <select>
                                        <option>Selecione</option>
                                        <option>Design Gráfico</option>
                                        <option>História da Arte</option>
                                        <option>Tipografia</option>
                                        <option>Identidade Visual</option>
                                    </select>
                                </div>
                                <div className='area-input-dashboard'>
                                    <label>Área de conhecimento</label>
                                    <select>
                                        <option>Selecione</option>
                                        <option>Comunicação Visual</option>
                                        <option>Estética</option>
                                        <option>Design Digital</option>
                                        <option>Processos Criativos</option>
                                    </select>
                                </div>
                                <div className='aluno-input-dashboard'>
                                    <label>Aluno</label>
                                    <select onChange={(e) => e.target.value == 'Selecione' ? setSelecionadoAluno(false) : setSelecionadoAluno(e.target.value)}>
                                        <option>Selecione</option>
                                        <option>Larissa</option>
                                        <option>Gustavo</option>
                                        <option>Eduardo</option>
                                        <option>Camila</option>
                                        <option>Letícia</option>
                                        <option>Anderson</option>
                                    </select>
                                </div>
                            </>
                        )}
                        {selecionadoCurso === 'Direito' && (
                            <>
                                <div className='materia-input-dashboard'>
                                    <label>Matéria</label>
                                    <select>
                                        <option>Selecione</option>
                                        <option>Direito Constitucional</option>
                                        <option>Direito Penal</option>
                                        <option>Direito Civil</option>
                                        <option>Filosofia do Direito</option>
                                    </select>
                                </div>
                                <div className='area-input-dashboard'>
                                    <label>Área de conhecimento</label>
                                    <select>
                                        <option>Selecione</option>
                                        <option>Leis Fundamentais</option>
                                        <option>Justiça Criminal</option>
                                        <option>Responsabilidade Civil</option>
                                        <option>Teoria Jurídica</option>
                                    </select>
                                </div>
                                <div className='aluno-input-dashboard'>
                                    <label>Aluno</label>
                                    <select onChange={(e) => e.target.value == 'Selecione' ? setSelecionadoAluno(false) : setSelecionadoAluno(e.target.value)}>
                                        <option>Selecione</option>
                                        <option>João</option>
                                        <option>Maria</option>
                                        <option>Vinícius</option>
                                        <option>Bruno</option>
                                        <option>Fernanda</option>
                                        <option>Patrícia</option>
                                    </select>
                                </div>
                            </>
                        )}

                        {selecionadoCurso === 'Engenharia Civil' && (
                            <>
                                <div className='materia-input-dashboard'>
                                    <label>Matéria</label>
                                    <select>
                                        <option>Selecione</option>
                                        <option>Mecânica dos Solos</option>
                                        <option>Estruturas de Concreto</option>
                                        <option>Topografia</option>
                                        <option>Materiais de Construção</option>
                                    </select>
                                </div>
                                <div className='area-input-dashboard'>
                                    <label>Área de conhecimento</label>
                                    <select>
                                        <option>Selecione</option>
                                        <option>Geotecnia</option>
                                        <option>Estruturas</option>
                                        <option>Geometria Aplicada</option>
                                        <option>Tecnologia dos Materiais</option>
                                    </select>
                                </div>
                                <div className='aluno-input-dashboard'>
                                    <label>Aluno</label>
                                    <select onChange={(e) => e.target.value == 'Selecione' ? setSelecionadoAluno(false) : setSelecionadoAluno(e.target.value)}>
                                        <option>Selecione</option>
                                        <option>Diego</option>
                                        <option>Felipe</option>
                                        <option>Jéssica</option>
                                        <option>Thiago</option>
                                        <option>Carlos</option>
                                        <option>Ana</option>
                                    </select>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                {selecionadoCurso && (
                    <>
                        <div className='materia-dashboard'>
                            <BarChart
                                title={["Nota Por Materia"]}
                                labels={['React', 'Java', 'Python', 'C++']}
                                values={[4, 5.5, 7, 3]}
                                colors={['#4ade80', '#60a5fa', '#f472b6', '#facc15']}
                            />
                        </div>
                        <div className='ementa-dashboard'>
                            <BarChartH
                                title="Materias"
                                labels={['Desenvolvimento WEB', 'UX/UI', 'Data Science', 'Fundamentos de Programação']}
                                values={[70, 75, 70, 60]}
                                color="#10b981"
                            />

                        </div>
                        <div className='turma-dashboard'>
                            <BarChart
                                title={["Áreas de conhecimento"]}
                                labels={[
                                    'Desenvolvimento Web',
                                    'Engenharia de Requisitos',
                                    'Arquitetura de Software',
                                    'Testes de Software',
                                    'DevOps',
                                    'Banco de Dados',
                                    'Engenharia de Software Ágil',
                                    'Qualidade de Software',
                                    'Segurança da Informação',
                                    'IA Aplicada'
                                ]}
                                values={[7, 6, 8, 5, 4, 7, 6, 5, 4, 6]}
                                colors={[
                                    '#4ade80', '#60a5fa', '#f472b6', '#facc15', '#a78bfa',
                                    '#34d399', '#f87171', '#fb923c', '#818cf8', '#22d3ee'
                                ]}
                            />
                        </div>
                        {selecionadoAluno && (
                            <div className='aluno-dashboard'>
                                <BarChart
                                    title={`Notas do aluno ${selecionadoAluno}`}
                                    labels={['Desenvolvimento WEB', 'UX/UI', 'Data Science', 'Fundamentos de Programação']}
                                    values={[10, 6, 8, 10]}
                                    colors={['#4ade80', '#60a5fa', '#f472b6', '#facc15']}
                                />
                            </div>
                        )}

                    </>
                )}

            </div>
        </>
    );
}