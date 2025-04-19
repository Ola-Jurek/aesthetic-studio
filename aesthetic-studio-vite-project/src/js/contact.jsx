import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Footer} from "./footer.jsx";
import {Container, Row, Col} from "react-grid-system";
import './../css/_contact.scss';
import facebook from "../assets/facebook-app.png";
import instagram from "../assets/instagram-app.png";

export function Contact() {
    return (
        <>

            <Navbar/>
            <Container>
                <Row>
                    <Col sm={12}>
                        <hr/>
                    </Col>
                </Row>
            </Container>

            <Container className='contact_section'>

                    <Row className='contact_row'>

                        <Col sm={4} className="contact_tel">
                            <h4 className='contact_header'>Kontakt:</h4>
                            <p> + 48 661 111 247 </p>
                        </Col>


                        <Col sm={4} className="contact_address">

                            <h4 className='contact_header'>Adres:</h4>
                            <p>Qubus Hotel, pok. 217 </p>
                            <p>Głogów, Pl. Konstytucji 3 maja 1 </p>

                        </Col>



                        <Col sm={4} className="contact_media">

                            <a href='https://www.facebook.com/estetykastudio'>
                                <img src={facebook} alt='facebook' height={40} width={40}/>
                            </a>

                            <a href='https://www.instagram.com/kazimierscy_studio_estetyki?igsh=ajxaXkzNTc0YTVI'>
                                <img src={instagram} alt='instagram' height={40} width={40}/>
                            </a>

                        </Col>

                    </Row>
            </Container>

            <Footer/>
        </>
    );
}

