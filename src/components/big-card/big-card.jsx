import React, { useState } from "react";
import { Fade } from "@mui/material";
import { Carousel } from "components";

const BigCard = ({ respuestaAPI }) => {
  require ("./big-card.scss")
  return (
    <Fade in timeout={{ enter: 650 }}>
    <div>
      <div className="bigCard">
        {/* <span className="bigCard__buttonsContainer">
        <button className="bigCard__buttonActive" id="info">
          Info
        </button>
        <button className="bigCard__button" id="course">
          <img
            src={require("../../assets/images/icons/calendar.png")}
            alt=""
            className="bigCard__icons"
          />{" "}
          Cursos
        </button>
        <button className="bigCard__button" id="save">
          <img
            src={require("../../assets/images/icons/save.png")}
            alt=""
            className="bigCard__icons"
          />
          Feed
        </button>
      </span> */}
        <div className="infoCard__itemContainer" id="infoCard">
          <h1 className="infoCard__title">{respuestaAPI.name}</h1>
          <p className="infoCard__text">{respuestaAPI.description}</p>
          <div className="accordion-demo"></div>
        </div>
      </div>
      <Carousel/>
      </div>
    </Fade>
  );
};

export default BigCard;
