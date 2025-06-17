//Importação de Functions e bibliotecas
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; 

//Cria raiz para renderização
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
