import React, { useRef, useEffect, useState } from 'react';
import { Navbar } from './navbar.jsx';
import '../App.scss';
import '../css/_treatmentsSubmenu.scss';
import { Container, Row, Col } from 'react-grid-system';
import { Footer } from './footer.jsx';

import {ImgSliderTreatments} from "./imgSliderTreatments.jsx";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";

export function Treatments() {

    return (
        <>
            <Navbar/>

                <Container>

                    <Row>
                        <Col sm={12}><hr/></Col>
                    </Row>

                    <Row>
                        <TreatmentSubmenu/>
                    </Row>

                </Container>

            <ImgSliderTreatments/>
            <Footer/>
        </>
    );
}
