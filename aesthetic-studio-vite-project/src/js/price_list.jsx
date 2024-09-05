import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import {Navbar} from "./navbar.jsx";
import '../css/_price_list.scss';
import '../css/settings/reset.scss';
import {Container, Row, Col} from "react-grid-system";
import {Contact} from "./contact.jsx";
import { Link, animateScroll as scroll } from 'react-scroll';
import {Footer} from "./footer.jsx";



function PriceListHeading(props) {
    return (
        <>
                <h2 className='price_list_heading'> {props.title} </h2>
        </>
    );
}

function PriceListItem(props) {
    return (
        <>
                <div className='price_list_item'>
                    <a className='price_list_description'> {props.description} </a>
                    <a className='price_list_price'> {props.price} </a>
                </div>
        </>
    );
}



export function PriceList() {
    return (
        <>
            <Navbar/>

            <Container>
                <Row className='submenu' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
                    <Col sm={12}><hr/></Col>
                        <Col sm={1.3} className='submenu_item' style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to='price1' activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> Peeling chemiczny </Link> </Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to='price2' activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> Peeling węglowy </Link> </Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to='price3' activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> Oczyszczanie wodorowe </Link> </Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to='price4' activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> usuwanie laserowe </Link> </Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to='price5' activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> epilacja laserowa </Link> </Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to='price6' activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> radiofrekwencja mikroigłowa </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to='price7' activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> mezoterapia igłowa </Link> </Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to='price8' activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> mezoterapia mikroigłowa </Link> </Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to='price9' activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> btx </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to='price10' activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> makijaż permanentny </Link> </Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to='price11' activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> modelowanie </Link> </Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to='price12' activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> lipoliza </Link> </Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price13" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> osocze bogatopłytkowe </Link></Col>
                     <Col sm={12}><hr/></Col>
                </Row>
            </Container>


            <Container className='container price_list_section' style={{marginTop: '50px',}}>
                <Row className='row'>

                    <Col sm={12}><h1> CENNIK </h1></Col>

                    <Col sm={12} id="price1">{<PriceListHeading title={'Peeling Chemiczny'}/>}</Col>
                    <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'dives'} price={'180-250 pln'}/></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12} id="price2">{<PriceListHeading title={'peeling węglowy'} />}</Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'twarz'} price={'150 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja + dekolt'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'plecy'} price={'300 PLN'}/></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12} id="price3">{<PriceListHeading title={'oczyszczanie wodorowe'} />}</Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'pakiet podstawowy'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'pakiet premium'} price={'300 PLN'}/></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12} id='price4'>{<PriceListHeading title={'usuwanie laserowe'} />}</Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'tatuaż/makijaż permanentny'} price={'od 150 PLN'}/></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12} id='price5'>{<PriceListHeading title={'epilacja laserowa'}/>} </Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'twarz(wąsik + broda + szyja'} price={'150 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'pachy'} price={'150 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'kark'} price={'150 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'przedramiona'} price={'150 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'ramiona'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'klatka pierisowa'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'górna część pleców'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dolna część pleców'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'brzuch'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'bikini płytkie(linia majtek)'} price={'150 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'bikini głębokie'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'łydki'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'uda'} price={'300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'stopy'} price={'150 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dłonie'} price={'100 PLN'}/></Col>

                    <Col sm={12}><a className='price_list_text'> Pozostałe strefy wyceniane indywidualnie</a></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12} id='price6'>{<PriceListHeading title={'radiofrekwencja mikroigłowa'}/>}</Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'twarz'} price={'550 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'szyja'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja'} price={'700 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dekolt'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'biust'} price={'500 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja + dekolt'} price={'850 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dłonie'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'brzuch(rozstępy)'} price={'od 400 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'uda'} price={'od 400 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'blizny'} price={'od 250 PLN'}/></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12} id='price7'>{<PriceListHeading title={'mezoterapia igłowa'}/>}</Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'trzy etapowy protokół zabiegowy'} price={'350 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'mezoterapia skóry głowy'} price={'300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'mezoterapia dr.cyj'} price={'500 PLN'}/></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12} id='price8'>{<PriceListHeading title={'mezoterapia mikroigłowa'}/>}</Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'peeling chemiczny + dermapen + ampułka'} price={'450 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dermapen + ampułka'} price={'350 PLN'}/></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12} id='price9'>{<PriceListHeading title={'btx'}/>}</Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'jedna partia'} price={'300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dwie partie'} price={'500 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'trzy partie'} price={'700 PLN'}/></Col>

                    <Col sm={12}><a> Przykładowe partie: boczny kąt oka (kurze łapki), gładzizna czoła (lwia zmarszczka), zmarszczki
                        poprzeczne czoła.</a></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12} id='price10'>{<PriceListHeading title={'makijaż permanentny'}/>}</Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'brwi'} price={'700 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'usta'} price={'700 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'kreska na powiece'} price={'600 PLN'}/></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12} id='price11'>{<PriceListHeading title={'modelowanie'}/>}</Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'usta'} price={'800 PLN'}/></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12} id='price12'>{<PriceListHeading title={'lipoliza'}/>}</Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'podbródek'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'brzuch'} price={'300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'uda'} price={'350 PLN'}/></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12} id='price13'>{<PriceListHeading title={'osocze bogatopłytkowe'}/>}</Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'twarz'} price={'650 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja'} price={'800 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja + dekolt'} price={'900 PLN'}/></Col>
                        <Col sm={12}><hr/></Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}
