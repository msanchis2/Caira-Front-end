import React from "react";
import { Fade } from "@mui/material";


const feed = () => {
  require ("./feed.scss");
  return (
    <Fade in timeout={{ enter: 650 }}>
    <div className="feed">
    <div className="feed__container">
      <div className="feed__item"></div>
      <div className="feed__item"></div>
      <div className="feed__item"></div>
      <div className="feed__item"></div>
      <div className="feed__item"></div>
      <div className="feed__item"></div>
      <div className="feed__item"></div>
      <div className="feed__item"></div>
      <div className="feed__item"></div>
      </div>
    </div>
    </Fade>
  );
};

export default feed;
