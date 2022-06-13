<<<<<<< HEAD
﻿
const HeaderCenter = () => {
    return (
        <div>
=======
﻿import React from "react";

require("./headerCenter.scss");
const HeaderCenter = () => {
    return (
      <div>
        <section class="flex" id="center-1">   
          <article>
              <h1>We approach students to your institution</h1>
              <p>Make it easy for the student to connect with you. Help him grow personally and professionally.</p>
          </article>

          <div id="book" class="flex-c">
              <h3>Would you like to talk with us?</h3>

              <div class="flex" id="calendy" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/pruizdiez'});return false;">
                  <img class="icon-s" src="assets/Recursos/calendar.svg"/> 
                  <p><b>Book a call</b></p>
              </div>
          </div>
        </section>
>>>>>>> 060f4e6198c8f76d281eb3091e07719633bd3e24
    </div>
    );
  };
  
export default HeaderCenter;