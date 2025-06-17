import { useState } from "react";
import "./Prova_Addition.css";
import ExamCreate from "../../components/ExamCreate/Exam_Create";
import ProvaSimulado from "../Prova_Simulado/Prova_Simulado";

export default function ProvaAddition() {
  const [idProva, setIdProva] = useState("");
  const [simular, setSimular] = useState(false);

  const handleInputChange = (e) => {
    setIdProva(e.target.value);
  };

  const handleSimular = () => {
    if (idProva.trim() !== "") {
      setSimular(true);
    }
  };

  return (
    <div className="body-prova-addition">
      <div className="left-side-body-prova-addition">
        <div className="left-side-aside-prova-addition">
          <span>
            <ExamCreate />
          </span>
        </div>
      </div>
      <div className="right-side-body-prova-addition">
        <div className="prova-right-side-prova-addition">
          <div className="insert-simulado-prova-addition">
            <input
              placeholder="Digite o ID da Prova"
              value={idProva}
              onChange={handleInputChange}
            />
            <button onClick={handleSimular}>Simular</button>
          </div>

          <div className="limita">
            {simular && <ProvaSimulado examId={idProva} valid={false} />}
          </div>
        </div>
      </div>
    </div>
  );
}
