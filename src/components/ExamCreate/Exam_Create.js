import React, { useState } from 'react';
import "./Exam_Create.css"

export default function ExamCreate() {
    const [form, setForm] = useState({
        name: '',
        location: '',
        observation: '',
        is_valid: true,
        student_id_list: '',
        grade: 0.0,
        exam_creation_date: '',
        exam_available_date: '',
        student_start_date: '',
        student_end_date: '',
        period: '',
        course_id: '',
        number_questions_by_syllabi: ''
    });

    const [message, setMessage] = useState('');
    const token = localStorage.getItem('authToken');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const examData = {
            name: form.name,
            location: form.location,
            observation: form.observation,
            is_valid: form.is_valid,
            student_id_list: form.student_id_list.split(',').map(id => parseInt(id.trim())),
            grade: parseFloat(form.grade),
            exam_creation_date: form.exam_creation_date + ':00-03:00',
            exam_available_date: form.exam_available_date + ':00-03:00',
            student_start_date: form.student_start_date + ':00-03:00',
            student_end_date: form.student_end_date + ':00-03:00',
            period: form.period,
            course_id: parseInt(form.course_id),
            number_questions_by_syllabi: parseInt(form.number_questions_by_syllabi)
        };

        try {
            const response = await fetch('http://10.197.12.103:5000/create_exam', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                },
                body: JSON.stringify(examData)
            });

            const result = await response.json();

            if (response.ok) {
                setMessage('Prova criada com sucesso!');
            } else {
                setMessage('Erro: ' + result.message);
            }
        } catch (error) {
            setMessage('Erro ao conectar com o servidor.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='form-exam-create'>
            <div className="nome-prova-exam-create">
                <label>Nome da Prova:</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
            </div>

            <div className="local-exam-create">
                <label>Local (Sala):</label>
                <input type="text" name="location" value={form.location} onChange={handleChange} required />
            </div>

            <div className="obs-exam-create">
                <label>Observações:</label>
                <input type="text" name="observation" value={form.observation} onChange={handleChange} />
            </div>

            <div className="id-student-exam-create">
                <label>ID(s) dos Alunos (separados por vírgula):</label>
                <input type="text" name="student_id_list" value={form.student_id_list} onChange={handleChange} required />
            </div>

            <div className="exam-start-exam-create">
                <label>Início da Prova:</label>
                <div class="datetime-split">
                    <input type="date" name="data" />
                    <input type="time" name="hora" />
                </div>
            </div>

            <div className="exam-end-exam-create">
                <label>Fim da Prova:</label>
                <div class="datetime-split">
                    <input type="date" name="data" />
                    <input type="time" name="hora" />
                </div>
            </div>

            <div className="period-exam-create">
                <label>Período:</label>
                <select>
                    <option>Selecione</option>
                    <option>2025.01</option>
                    <option>2025.02</option>
                </select>
            </div>

            <div className="course-exam-create">
                <label>Nome do Curso:</label>
                <select>
                    <option>
                        Selecione
                    </option>
                    <option>
                        Engenharia de Software
                    </option>
                    <option>
                        Direito
                    </option>
                    <option>
                        Design
                    </option>
                </select>
            </div>

            <div className="number-question-exam-create">
                <label>Quantidade de perguntas por tema:</label>
                <input type="number" name="number_questions_by_syllabi" value={form.number_questions_by_syllabi} onChange={handleChange} required />
            </div>
            <div className='button-exam-create'>
                <button type="submit" >Criar Prova</button>
            </div>
            
        </form>
    );
}
