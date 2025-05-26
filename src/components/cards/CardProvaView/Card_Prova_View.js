import "./Card_Prova_View.css"
import { Link } from "react-router-dom";

export default function CardProvaView({Img, Nome, LinkTo}){
    return(
        <div className="main-content-item-prova-view">
            <div className="img-prova-view">
                <img src={Img}></img>
            </div>
            <div className="info-prova-view">
                <div className="span-prova-view">
                    <span>
                        {Nome}
                    </span>
                </div>
                <Link to={LinkTo} className="button-prova-view">
                    <div className="button-prova-view">
                        <button>Avançarㅤ🡢</button>
                    </div>
                </Link>
            </div>
      </div>
    );
}