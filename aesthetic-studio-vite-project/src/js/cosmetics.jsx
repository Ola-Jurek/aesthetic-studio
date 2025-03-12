import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Footer} from "./footer.jsx";
import {Container, Row, Col} from "react-grid-system";

export function Cosmetics(props) {
    return (
        <>

            <Navbar/>

            <Container>
                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>
            </Container>

            <div> Podstrona o kosmetykach </div>

            <Footer/>

        </>
    );
}

