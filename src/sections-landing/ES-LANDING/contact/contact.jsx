import React from "react";
import Twitter from "../../../assets/images/Recursos/facebook-azul.svg";
import Instagram from "../../../assets/images/Recursos/instagram-azul.svg";
import LinkedIn from "../../../assets/images/Recursos/linkedin-azul.svg";

function ContactSP() {
    return (
        <div className="contact">
            <h1>Contacta con nosotros</h1>
            <div className="bottom">
                <div className="bottom-1">
                    <form id="contact-form" action="https://formsubmit.co/caira@caira.io" method="POST">
                        <input type="text" placeholder="Nombre"/>
                        <input type="email" name="email" placeholder="Correo electrónico"/>
                        <input type="hidden" name="_captcha" value="false"/>
                        <input type="hidden" name="_subject" value="Nuevo correo desde la web!"/>
                        <input type="hidden" name="_template" value="table"/>
                        <input type="hidden" name="_next" value={window.location.href}/>
                        <textarea name="message"></textarea>
                        <p><input type="checkbox"/>Estoy de acuerdo con los términos y condiciones</p>
                        <button type="submit" className="button purple" id="send-contact">Enviar</button>
                    </form>
                </div>

                <div className="bottom-2">
                    <p>Estamos en:</p>
                    <div className="lanz-div"><img className="lanz" src={require("../../../assets/images/Recursos/lanzadera.png")}></img></div>
                    <div className="loc"><img src={require("../../../assets/images/Recursos/enviar.png")}></img><p>Caira@caira.io</p></div>
                    <div className="loc"><img src={require("../../../assets/images/Recursos/ubicacion.png")}></img><p>Edificio Lanzadera, Carrer del moll de la aduana S/N</p></div>
                    <div className="loc"><img src={require("../../../assets/images/Recursos/telefono.png")}></img><p>+34 619 286 343</p></div>
                    <br/>
                    <div className="soc">
                        <p>Síguenos:</p>
                        <div className="social">
                            <a href="https://twitter.com/Caira_education"><img src={Twitter}></img></a>
                            <a href="https://www.instagram.com/caira.io/"><img src={Instagram}></img></a>
                            <a href="https://www.linkedin.com/company/caira-education/"><img src={LinkedIn}></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSP;