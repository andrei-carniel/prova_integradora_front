//Importação de Functions e bibliotecas
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LobbyMain from './componentes/Lobby/Lobby';
import LoginMain from './componentes/Login/Login';
import LobbyProvas from './componentes/Provas_Escolha/Provas_Escolha';
import RecoverPassword from './componentes/Recuperar_Senha/Recuperar_Senha';
import ProvaLobby from './componentes/Prova_Lobby/Prova_Lobby';
import ProvaSimulado from './componentes/Prova_Simulado/Prova_Simulado';
import Resultado from './componentes/Resultado/Resultado';
import AdminPage from './componentes/Admin_Page/Admin_Page';
import ProvaView from './componentes/Prova_View/Prova_View';
import ProvaAddition from './componentes/Prova_Addition/Prova_Addition';
import Dashboard from './componentes/Dashboard/Dashboard';
import Token_Request from './requests/Token/Token_Request';
import ResultadoSimulado from './componentes/Resultado_Lobby/Resultado_Simulado';

export default function App() {
    return (
        //Cria um Router, serve para gerenciar roteamento de requisições HTTP para diversas partes da aplicação
        <Router>
            <main>
                <Routes> 
                    {/* Criação das rotas */}
                    <Route path='' element={<LoginMain />} />
                    <Route path='/Lobby' element={<LobbyMain />} />
                    <Route path='/Provas' element={<LobbyProvas />} />
                    <Route path='/Recover' element={<RecoverPassword />} />
                    <Route path="/ProvaLobby/:examId" element={<ProvaLobby />} />
                    <Route path='/ProvaSimulado/:examId' element={<ProvaSimulado />} />
                    <Route path='/ResultadoSimulado/:examId' element={<ResultadoSimulado />} />
                    <Route path='/Resultado/:examId' element={<Resultado />} />
                    <Route path='/AdminPage' element={<AdminPage />} />
                    <Route path='/ProvaView' element={<ProvaView />} />
                    <Route path='/ProvaAddition' element={<ProvaAddition />} />
                    <Route path='/Dashboard' element={<Dashboard />} />
                    <Route path='/teste' element={<Token_Request />} />
                </Routes>
            </main>
        </Router>
    );
}
