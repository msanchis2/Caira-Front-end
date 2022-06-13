import React from "react";
// import { registerButton } from "../../cognito/register";

function FormRegisterSP() {

    return (
        <div className="form-contact">
            <div className="flex">
                <article>
                    <h2>Encuentra lo que te apasiona</h2>
                    <h1>Haz lo que amas</h1>
                    <p>Te ayudamos a encontrar tu camino</p>
                </article>
            </div>

            <div className="form">
                <form id="form-1" style="display: none;">
                <div className="flex"><h3>Entra en Caira</h3><img className="f-arrow" src="../../assets/Recursos/flecha-derecha.svg"/></div>
                    <input id="loginEmail" type="email" placeholder="Email"/><br></br>
                    <input id="loginPwd"  type="password" placeholder="Password"/><br></br>
                    <input type="submit" value="Log in" onclick="loginButton()"/><br></br>
                    <div className="google">
                        <a href="https://caira.auth.eu-central-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&response_type=token&client_id=2lhfuid7ce4uamq05phqotlnk2&redirect_uri=https://apicaira.lunarxy.com/docs&scope=aws.cognito.signin.user.admin+email+openid+profile">
                            <img className="lg" src="../../../assets/Recursos/google-brands.svg"/>Accede con Google </a><br></br>  
                    </div>
                    <a href="#" id="a-form1">¿Eres nuevo? ¡Regístrate ya!</a>
                </form>
                <form id="form-2">
                    <div className="flex"><h3>Join Caira</h3><img className="f-arrow" src="../../assets/Recursos/flecha-derecha.svg"/></div>
                        <div className="flex">
                            <input id="username" type="text" placeholder="Nombre"/>
                            <input id="usersurname" type="text" placeholder="Apellidos"/>
                        </div>
                        <input id="useremail" type="email" placeholder="Email"/>
                        <div className="flex">
                            <input id="userpwd" type="password" placeholder="Contraseña" className="pwd"/>
                            <input id="userpwdconf" type="password" placeholder="Repite la contraseña" className="pwd"/>
                        </div>
                        <div id="togglePassword" className="flex">
                            <img src="../../assets/Recursos/eye.svg" id="tp-icon"/><p id="tp-text">Muestra la contraseña</p>
                        </div>
                        <p id="errorMessage"></p>
                        <input id="signupbtn" type="submit" value="Sign up"/><br></br>
                        <div className="google">
                            <a href="https://caira.auth.eu-central-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&response_type=token&client_id=2lhfuid7ce4uamq05phqotlnk2&redirect_uri=https://main.d2mgujavsc6avq.amplifyapp.com/registerView/graciasregistroGoogle.html&scope=aws.cognito.signin.user.admin+email+openid+profile">
                                <img className="lg" src="../../../assets/Recursos/google-brands.svg"/>Sign up with Google</a><br></br>  
                        </div>
                        {/* <a href="#" id="a-form2">Already have an account? Log in</a> */}
                </form>
            </div>
        </div>
    )
}

export default FormRegisterSP;