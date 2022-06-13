import React from "react";
import { useHistory } from "react-router-dom";


const DashboardCard = ({respuestaCenters}) => {
  require ("./dashboard-card.scss");

  const history = useHistory();




  return (
    <div className="dashboardPosition">
    {respuestaCenters && 
            Object.values(respuestaCenters).map((item, index) => (
      <div className="dashboardFlex" key={index}>
        <div className="dashboardCourse" >
          <div className="dashboardCourse__info" >
          <div className="dashboardCourse__image" style={{backgroundImage: `url(http://api.caira.io/${item.logo})`}}></div>
            <p className="dashboardCourse__title">{item.name}</p>
            <p className="dashboardCourse__description">
              {item.description}
            </p> 
            <span className="dashboardCourse__flex">
              <img
                className="dashboardCourse__stars"
                src={require("../../assets/images/icons/stars-transparent.png")}
                alt=""
              />
              
              <button className="transparent-button" onClick={()=>{history.push(`/profile/${item.id}`)}}>+ INFO</button>
            </span>
          </div>
        </div>
      </div>
            ))}
    </div>
  );
};

export default DashboardCard;
