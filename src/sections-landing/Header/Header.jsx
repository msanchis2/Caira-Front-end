import React from "react";

require("./header.scss");
function Header() {
    return  (
        <div className="headerStudent">
            <img src={require("../../assets/images/logo.png")} className="logo-header"/>
            <div className="pages">
                <div className="links">
                    <p>Student</p>
                    <p>Center</p>
                </div>
                <div className="languages">
                    <a href="/"><img src={require("../../assets/images/icons/spain.png")}/></a>
                    <img src={require("../../assets/images/icons/united-kingdom.png")}/>
                </div>
            </div>
        </div>
    )
}

export default Header;
