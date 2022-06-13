import React from "react";
import { BigCard, CourseCard, feed } from "components";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";


function UniMenu({ respuestaAPI,setRespuestaAPI }) {
  require ("./uni-menu.scss");
  return respuestaAPI.id ? (
    <Router>
      <span className="uniMenu">
        <span className="uniMenu__buttonsContainer">
          <NavLink
            to={`/profile/${respuestaAPI.id}`}
            activeClassName="uniMenu__buttonActive"
          >
            <button className="uniMenu__button" id="info">
              <img
                src={require("../../assets/images/icons/info.png")}
                alt=""
                className="uniMenu__icons-two"
              />
              INFO
            </button>
          </NavLink>
          <NavLink
            to={`/courses/${respuestaAPI.id}`}
            activeClassName="uniMenu__buttonActive"
          >
            <button className="uniMenu__button" id="course">
              {" "}
              <img
                src={require("../../assets/images/icons/calendar.png")}
                alt=""
                className="uniMenu__icons"
              />
              Cursos
            </button>
          </NavLink>
          <NavLink
            to={`/feed/${respuestaAPI.id}`}
            activeClassName="uniMenu__buttonActive"
          >
            <button className="uniMenu__button" id="save">
              {" "}
              <img
                src={require("../../assets/images/icons/save.png")}
                alt=""
                className="uniMenu__icons"
              />
              Feed
            </button>
          </NavLink>
        </span>
      </span>
      <Route path="/profile/:id">
        {" "}
        <BigCard respuestaAPI={respuestaAPI} />
      </Route>
      <Route path="/courses/:id">
        {" "}
        <CourseCard respuestaAPI={respuestaAPI} setRespuestaAPI={setRespuestaAPI} />{" "}
      </Route>
      <Route path="/feed/:id" component={feed} />
    </Router>
  ) : (
    ""
  );
}

export default UniMenu;
