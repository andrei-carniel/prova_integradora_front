import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app"; // Certifique-se de que "app.js" existe e está correto

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
