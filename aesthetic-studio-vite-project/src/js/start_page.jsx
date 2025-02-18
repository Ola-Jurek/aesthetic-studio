import React from 'react';
import facebook from "../assets/facebook-footer.png";
import instagram from "../assets/instagram-footer.png";
import logo from "../assets/logo.png";
import '../css/_start_page.scss';
import {Container, Row, Col} from "react-grid-system";

export function StartPage() {
    return (
        <Container>
            <Row>

                <Col sm={12}>
                    <div className='start_page_logo'>
                        <img src={logo} className='logo' alt='logo' scale={400}/>
                    </div>
                </Col>

                <Col sm={12}>
                    <h1 className='start_page-header1'>
                        Strona w budowie
                    </h1>

                    <h3 className='start_page-header3'>
                        Już teraz zapraszamy Cię do zapoznania się z naszą ofertą.

                    </h3>


                </Col>

                <Col sm={12}>
                    <div className='start_page_social_media'>

                        <h4 className='start_page-header4'>
                            Znajdziesz nas na:
                        </h4>
                        <div>
                            <a href='https://www.facebook.com/estetykastudio'>
                                <img src={facebook} alt='facebook' height={40} width={40}/>
                            </a>
                        </div>

                        <div className='instagram_logo'>
                            <a href='https://www.instagram.com/kazimierscy_studio_estetyki?igsh=ajxaXkzNTc0YTVI'>
                                <img src={instagram} alt='instagram' height={40} width={40}/>
                            </a>
                        </div>
                    </div>

                    <p>
                        Możesz również kontaktować się pod numerem telefonu: +48 661 111 247
                    </p>
                </Col>


            </Row>


        </Container>
    );
}

