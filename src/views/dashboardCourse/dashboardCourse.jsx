import React, { useEffect } from "react";
import {
  LeftMenu,
  Menu,
  Footer,
  CourseCard,
  DashboardCard,
  CategoriesFilter,
  DashboardHeader,
} from "../../components";
import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import axios from "axios";

const DashboardCourse = () => {
  require('./dashboardCourse.scss')
  const { id } = useParams();
  // const url = `https://apicaira.lunarxy.com/api/highlight_center_course/${id}`
  let [course, setCourse] = useState(null);
  // axios.default.headers.get['Accept'] = '*';
  axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
  const headers = {
    "Acces-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const [url, setURL] = useState(
    `https://api.caira.io/api/all_centers`
  );
  const [respuestaCenters, setRespuestaCenters] = useState({ respuesta: "KO" });
  
    //

  const [urlcategories, setURLcategories] = useState(
    `https://api.caira.io/api/all_categories`
  );
  const [respuestaCategories, setRespuestaCategories] = useState({ respuesta: "KO" });

  useEffect(() => {
    const consultaAPI = async () => {
      const consulta = await axios.get(url, { headers }).then((response) => {
        setRespuestaCenters(response.data);
      });

      const consultaCategories = await axios.get(urlcategories, { headers }).then((response) => {
        setRespuestaCategories(response.data);
      });
    };

    consultaAPI();
  }, []);

  return (
    <div>
      {/* <Menu/> */}
      <DashboardHeader />
      {/* <LeftMenu/> */}
      <CategoriesFilter respuestaCategories={respuestaCategories} setRespuestaCenters={setRespuestaCenters}/>
      {respuestaCenters && <DashboardCard respuestaCenters={respuestaCenters}/>}
      <Footer />
    </div>
  );
};

export default DashboardCourse;
