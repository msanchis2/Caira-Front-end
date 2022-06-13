import React from "react";
<<<<<<< HEAD
import "./card-center.scss";

function CardCenter() {
    return (
        <div className="center-title">
           <h1>We help you finding your path, you are the one who has to walk it.</h1>
            <p className="text-pink">Your academic life depends on you. How far do you want to go?</p>
            <br></br>
            <div id="cards-resp">
                <div className="flex">
                    <div className="arrow2 left"><img src="../../assets/images/Recursos/flecha-izquierda.svg"></img></div>
                    <div cla ssName="info-card back-white text-purple">
                        <p><img id="in-img" src="../../assets/images/Recursos/Informate.png"/></p>
                        <h3 id="in-title">Information</h3>
                        <p id="in-sub">Discover all avaliable options</p>
                    </div>
                    <div className="arrow2 right"><img src="../../assets/images/Recursos/flecha-derecha.svg"></img></div>
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
=======

require("./card-center.scss");
function CardCenter() {
    return (
        <section className="center-title" id="third">
            <h1>We grow together</h1>
            <p className="text-pink">Your success is our success</p>
            <br/>
            <div id="cards-resp">
                <div className="flex">
                    <div className="arrow2 left"><img src={require("../../assets/images/Recursos/flecha-izquierda.svg")}/></div>
                    <div className="info-card back-white text-purple">
                        <p><img id="in-img" src="../../assets/images/Recursos/Informate.png"/></p>
                        <h3 id="in-title">Get students</h3>
                        <p id="in-sub">We make you a setup and we decided on a strategy to get students</p>
                    </div>
                    <div className="arrow2 right"><img src={require("../../assets/images/Recursos/flecha-derecha.svg")}/></div>
                </div>
            </div>
            <div className="flex" id="cards">
                <div className="info-card-2">
                    <p><img src={require("../../assets/images/Recursos/+student.png")}/></p>
                    <h3>Get students</h3>
                    <p>We make you a setup and we decided on a strategy to get students</p>
                </div>
                <div className="info-card-2">
                    <p><img src={require("../../assets/images/Recursos/conex.png")}/></p>
                    <h3>A new channel</h3>
                    <p>Create content to receive leads. Manage a new uptake channel</p>
                </div>
                <div className="info-card-2">
                    <p><img src={require("../../assets/images/Recursos/Corona.png")}/></p>
                    <h3>We share the success</h3>
                    <p>Our work gives its fruits. we don't win if you don't win</p>
                </div>
            </div>
        </section>
>>>>>>> 060f4e6198c8f76d281eb3091e07719633bd3e24
    )
}

export default CardCenter;