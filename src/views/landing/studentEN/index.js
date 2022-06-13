import React from 'react';

import { Header, FormRegister, WhatIsCaira, CardStudent, Pulpo, Metaverse, Opinions, Partners, Contact} from '../../../sections-landing';
import {Footer} from "../../../components"

require("../../../responsive.css");

const LandingEN = () => {
    return (
        <div>
            <Header/>
            {/* <FormRegister/> */}
            <WhatIsCaira/>
            <CardStudent/>
            <Pulpo/>
            <Opinions/>
            <Metaverse/>
            <Partners/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default LandingEN;