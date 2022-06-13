import React, { useEffect,useState } from 'react';
import axios from "axios";

const CategoriesFilter = ({respuestaCategories,setRespuestaCenters}) => {
    require ("./categories-filter.scss");
    const headers = {
        "Acces-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      };    

    return(
    <div className='filterFlex'>
            {respuestaCategories &&
            Object.values(respuestaCategories).map((item, index) => (
        <div className='filterContainer' key={index}>
    <div className='filterPosition'>
        <button className='purpleButton filter-margin' onClick={async () => {          
            
           await axios.get(`https://api.caira.io/api/get_centers_by_category/${item.id}`, { headers }).then((response) => {
           setRespuestaCenters(response.data);
         });
        }}>{item.name}</button>
    </div>
    </div>
    ))}
    </div>
    
)}

export default CategoriesFilter;
