import React from "react";
import FlechaIzq from "../../assets/images/Recursos/flecha-izquierda.svg";

require("./card-student.scss");
function CardStudent() {
    return (
        <div className="center-title">
           <h1>We help you finding your path, you are the one who has to walk it.</h1>
            <p className="text-pink">Your academic life depends on you. How far do you want to go?</p>
            <br></br>
            <div id="cards-resp">
                <div className="flex">
                    <div className="arrow2 left"><img src={FlechaIzq}/></div>
                    <div className="info-card back-white text-purple">
                        <p><img id="in-img" src={require("../../assets/images/Recursos/Informate.png")}/></p>
                        <h3 id="in-title">Information</h3>
                        <p id="in-sub">Discover all available options</p>
                    </div>
                    <div className="arrow2 right"><img src={require("../../assets/images/Recursos/flecha-derecha.svg")}/></div>
                </div>
            </div>
            <div className="cards" id="cards">
                <div data-aos="fade-up" data-aos-offset="200" className="info-card">
                    <p><img src={require("../../assets/images/Recursos/Informate.png")}/></p>
                    <h3>Information</h3>
                    <p>Discover all available opctions</p>
                </div>
                <div data-aos="fade-up" data-aos-offset="300" className="info-card">
                    <p><img src={require("../../assets/images/Recursos/Interactua.png")}/></p>
                    <h3>Interact</h3>
                    <p>Talk to who studies what you like</p>
                </div>
                <div data-aos="fade-up" data-aos-offset="400" className="info-card">
                    <p><img src={require("../../assets/images/Recursos/Compara.png")}/></p>
                    <h3>Compare</h3>
                    <p>Know the pros and cons of your options</p>
                </div>
                <div data-aos="fade-up" data-aos-offset="500" className="info-card">
                    <p><img src={require("../../assets/images/Recursos/Lanzate.png")}/></p>
                    <h3>Go for it</h3>
                    <p>Being what you want to be depends on you</p>
                </div>
            </div>
        </div>
    )
}

export default CardStudent;