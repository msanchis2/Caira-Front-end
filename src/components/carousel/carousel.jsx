import { useState } from "react";
import Card from "./../card/card";
import Paginator from "../card/paginator";
import { data } from "./../../api/carouseldata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";


function Carousel() {
  require ("./carousel.scss");
  const [index, setIndex] = useState(2);
  
  const slideLeft = () => {
    if (index - 1 >= 0) {
      setIndex(index - 1);
    }
  };

  const slideRight = () => {
    if (index + 1 <= data.length - 1) {
      setIndex(index + 1);
    }
  };
  
  // const handlePageChange = (page) => {
    //   let n = page - index;
  //   setIndex(index + n);
  // };
  
  const handlePointerEvent = (e) => {
    let isTouchEvent = e.type === "touchstart" ? true : false;
    let card = e.target;
    let offset = 0;
    let initialX = isTouchEvent ? e.touches[0].clientX : e.clientX;
    
    document.onmousemove = onPointerMove;
    document.onmouseup = onPointerEnd;
    document.ontouchmove = onPointerMove;
    document.ontouchend = onPointerEnd;
    
    function onPointerMove(e) {
      offset = (isTouchEvent ? e.touches[0].clientX : e.clientX) - initialX;
      if (offset <= -100) {
        slideRight();
        
        if (index === data.length - 1) {
          card.style.left = 0;
        } else {
          setTimeout(() => {
            card.style.left = 0;
          }, 1000);
        }
        return;
      }
      if (offset >= 100) {
        slideLeft();
        
        if (index === 0) {
          card.style.left = 0;
        } else {
          setTimeout(() => {
            card.style.left = 0;
          }, 1000);
        }
        return;
      }

      card.style.left = offset + "px";
    }
    
    function onPointerEnd(e) {
      if (offset < 0 && offset > -100) {
        card.style.left = 0;
      }
      if (offset > 0 && offset < 100) {
        card.style.left = 0;
      }
      
      document.onmousemove = null;
      document.onmouseup = null;
      document.ontouchmove = null;
      document.ontouchend = null;
    }
  };

  return (
    <div className="review">
      <h3 className="review__title" id="review-title">
        Opiniones de otros estudiantes
      </h3>
      <div className="carousel__container">
        <div className="card-container">
          {/* <Paginator
            dataLength={data.length}
            activeIndex={index}
            handlePageChange={handlePageChange}
          /> */}
          <div className="background-block"></div>
          <FontAwesomeIcon
            onClick={slideLeft}
            className="leftBtn"
            icon={faChevronLeft}
          />
          <FontAwesomeIcon
            onClick={slideRight}
            className="rightBtn"
            icon={faChevronRight}
          />
          {data.map((person, n) => {
            let position =
              n > index ? "nextCard" : n === index ? "activeCard" : "prevCard";
            return (
              <Card
                key={n}
                handlePointerEvent={handlePointerEvent}
                {...person}
                cardStyle={position}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
