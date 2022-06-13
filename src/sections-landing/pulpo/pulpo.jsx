import React from "react";

require("./pulpo.scss") ;
const Pulpo = () => {
    return (
        <div className="fourth">
            <h1 className="landing-titlesection">All education at your disposal<br/>(Scholarships, masters...)</h1>
            <img data-aos="zoom-in" id="map-ed" src={require("../../assets/images/Recursos/map.png")}/>
        </div>
    );
  };
  
export default Pulpo;