import React, { useEffect } from 'react';
import { Redirect,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Menu,HeaderImage,LeftMenu,TitleCard,Footer, ReviewCarrousel,UniMenu, Carousel} from "../../components"
import './social-profile.scss'
import { useState} from 'react';
import axios from 'axios';

const SocialProfile = () => {
  const { id }  = useParams()
    // const url = `https://apicaira.lunarxy.com/api/highlight_center_course/${id}`
    let [course, setCourse] = useState(null)
    // axios.default.headers.get['Accept'] = '*';
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
     const headers = {
       'Acces-Control-Allow-Origin' : '*',
       'Content-Type': 'application/json',
   };

   const [url, setURL] = useState(`https://api.caira.io/api/highlight_center/${id}`);
const [respuestaAPI, setRespuestaAPI] = useState({ respuesta: 'KO' });




    useEffect(() => {
      const consultaAPI = async () => {
        const consulta = await axios.get(url,{headers}) 
        .then(response => {
          setRespuestaAPI(response.data.center)
          
        });
      };
   
      consultaAPI();
    }, []);


    return (
      
        <div>
        {console.log(respuestaAPI)}
        <Menu/>
        <HeaderImage/>
        {/* <LeftMenu/> */}
        <TitleCard respuestaAPI={respuestaAPI}/>
        <UniMenu respuestaAPI={respuestaAPI} setRespuestaAPI={setRespuestaAPI}/>
        {/* <ReviewCarrousel/> */}
        {/* <Carousel/> */}
        <Footer/>
        </div>
    );

};

        // <div>

        //     {
        //         validateSession()
        //         ?
        //         <div>

        //         </div>
        //         :
        //         <Redirect to='/not-authorized' />
        //     }

        // </div>


export default SocialProfile;