import React from "react";

require("./what-is-caira.scss");
function WhatIsCaira() {
    return (
        <div className="flex" id="sec2">
            <div className="whatIsCaira">
                <p><img className="icon" src={require("../../assets/images/Recursos/flecha.png")}/></p>
                <h1>What is Caira?</h1>
                <p>If you are lost and don’t know what to study, <b>Caira </b>
                    helps you find out what to do with your life.</p>
                <p>Find what you like and where to study it!
                    Our community will be your guide.</p>
            </div>
        </div>
    )
}

export default WhatIsCaira;