import React from "react";


const TitleCard = ({ respuestaAPI }) => {
  require ("./title-card.scss");
  // const logo = respuestaAPI.logo;
  // const logoblob = logo.blob(); 
  // const variable = URL.createObjectURL(logoblob);

  return (

    <div className="main-container">
    <div className="redondo" style={{backgroundImage: `url(http://api.caira.io/${respuestaAPI.logo})`}}>
      {/* <img
        src={`${respuestaAPI.logo}`}
        alt="pepe"
        className="avatar-uni"
      /> */}
      </div>
      <div className="title-container">
        <h2 className="uni-title">{respuestaAPI.name}</h2>
        <span className="flex-row">
          <h3 className="uni-subtitle">{respuestaAPI.type_center}</h3>
          {/* <img src={require("../../assets/images/icons/stars.png")} className="stars"/> */}
        </span>
        {/* <span className="flex-row">
                <p className="follows"><b>5687</b> seguidores</p>
                <p className="follows"><b>3250</b> siguiendo</p>
            </span> */}
        <span className="flex-row">
          <p className="info">{respuestaAPI.location}</p>
          <p className="info" id="center-info">{respuestaAPI.website}</p>
        </span>
      </div>
      {/* <div className="button-container">
            <button className="flat-button">Seguir</button>
            <button className="transparent-button">Chat</button>
        </div> */}
    </div>
  );
};

export default TitleCard;
