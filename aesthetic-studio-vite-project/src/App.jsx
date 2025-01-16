
import './App.scss'
import {Navbar} from "./js/navbar.jsx";
import {Footer} from "./js/footer.jsx";
import {StartPage} from "./js/start_page.jsx";
import {ImgSliderApp} from "./js/imgSliderApp.jsx";
import './css/imgSlider.scss';
import {Col, Container, Row} from "react-grid-system";
import React from "react";
import facebook from "./assets/brand-identity_-facebook-128.png";
import instagram from "./assets/instagram-47-128.png";

export function App() {


  return (
    <>
      <Navbar/>

      <Container>
          <Row>
              <Col sm={12}>
                  <hr/>
                  <div className="free_space">
                      <h1> Kazimierscy Studio Estetyki</h1>
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
          </Row>
      </Container>

        {/*<StartPage/>*/}

        <ImgSliderApp/>

        <Footer/>
    </>
  )
}

