const Card = ({ handlePointerEvent, name, img, cardStyle, text }) => {
    return (
      <article className={cardStyle}>
        <div
          className="card"
          onMouseDown={handlePointerEvent}
          onTouchStart={handlePointerEvent}
        >
          <img className="carouselCard__avatar" src={require("../../assets/images/illustrations/avatar.png")} alt={name} />
          <h2 className="carouselCard__name">{name}</h2>
          <img
                className="carouselCard__stars"
                src={require("../../assets/images/icons/stars-transparent.png")}
                alt=""
              />
              <p className="carouselCard__text">{text}</p>
        </div>
      </article>
    );
  };
  
  export default Card;