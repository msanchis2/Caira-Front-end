import React from "react";

require ("./what-is-caira.scss");
function WhatIsCairaSP() {
    return (
        <div className="flex" id="sec2">
            <div className="whatIsCaira">
                <p><img className="icon" src={require("../../../assets/images/Recursos/flecha.png")}/></p>
                <h1>¿Qué es Caira?</h1>
                <p>Si estás perdido y no sabes qué estudiar, Caira 
                    te ayuda a saber qué hacer con tu vida.</p>
                <p>¡Averigua qué te gusta y dónde estudiarlo! 
                    Nuestra comunidad será tu guía.</p>
            </div>
        </div>
    )
}

export default WhatIsCairaSP;