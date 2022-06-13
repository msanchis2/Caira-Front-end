import React from "react";
import FlechaIzq from  "../../../assets/images/Recursos/flecha-izquierda.svg";
import FlechaDer from "../../../assets/images/Recursos/flecha-derecha.svg";

function OpinionsSP() {
    return (
        <div className="opinions-big">
            <h1>Choosing is hard?</h1>
            <h3>You are not alone :)</h3>
            <div className="opinions">
                <div className="carrusel opinions">
                    <img className="arrow" src={FlechaIzq}></img>
                    <div className="back-white card-opinion">
                        <p><img className="op-card" id="op-img" src={require("../../../assets/images/perfil1.jpg")}></img></p>
                        <p className="op-card" id="op-txt">Caira me ha dado la oportunidad que necesitaba.</p>
                        <p className="op-card stars" id="op-star">★★★★★</p>
                    </div>
                    <img className="arrow" src={FlechaDer}/>
                </div>
            </div>
            <div className="opinions"><button className="button purple"><a href="#form-2">Join us</a></button></div>
        </div>
    )
}

export default OpinionsSP;