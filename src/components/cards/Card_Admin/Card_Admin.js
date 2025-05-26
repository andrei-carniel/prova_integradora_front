import "./Card_Admin.css"
import { Link } from "react-router-dom";

export default function CardAdmin({Img, Nome, LinkTo}){
    return(
        <div className="main-content-item-admin">
            <div className="img-admin">
                <img src={Img}></img>
            </div>
            <div className="info-admin">
                <div className="span-admin">
                    <span>
                        {Nome}
                    </span>
                </div>
                <Link to={LinkTo} className="button-admin">
                    <div className="button-admin">
                        <button>Avançarㅤ🡢</button>
                    </div>
                </Link>
            </div>
      </div>
    );
}