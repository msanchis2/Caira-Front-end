import React from "react";
import Twitter from "../../assets/images/Recursos/facebook-azul.svg";
import Instagram from "../../assets/images/Recursos/instagram-azul.svg";
import LinkedIn from "../../assets/images/Recursos/linkedin-azul.svg";


require("./contact.scss");
function Contact() {
    return (
        <div className="contact">
            <h1>Contact with us</h1>
            <div className="bottom">
                <div className="bottom-1">
                    <form id="contact-form" action="https://formsubmit.co/caira@caira.io" method="POST">
                        <input type="text" placeholder="Name"/>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="hidden" name="_captcha" value="false"/>
                        <input type="hidden" name="_subject" value="Nuevo correo desde la web!"/>
                        <input type="hidden" name="_template" value="table"/>
                        <input type="hidden" name="_next" value={window.location.href}/>
                        <textarea name="message"></textarea>
                        <p><input type="checkbox"/>I agree with terms and conditions</p>
                        <button type="submit" className="purple" id="send-contact">Send </button>
                    </form>
                </div>

                <div className="bottom-2">
                    <p>We are at:</p>
                    <div className="lanz-div"><img className="lanz" src={require("../../assets/images/Recursos/lanzadera.png")}></img></div>
                    <div className="loc"><img src={require("../../assets/images/Recursos/enviar.png")}></img><p>Caira@caira.io</p></div>
                    <div className="loc"><img src={require("../../assets/images/Recursos/ubicacion.png")}></img><p>Edificio Lanzadera, Carrer del moll de la aduana S/N</p></div>
                    <div className="loc"><img src={require("../../assets/images/Recursos/telefono.png")}></img><p>+34 619 286 343</p></div>
                    <br/>
                    <div className="soc">
                        <p>Follow us:</p>
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

export default Contact;