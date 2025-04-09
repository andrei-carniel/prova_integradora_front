import React, { useRef, useState, useEffect } from "react";
import "./LobbyProvas.css";
import { Link } from "react-router-dom";
import CardLobby from "../../../components/cards/CardLobby/cardLobby";

export default function Prova() {
  const divRef = useRef(null);
  const [choice, setChoice] = useState("1");

  function getchoice2() {
    setChoice("2");
  }

  function getchoice1() {
    setChoice("1");
  }

  return (
    <>
      <div className="body-provas">
        <div className="navbar-provas">
          <div className="navbar-logo">
            <img src="/img/LoginImage.png" alt="Logo" />
          </div>
          <div className="menu-provas">
            <span
              onClick={getchoice1}
              className={choice === "1" ? "active" : ""}
            >
              Provas a Fazer
            </span>
            <span
              onClick={getchoice2}
              className={choice === "2" ? "active" : ""}
            >
              Provas Feitas
            </span>
          </div>
          <div className="menu-provas-sair">
            <Link to="/lobby">
              <span>Voltar</span>
            </Link>
          </div>
        </div>

        <div ref={divRef} className="tela-prova">
          <div
            className="main-content-provas"
            id="Provas-a-Fazer"
            style={{ display: choice === "1" ? "flex" : "none" }}
          >
            <div className="main-content-main-body">
              <CardLobby
                Img="/img/HistoricoProvas.png"
                Nome="Prova do 1° Semestre"
                LinkTo="/ProvaLobby"
              />

              <CardLobby
                Img="/img/HistoricoProvas.png"
                Nome="Prova do 2° Semestre"
                LinkTo="/ProvaLobby"
              />

            </div>
          </div>

          <div
            className="main-content-provas"
            id="Provas-Feitas"
            style={{ display: choice === "2" ? "flex" : "none" }}
          >
            <div className="main-content-main-body">
              <CardLobby
                Img="/img/HistoricoProvas.png"
                Nome="Prova do 1° Semestre"
                LinkTo="/ProvaLobby"
              />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}