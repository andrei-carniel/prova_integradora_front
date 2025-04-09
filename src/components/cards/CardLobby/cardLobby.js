import "./cardLobby.css"
import { Link } from "react-router-dom";

export default function CardLobby({Img, Nome, LinkTo}){
    return(
        <div className="main-content-item">
            <div className="img">
                <img src={Img}></img>
            </div>
            <div className="info">
                <div className="span">
                    <span>
                        {Nome}
                    </span>
                </div>
                <Link to={LinkTo} className="button">
                    <div className="button">
                        <button>Avançarㅤ🡢</button>
                    </div>
                </Link>
            </div>
      </div>
    );
}