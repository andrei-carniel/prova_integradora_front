import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LobbyMain from './componentes/Lobby/main';
import LoginMain from './componentes/Login/main';
import LobbyProvas from './componentes/Lobby/Provas/LobbyProvas';
import Forgot from './componentes/Login/EsqueciSenha/esqueciSenha';
import RecoverPassword from './componentes/Login/RecuperarSenha/recuperarSenha';
import ProvaLobby from './componentes/Prova';
import ProvaSimulado from './componentes/Prova/ProvaSimulado/provaSimulado';
import Resultado from './componentes/Prova/ProvaSimulado/Resultado/resultado';
import AdminPage from './componentes/AdminPage/adminPage';
import ProvaView from './componentes/ProvaView/ProvaView';
import ProvaAddition from './componentes/ProvaAddition/ProvaAddition';

export default function App() {
    return (
        <Router>
            <main>
                <Routes> {/* Substituí Switch por Routes */}
                    <Route path='/Lobby' element={<LobbyMain />} />
                    <Route path='' element={<LoginMain />} />
                    <Route path='/Provas' element={<LobbyProvas />} />
                    <Route path='/Forgot' element={<Forgot />} />
                    <Route path='/Recover' element={<RecoverPassword />} />
                    <Route path='/ProvaLobby' element={<ProvaLobby />} />
                    <Route path='/ProvaSimulado' element={<ProvaSimulado />} />
                    <Route path='/Resultado' element={<Resultado />} />
                    <Route path='/adminPage' element={<AdminPage />} />
                    <Route path='/ProvaView' element={<ProvaView />} />
                    <Route path='/ProvaAddition' element={<ProvaAddition />} />
                </Routes>
            </main>
        </Router>
    );
}
