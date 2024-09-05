import React from 'react';
import {Container, Row, Col} from "react-grid-system";
import logo from "../assets/logo.png";
import '../css/_footer.scss';
import instagram from '../assets/instagram-47-128.png';
import facebook from '../assets/brand-identity_-facebook-128.png';


export function Footer() {
    return (
        <Container className='footer'>
            <Row>
                <Col sm={6} className='footer_info'>
                    <div><a>Qubus Hotel, pok. 217 </a></div>
                    <div><a>Głogów, Pl. Konstytucji 3 maja 1 </a></div>
                    <div><a> + 48 661 111 247 </a></div>
                    <div><a> marta.kazimierska@interia.eu </a></div>
                    <div className='footer_social_media'>
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

                </Col>
                <Col sm={6} className='footer_logo'>
                    <div>
                        <img src={logo} className='logo' alt='logo' />
                    </div>
                </Col>
            </Row>
        // </Container>
    );
}

