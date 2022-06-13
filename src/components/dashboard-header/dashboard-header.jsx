import React from "react";


const DashboardHeader = () => {
    require ("./dashboard-header.scss");
    return (
        <div className="dashboardHeader">
        <span className="dashboardHeader__flexgrow">
            <img src={require("../../assets/images/Logo-gradiente.png")} alt="" className="dashboardHeader__img"/>
            </span>
            <span className="dashboardHeader__flex">
            <p className="dashboardHeader__text">Logout</p>
            <img src={require("../../assets/images/icons/logout.png")} alt="" className="dashboardHeader__icon"/>
            </span>
        </div>
    )
}

export default DashboardHeader;