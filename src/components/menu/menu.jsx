import React from "react";
import { useHistory } from "react-router-dom";

setTimeout(function () {
  var logo = document.querySelector(".container");
  var menu = document.querySelector(".menu");

  logo.addEventListener("click", function () {
    menu.classList.toggle("mobile");
    menu.classList.toggle("showmenu");
  });
}, 50);

const Menu = () => {
  require("./menu.scss");

  const history = useHistory();

  return (
    <div>
      <div className="header">
        <div className="container-navbar">
          <div className="container">
            {/* <div className="menulogo">
              <img
                src={require("../../assets/images/icons/hamburger.png")}
                className="hamburger-logo"
                alt=""
              ></img>
            </div> */}
          </div>
          <a
            onClick={() => {
              history.push(`/dashboard-course`);
            }}
            className="flex-grow"
          >
            <img
              src={require("../../assets/images/Logo-gradiente.png")}
              className="logo"
              alt="logo"
            ></img>
          </a>
          <a href="">
            <img src="assets/account.png" alt="" className="account-logo"></img>
          </a>

          <div className="desktop">
            <input
              type="text"
              placeholder="Buscar..."
              id="fname"
              name="fname"
              className="search"
            ></input>
            <span className="container-icons">
              <a href="">
                <img
                  src={require("../../assets/images/icons/bell.png")}
                  alt=""
                  className="navbar-icon"
                ></img>
              </a>
              <a href="">
                <img
                  src={require("../../assets/images/icons/mail.png")}
                  alt=""
                  className="navbar-icon"
                ></img>
              </a>
              {/* <a href=""><img src={require("../../assets/images/icons/profile.png")} alt="" className="navbar-icon"></img></a>
      <a href=""><img src={require("../../assets/images/icons/arrow.png")} alt="" className="navbar-icon arrow"></img></a> */}
            </span>
          </div>
        </div>
      </div>
      {/* <ul className="mobile menu">
        <li>
          <a href="#">Estudiante</a>
        </li>
        <li>
          <a href="#">Universidades</a>
        </li>
        <li>
          <a href="#">Iniciar Sesión</a>
        </li>
        <li>
          <a href="#" className="button">
            Regístrate
          </a>
        </li>
        <span className="language-select">
          <p>ES</p>
          <p className="en-button">| EN</p>
        </span>
        <span className="social-media">
          <a href="">
            <img
              src={require("../../assets/images/icons/instagram.png")}
              alt=""
              className="social-logos"
            ></img>
          </a>
          <a href="">
            <img
              src={require("../../assets/images/icons/facebook.png")}
              alt=""
              className="social-logos"
            ></img>
          </a>
          <a href="">
            <img
              src={require("../../assets/images/icons/linkedin.png")}
              alt=""
              className="linkedin social-logos"
            ></img>
          </a>
        </span>
      </ul> */}
    </div>
  );
};

export default Menu;
