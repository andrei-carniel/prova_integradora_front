import "./Card_Lobby.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import Button_Base from "../../Button/Button_Base/Button_Base";
import Button_Cube from "../../Button/Button_Cube/Button_Cube";

export default function CardLobby({ type, children, Img, Nome, LinkTo, onClick, style = {}, styleImg = {}, horaInicio, horaFim, data }) {
    return (
        <div className="main-content-item-lobby" style={style}>
            <div className="img" style={styleImg}>
                <img src={Img} ></img>
            </div>
            <div className="info-lobby">
                <div className="div-span-lobby">
                    <span className="span-lobby">
                        {Nome}
                    </span>
                </div>
                <div className="sepa">
                    <Link to={LinkTo} onClick={onClick} className="link-button-lobby">
                        <Button_Cube children={`${children}`} />
                    </Link>
                </div>
                {type == 1 && (
                    <>
                        <div className="border-lobby"></div>
                        <div className="horario-lobby">
                            <span className="hora-horario-lobby">
                                {horaInicio != null && horaFim != null && ({horaInicio}-{horaFim})}
                                {horaInicio == null && horaFim == null &&(
                                    <span>18:00 - 20:00</span>
                                )}
                            </span>
                            <span className="data-horario-lobby">
                                {data != null && ({data})}
                                {data == null && (<span>21/05/2025</span>)}
                            </span>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}