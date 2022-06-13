import React from "react";
import { Fade } from "@mui/material";



const ReviewCarrousel = () => {
  require ("./review-carrousel.scss");
  return (
    <Fade in timeout={{ enter: 650 }}>
      <div className="review">
        <div className="review__flexContainer">
          <h3 className="review__title" id="review-title">
            Opiniones de otros estudiantes
          </h3>
          <span className="review__container">
            <button className="review__button">
              <img
                className="review__movebutton"
                src={require("../../assets/images/icons/flecha-izquierda.png")}
                alt=""
              />
            </button>
            <div className="review__item mobile">
              <img
                className="review__avatar"
                src={require("../../assets/images/illustrations/avatar.png")}
                alt=""
              />
              <p className="review__name">
                <b>María</b> Hernández
              </p>
              <img
                className="review__stars"
                src={require("../../assets/images/icons/stars-transparent.png")}
                alt=""
              />
              <p className="review__text" id="review-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur ea ab modi totam. Ipsum iure sequi a nulla facilis.
              </p>
            </div>
            <div className="review__item mobile">
              <img
                className="review__avatar"
                src={require("../../assets/images/illustrations/avatar.png")}
                alt=""
              />
              <p className="review__name">
                <b>María</b> Hernández
              </p>
              <img
                className="review__stars"
                src={require("../../assets/images/icons/stars-transparent.png")}
                alt=""
              />
              <p className="review__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur ea ab modi totam. Ipsum iure sequi a nulla facilis
              </p>
            </div>
            <div className="review__item">
              <img
                className="review__avatar"
                src={require("../../assets/images/illustrations/avatar.png")}
                alt=""
              />
              <p className="review__name">
                <b>María</b> Hernández
              </p>
              <img
                className="review__stars"
                src={require("../../assets/images/icons/stars-transparent.png")}
                alt=""
              />
              <p className="review__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur ea ab modi totam. Ipsum iure sequi a nulla facilis
              </p>
            </div>
            <button className="review__button">
              <img
                className="review__movebutton"
                src={require("../../assets/images/icons/flecha-derecha.png")}
                alt=""
              />
            </button>
          </span>
        </div>
      </div>
    </Fade>
  );
};

export default ReviewCarrousel;
