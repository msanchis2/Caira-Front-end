import React from "react";

const PulpoSP = () => {
    require("./pulpo.scss") ;
    return (
        <div className="fourth">
            <h1 className="landing-titlesection">Toda la formación a tu disposición<br/>(Becas, masters…)</h1>
            <img className="pulpo" data-aos="zoom-in" id="map-ed" src={require("../../../assets/images/Recursos/map.png")}/>
        </div>
    );
  };
  
export default PulpoSP;