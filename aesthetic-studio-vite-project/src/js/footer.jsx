import React from 'react';
import {Container, Row, Col} from "react-grid-system";
import logo from "../assets/logo.png";
import '../css/_footer.scss';
import instagram from '../assets/instagram-footer.png';
import facebook from '../assets/facebook-footer.png';


export function Footer() {
    return (
        <Container className='footer' fluid style={{padding: 0, margin: 0, maxWidth: '100%',}}>
            <Row>
                <Col sm={6} className='footer_info'>
                    <a>Qubus Hotel, pok. 217 </a>
                    <a>Głogów, Pl. Konstytucji 3 maja 1 </a>
                    <a> + 48 661 111 247 </a>
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

