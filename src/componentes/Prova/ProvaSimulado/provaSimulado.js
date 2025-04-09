import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './provaSimulado.css';
import InputPergunta from '../../../components/inputs/inputPergunta/inputPergunta';

export default function ProvaSimulado() {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [tempoRestante, setTempoRestante] = useState(3600);

    // useEffect(() => {
    //     const handleFullscreenChange = () => {
    //         if (!document.fullscreenElement) {
    //             setIsFullscreen(false);
    //             window.location.href = "/"; // Cancela a prova se sair do fullscreen
    //             alert("Saiu do Fullscreen durante a prova");
    //         }
    //     };

    //     const handleKeyDown = (event) => {
    //         if (event.altKey) {
    //             event.preventDefault();
    //             window.location.href = "/";
    //         }
    //     };

    //     document.addEventListener("fullscreenchange", handleFullscreenChange);
    //     document.addEventListener("keydown", handleKeyDown);

    //     return () => {
    //         document.removeEventListener("fullscreenchange", handleFullscreenChange);
    //         document.removeEventListener("keydown", handleKeyDown);
    //     };
    // }, []);

    useEffect(() => {
        if (tempoRestante > 0) {
            const timer = setInterval(() => {
                setTempoRestante((prevTempo) => prevTempo - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else {
            finalizarProva();
        }
    }, [tempoRestante]);

    const formatarTempo = (segundos) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
    };

    const entrarFullscreen = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        setIsFullscreen(true);
    };

    const finalizarProva = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        setIsFullscreen(false);
    };

    return (
        <>
            <div className='bodyProvaSimulado'>
                <div className='BarraLateralProvasSimulado'></div>
                <div className='mainProvaSimulado'>
                    <div className='imgProvaSimulado'>
                        <img src='/img/LobbyImage.png' alt="Imagem do Lobby"></img>
                    </div>
                    <div>
                        <span className='spanMainProvaSimulado'>
                            PROVA DE CONHECIMENTO GERAL SEMESTRE “?”
                        </span>
                    </div>
                    <div className='divDivsMainProvaSimulado'>
                    <InputPergunta
                        numQuestao="1"
                        pergunta="Qual dos seguintes protocolos opera na camada de transporte do modelo OSI e é orientado à conexão, provendo entrega confiável de dados?"
                        respostaA="UDP"
                        respostaB="IP"
                        respostaC="TCP"
                        respostaD="ICMP"
                        />

                    <InputPergunta
                        numQuestao="2"
                        pergunta="Qual dispositivo de rede opera na camada de enlace (Data Link) do modelo OSI e é usado para conectar segmentos de rede, filtrando o tráfego com base em endereços MAC?"
                        respostaA="Roteador"
                        respostaB="Hub"
                        respostaC="Switch"
                        respostaD="Modem"
                    />

                    <InputPergunta
                        numQuestao="3"
                        pergunta="Qual endereço IP é reservado para loopback, permitindo que um dispositivo envie pacotes para si mesmo para fins de teste?"
                        respostaA="192.168.0.1"
                        respostaB="10.0.0.1"
                        respostaC="127.0.0.1"
                        respostaD="0.0.0.0"
                    />

                    <InputPergunta
                        numQuestao="4"
                        pergunta="Qual protocolo é usado para traduzir nomes de domínio (como www.exemplo.com) em endereços IP?"
                        respostaA="HTTP"
                        respostaB="FTP"
                        respostaC="SMTP"
                        respostaD="DNS"
                    />

                    <InputPergunta
                        numQuestao="5"
                        pergunta="Qual das seguintes opções descreve corretamente a função de um firewall?"
                        respostaA="Acelerar a conexão com a internet."
                        respostaB="Conectar diferentes tipos de redes."
                        respostaC="Bloquear ou permitir tráfego de rede com base em regras de segurança."
                        respostaD="Converter endereços IP privados em endereços IP públicos."
                    />

                    <InputPergunta
                        numQuestao="6"
                        pergunta="Qual topologia de rede possui um nó central que controla toda a comunicação entre os outros nós?"
                        respostaA="Barramento"
                        respostaB="Anel"
                        respostaC="Estrela"
                        respostaD="Malha"
                    />

                    <InputPergunta
                        numQuestao="7"
                        pergunta="O que é um VLAN (Virtual LAN)?"
                        respostaA="Uma rede local sem fio."
                        respostaB="Uma sub-rede física dentro de uma rede maior."
                        respostaC="Uma rede logicamente separada dentro de uma rede física."
                        respostaD="Uma conexão direta entre dois computadores."
                    />

                    <InputPergunta
                        numQuestao="8"
                        pergunta="Qual protocolo é usado para atribuição automática de endereços IP a dispositivos em uma rede?"
                        respostaA="SNMP"
                        respostaB="DHCP"
                        respostaC="ARP"
                        respostaD="POP3"
                    />

                    <InputPergunta
                        numQuestao="9"
                        pergunta="Qual é a função do protocolo ARP (Address Resolution Protocol)?"
                        respostaA="Traduzir nomes de domínio em endereços IP."
                        respostaB="Descobrir o endereço MAC associado a um endereço IP."
                        respostaC="Roteamento de pacotes entre redes diferentes."
                        respostaD="Enviar e-mails."
                    />

                    <InputPergunta
                        numQuestao="10"
                        pergunta="Qual das seguintes opções representa um endereço IPv6 válido?"
                        respostaA="192.168.1.1"
                        respostaB="10.0.0.1"
                        respostaC="2001:0db8:85a3:0000:0000:8a2e:0370:7334"
                        respostaD="255.255.255.0"
                    />
                    </div>
                    <div className='finalMainProvaSimulado'>
                        <Link to="/Resultado"><button onClick={finalizarProva} className='buttonFinalMainProvaSimulado'>Finalizar Prova</button></Link>
                        <div className='timerProvaSimulado'>{formatarTempo(tempoRestante)}</div>    
                        <span className='spanFinalMainProvaSimulado'>9/10</span>
                    </div>
                </div>
                <div className='BarraLateralProvasSimulado2'></div>
            </div>
        </>
    )
}