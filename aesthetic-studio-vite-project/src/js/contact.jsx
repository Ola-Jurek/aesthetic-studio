import React from 'react';
import {Form, Link} from "react-router-dom";
import logo from "../assets/znak wodny_złoty.png";
import {Navbar} from "./navbar.jsx";
import {Footer} from "./footer.jsx";
import {Container, Row, Col} from "react-grid-system";

export function Contact() {
    return (
        <>
            <Navbar/>
            <Container>
                <Row>
                    <Col sm={12}> <hr/> </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

