import React from "react";

function PartnersSP() {
    return (
        <div className="partners-big">
            <h1>Partner</h1>
            <div className="lanz-contact"><img src={require("../../../assets/images/Recursos/lanzadera.png")}></img></div>
            <h3>Algunos de nuestros partners:</h3>
            <div className="slider">
                <div className="uni-logo">
                    <a classname="link" href="https://www.facebook.com/Unavir-108107404246902/" target="_blank"><img className="partner" src={require("../../../assets/images/Recursos/logos/unavir.jpg")} alt=""></img></a>
                </div>
                <div className="uni-logo">
                    <a classname="link" href="https://elingua.es/" target="_blank"><img className="partner" src={require("../../../assets/images/Recursos/logos/elingua.png")} alt=""></img></a>
                </div>
                <div className="uni-logo">
                    <a classname="link" href="https://lunarxy.com/" target="_blank"><img className="partner" src={require("../../../assets/images/Recursos/logos/lunar.jpg")} alt=""></img></a>
                </div>
                <div className="uni-logo">
                    <a classname="link" href="" target="_blank"><img className="partner" src={require("../../../assets/images/Recursos/logos/Iso gradiente.png")} alt=""></img></a>
                </div>
            </div>
        </div>
    )
}

export default PartnersSP;