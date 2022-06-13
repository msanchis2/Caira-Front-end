import React from "react";

function CardStudentSP() {
    return (
        <div className="center-title">
            <h1>Te ayudamos a trazar el camino, tú lo recorres.</h1>
            <p className="text-pink">Tu vida académica depende de ti. ¿Cómo de lejos quieres llegar?</p>
            <br></br>
            <div id="cards-resp">
                <div className="flex">
                    <div className="arrow2 left"><img src="../../../assets/images/Recursos/flecha-izquierda.svg"></img></div>
                    <div className="info-card back-white text-purple">
                        <p><img id="in-img" src="../../../assets/images/Recursos/Informate.png"/></p>
                        <h3 id="in-title">Infórmate</h3>
                        <p id="in-sub">Descubre todas las opciones que están a tu alcance</p>
                    </div>
                    <div className="arrow2 right"><img src="../../../assets/images/Recursos/flecha-derecha.svg"></img></div>
                </div>
            </div>
            <div className="cards" id="cards">
                <div data-aos="fade-up" data-aos-offset="200" className="info-card">
                    <p><img src={require("../../../assets/images/Recursos/Informate.png")}/></p>
                    <h3>Infórmate</h3>
                    <p>Descubre todas las opciones que están a tu alcance</p>
                </div>
                <div data-aos="fade-up" data-aos-offset="300" className="info-card">
                    <p><img src={require("../../../assets/images/Recursos/Interactua.png")}/></p>
                    <h3>Interactúa</h3>
                    <p>Habla con quien estudia lo que te gusta</p>
                </div>
                <div data-aos="fade-up" data-aos-offset="400" className="info-card">
                    <p><img src={require("../../../assets/images/Recursos/Compara.png")}/></p>
                    <h3>Compara</h3>
                    <p>Conoce los pros y los contras de tus opciones</p>
                </div>
                <div data-aos="fade-up" data-aos-offset="500" className="info-card">
                    <p><img src={require("../../../assets/images/Recursos/Lanzate.png")}/></p>
                    <h3>Lánzate</h3>
                    <p>Ser lo que quieres ser depende de ti</p>
                </div>
            </div>
        </div>
    )
}

export default CardStudentSP;