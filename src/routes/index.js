import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "views/dashboard"
import SocialProfile from "views/social-profile";
import LandingEN from "../views/landing/studentEN";
import LandingES from "../views/landing/studentES";
import LandingEN_c from "../views/landing/centerEN";
import LandingES_c from "../views/landing/centerES";
import DashboardCourse from "views/dashboardCourse/dashboardCourse";
<<<<<<< HEAD

=======
>>>>>>> 060f4e6198c8f76d281eb3091e07719633bd3e24

const Index = () => {
  
  return (
    
    <div>

          <Switch>
              <Route exact path='/dashboard' component={ Dashboard } />
              <Route path='/dashboard-course' component={DashboardCourse}/>              

              <Route exact path='/' component={ LandingES } />
              <Route exact path='/EN/Students' component={ LandingEN } />
              <Route exact path='/EN/Centers' component={ LandingEN_c } />
              <Route exact path='/ES/Centers' component={ LandingES_c } />
              
              <Route path='/profile/:id' component={ SocialProfile } />
              <Route path='/courses/:id' component={ SocialProfile } />
              <Route path='/feed/:id' component={ SocialProfile } />      
          </Switch>

    </div>

  );

};

export default Index;