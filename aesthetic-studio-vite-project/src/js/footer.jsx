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
                    <a>Głogów </a>
                    <a>plac Tysiąclecia 11a </a>
                    <a> + 48 500 701 507 </a>
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
            <Row>
                <Col sm={12} ><p className='copyrights'>© {new Date().getFullYear()} JSD A.Jurek. Wszelkie prawa zastrzeżone.</p></Col>
            </Row>
        </Container>
    );
}

