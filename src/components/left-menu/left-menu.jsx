import React from "react";


const LeftMenu = () => {
  require ("./left-menu.scss");
  return (
    <div className="lock-menu">
      <div className="container-leftMenu">
        <a href="" className="menu-effect">
          <img
            src={require("../../assets/images/icons/dashboard.png")}
            alt=""
            className="left-icon"
          ></img>
        </a>
        <a href="" className="menu-effect">
          <img
            src={require("../../assets/images/icons/save.png")}
            alt=""
            className="left-icon"
          ></img>
        </a>
        <a href="" className="menu-effect">
          <img
            src={require("../../assets/images/icons/tests.png")}
            alt=""
            className="left-icon"
          ></img>
        </a>
        <a href="" className="menu-effect">
          <img
            src={require("../../assets/images/icons/students.png")}
            alt=""
            className="left-icon"
          ></img>
        </a>
        <a href="" className="menu-effect">
          <img
            src={require("../../assets/images/icons/feed.png")}
            alt=""
            className="left-icon"
          ></img>
        </a>
        <a href="" className="menu-effect">
          <img
            src={require("../../assets/images/icons/calendar.png")}
            alt=""
            className="left-icon"
          ></img>
        </a>
      </div>
    </div>
  );
};

export default LeftMenu;
