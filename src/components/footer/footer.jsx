import React from "react";


const Footer = () => {
  require ("./footer.scss");
  return (
    <div className="footer">
      <span className="footer__container">
        <img
          src={require("../../assets/images/logo-gris.png")}
          alt=""
          className="footer__logo"
        />
        <span className="footer__ContainerItems">
          <a href="" className="footer__items">
            Caira © 2022
          </a>
          <a href="" className="footer__items">
            Aviso legal
          </a>
          <a href="" className="footer__items">
            Política de privacidad
          </a>
          <a href="" className="footer__items">
            Política de cookies
          </a>
        </span>
        <span className="footer_socialContainer">
          <a href="https://www.instagram.com/caira_edu/" target="_blank">
            <img
              src={require("../../assets/images/icons/instagram-gris.png")}
              alt=""
              className="footer__socialIcons"
            />
          </a>
          <a
            href="https://www.facebook.com/pages/category/Education-website/Caira-100187068821352/"
            target="_blank"
          >
            <img
              src={require("../../assets/images/icons/facebook-gris.png")}
              alt=""
              className="footer__socialIcons"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/caira-education/?trk=ppro_cprof&originalSubdomain=es"
            target="_blank"
          >
            <img
              src={require("../../assets/images/icons/linkedin-gris.png")}
              alt=""
              className="footer__socialIcons"
            />
          </a>
        </span>
      </span>
      <span className="footer__ContainerItemsMobile">
        <a href="" className="footer__items">
          Caira © 2022
        </a>
        <a href="" className="footer__items">
          Aviso legal
        </a>
        <a href="" className="footer__items">
          Política de privacidad
        </a>
        <a href="" className="footer__items">
          Política de cookies
        </a>
      </span>
    </div>
  );
};

export default Footer;
