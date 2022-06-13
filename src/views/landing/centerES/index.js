<<<<<<< HEAD
﻿import {HeaderCenter,CardCenter,Metaverse,Partners,Contact} from "../../../sections-landing"
=======
﻿import {Header,HeaderCenter,CardCenter,Metaverse,Partners,Contact} from "../../../sections-landing"
>>>>>>> 060f4e6198c8f76d281eb3091e07719633bd3e24
import {Footer} from "../../../components"
require("../../../responsive.css");

const centerES = () => {
    return(
        <div>
<<<<<<< HEAD
            {/*<Header/>*/}
            <main>
                <HeaderCenter/>
                <CardCenter/>
                <Metaverse/>
                <Partners/>
                <Contact/>
            </main>
=======
            <Header/>
            <HeaderCenter/>
            <CardCenter/>
            <Metaverse/>
            <Partners/>
            <Contact/>
>>>>>>> 060f4e6198c8f76d281eb3091e07719633bd3e24
            <Footer/>
        </div>
    );
}

export default centerES;