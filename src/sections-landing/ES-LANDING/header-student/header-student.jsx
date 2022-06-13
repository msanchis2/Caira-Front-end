import React from "react";

function HeaderStudentSP() {
    return  (
        <div className="headerStudent">
            <img src={require("../../../assets/images/logo.png")} className="logo-header"/>
            <div className="pages">
                <div className="links">
                    <p><b>Estudiante</b></p>
                    <p>Centro</p>
                </div>
                <div className="languages">
                    <img src={require("../../../assets/images/icons/spain.png")}/>
                    <a href="/en"><img src={require("../../../assets/images/icons/united-kingdom.png")}/></a>
                </div>
            </div>
        </div>
    )
}

export default HeaderStudentSP;