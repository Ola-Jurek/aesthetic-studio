
import './App.scss'
import {Navbar} from "./js/navbar.jsx";
import {Footer} from "./js/footer.jsx";
import {StartPage} from "./js/start_page.jsx";
import {ImgSliderApp} from "./js/imgSliderApp.jsx";
import './css/_imgSlider_app.scss';
import {Col, Container, Row} from "react-grid-system";
import React from "react";
import facebook from "./assets/facebook-app.png";
import instagram from "./assets/instagram-app.png";

export function App() {


  return (
    <>
      <Navbar/>

      <Container>
          <Row>
              <Col sm={12}>
                  <hr/>
              </Col>

              <Col sm={4}></Col>

              <Col sm={4}>
                  <h2 className='h2_main_page'> Kazimierscy Studio Estetyki</h2>
              </Col>

              <Col sm={4}>
                  <div className="free_space">

                      <div className='app-icons'>
                          <a href='https://www.facebook.com/estetykastudio'>
                              <img src={facebook} alt='facebook' height={40} width={40}/>
                          </a>
                      </div>

                      <div className='app-icons'>
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

