import React from 'react';

import { HeaderStudentSP, FormRegisterSP, WhatIsCairaSP, CardStudentSP, PulpoSP, MetaverseSP, OpinionsSP, PartnersSP, ContactSP } from "../../../sections-landing/index";

import { Footer } from 'components';

require("../../../responsive.css");

const LandingES = () => {
    return (
        <div>
            <HeaderStudentSP/>
            {/* <FormRegisterSP/> */}
            <WhatIsCairaSP/>
            <CardStudentSP/>
            <PulpoSP/>
            <OpinionsSP/>
            <MetaverseSP/>
            <PartnersSP/>
            <ContactSP/>
            <Footer/>
        </div>
    )
}

export default LandingES;