import React from "react";
import { Fade } from "@mui/material";
import axios from "axios";





function CourseCard({ respuestaAPI,setRespuestaAPI}) {
  require ("./course-card.scss");

  const headers = {
    "Acces-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };    


  setTimeout(function () {
    var courseButton = document.getElementById("moredetails");
    
  
    courseButton.addEventListener("click", function () {
      if(document.getElementById("moredetailshidden").className === "moredetails__hidden")
    document.getElementById("moredetailshidden").className = "moredetails";
 else
    document.getElementById("moredetailshidden").className = "moredetails__hidden";
    });
  }, 300);

  setTimeout(function () {
    var courseButton = document.getElementById("moredetails");
    
  
    courseButton.addEventListener("click", function () {
      if(document.getElementById("arrow").className === "mainCourse__arrow")
    document.getElementById("arrow").className = "mainCourse__arrowActive";
 else
    document.getElementById("arrow").className = "mainCourse__arrow";
    });
  }, 300);
  


  return (
    <Fade in timeout={{ enter: 650 }}>
      <div className="courseCard" id="courseCard">
        <div className="mainCourse">
          <div className="mainCourse__detailsFlex">
          <div className="mainCourse__info">
            <p className="mainCourse__title">
              {respuestaAPI.course_selected.name}
            </p>

            <p className="mainCourse__description">
              {respuestaAPI.course_selected.description}
            </p>

            <img
              className="mainCourse__stars"
              src={require("../../assets/images/icons/stars-transparent.png")}
              alt=""
            />
            <button className="flat-button">COMPRAR</button>
            <span className="mainCourse__flex" >
            <button className="mainCourse__details" id="moredetails">Detalles <img
                src={require("../../assets/images/icons/arrow.png")}
                alt=""
                className="mainCourse__arrow" id="arrow"
              /></button>
              
              
            </span>
          </div>
            </div>
          <div className="moredetails__hidden" id="moredetailshidden">
              <span className="moredetails__itemContainer">
              <p className="moredetails__item"><b>Categoría:</b> {respuestaAPI.course_selected.category}</p>
              <p className="moredetails__item"><b>Duración:</b> {respuestaAPI.course_selected.duration}</p>
              <p className="moredetails__item"><b>Localización:</b> {respuestaAPI.course_selected.location}</p>
              </span>
              
              
              <span className="moredetails__itemContainer">
              <p className="moredetails__item"><b>Precio:</b> {respuestaAPI.course_selected.price}€</p>
              <p className="moredetails__item"><b>Lenguaje:</b> {respuestaAPI.course_selected.language}</p>
              <p className="moredetails__item"><b>Modalidad:</b> {respuestaAPI.course_selected.modality}</p>
              </span>
            </div>
          
          <div className="mainCourse__image" >
            <img className="mainCourse__image" src={`https://api.caira.io/${respuestaAPI.course_selected.image}`} alt="" />
          </div>
          
        </div>

        <h2 className="recommendedTitle">Recomendados para tí</h2>
        <div className="recommendedCoursePosition">
          {respuestaAPI.other_courses &&
            respuestaAPI.other_courses.map((item, index) => (
              <div className="recommendedCourse" key={item.id}>
                <div className="recommendedCourse__info" >
                  <p className="recommendedCourse__title">{item.name}</p>
                  <p className="recommendedCourse__modality">{item.location}</p>
                  {/* <p className="recommendedCourse__modality">{item.modality}</p> */}
                  <p className="recommendedCourse__duration">{item.duration}</p>
                  <p className="recommendedCourse__description">
                    {item.description}
                  </p>
                  <span className="recommendedCourse__flex">
                    <img
                      className="recommendedCourse__stars"
                      src={require("../../assets/images/icons/stars-transparent.png")}
                      alt=""
                    />
                    <button className="transparent-button" onClick={async () => {          
            
            await axios.get(`https://api.caira.io/api/highlight_center_course/${item.id}`, { headers }).then((response) => {
            setRespuestaAPI(response.data.center);
          });
          document.getElementById("center-info").scrollIntoView()
         }}>+ INFO</button>
                   
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Fade>
  );
}

export default CourseCard;
