import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
import React from "react";
import {TreatmentHeading, TreatmentSidebar, TreatmentDescription, TreatmentsPriceList} from "./treatmentSingle.jsx";



export function Treatment_2_blizny_i_rozstepy() {
    return (
        <>
            <Container>

                <Row>
                    <Col sm={12}> <TreatmentHeading title={'Depilacja laserowa'} heading={'Laser diodowy Medika Polska Trio Laser SLD 755nm + 808nm + 1064nm'} /> </Col>
                </Row>
                <Row>
                    <Col sm={3}> <TreatmentSidebar price={'0d 150 zł - szczegółowy cennik na dole strony'} area={'area'} problem={'problem'} /></Col>
                    <Col sm={9}> <TreatmentDescription description={'description'}/> </Col>
                </Row>
                <Row>
                    <Col sm={3}> </Col>
                    <Col sm={9}> <TreatmentsPriceList title={'price title'} price={'price'}/> </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}