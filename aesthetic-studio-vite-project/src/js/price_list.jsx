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

            <Container className='price_list_submenu'>
                <Row className='submenu' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
                    <Col sm={12}><hr/></Col>

                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price1" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> Terapia blizn metodą Skarnik </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price2" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> zamykanie naczynek </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price3" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> Usuwanie  pigmentów </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price4" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> Depilacja laserowa </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price5" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> radiofrekwencja mikroigłowa </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price6" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> btx </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price7" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> makijaż permanentny </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price8" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> modelowanie ust </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price9" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> mezoterapia igłowa </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price10" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> mezoterapia mikroigłowa </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price11" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> lipoliza </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price12" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> peeling węglowy </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price13" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> Peeling Chemiczny </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price14" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> oczyszczanie wodorowe </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price15" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> Zabieg pielęgnacyjny </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price16" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> Stylizacja brwi </Link></Col>
                        <Col sm={1.3} className='submenu_item'  style={{ display: 'flex', justifyContent: 'center', margin: '10px 10px' }}> <Link to="price17" activeClass="active" spy={true} offset={-50} smooth={true} duration={500}> Konsultacja </Link></Col>
                     {/*<Col sm={12}><hr/></Col>*/}
                </Row>
            </Container>


            <Container className='price_list_section' style={{marginTop: '50px',}}>
                <Row className='price_list_row'>

                    <Col sm={12}><h1> CENNIK </h1></Col>

                    {/*BLIZNY*/}
                    <Col sm={12} id="price1">{<PriceListHeading title={'Terapia blizn metodą Skarnik'}/>}</Col>
                    <Col sm={12} ><h3 className='heading_description'> Amazink Puro</h3></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'blizny | rozstępy'} price={'od 200 pln'}/></Col>
                        <Col sm={12}><hr/></Col>


                    {/*LASER NACZYNKA*/}
                    <Col sm={12} id="price2">{<PriceListHeading title={'Laserowe zamykanie naczynek'}/>}</Col>
                    <Col sm={12} ><h3 className='heading_description'> QuadroStar Yellow Pro </h3></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'Pojedyńcze naczynka'} price={'100 pln'}/></Col>
                    <Col sm={12}><PriceListItem description={'Nos'} price={'200 pln'}/></Col>
                    <Col sm={12}><PriceListItem description={'Broda'} price={'200 pln'}/></Col>
                    <Col sm={12}><PriceListItem description={'Policzki'} price={'300 pln'}/></Col>
                    <Col sm={12}><PriceListItem description={'Twarz'} price={'400 pln'}/></Col>
                        <Col sm={12}><hr/></Col>


                    {/*LASER PIGMENT*/}
                    <Col sm={12} id='price3'>{<PriceListHeading title={'Usuwanie laserowe pigmentów'} />}</Col>
                    <Col sm={12} ><h3 className='heading_description'> Q - Switch ND:YAG </h3></Col>
                    <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'tatuaż/makijaż permanentny'} price={'od 150 PLN'}/></Col>
                    <Col sm={12}><hr/></Col>

                    {/*DEPILACJA LASEROWA*/}
                    <Col sm={12} id='price4'>{<PriceListHeading title={'Depilacja laserowa - epilacja'}/>} </Col>
                    <Col sm={12} ><h3 className='heading_description'> Medika Trio Laser CE</h3></Col>
                    <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'wąsik'} price={'80 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'broda'} price={'80 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'pachy'} price={'150 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'bikini płytkie'} price={'150 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'bikini głębokie'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'łydki'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'uda'} price={'300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'całe nogi'} price={'od 500 PLN'}/></Col>
                    <Col sm={12}> <p className='price_list_text'>Pozostałe strefy wyceniane indywidualnie</p></Col>
                    <Col sm={12}><hr/></Col>

                    {/*RADIOFREKWENCJA MIKROIGLOWA*/}
                    <Col sm={12} id='price5'>{<PriceListHeading title={'radiofrekwencja mikroigłowa'}/>}</Col>
                    <Col sm={12} ><h3 className='heading_description'> Medika RFrax Lift</h3></Col>
                    <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'twarz'} price={'550 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'szyja'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja'} price={'700 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dekolt'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja + dekolt'} price={'850 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'brzuch'} price={'od 400 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'uda'} price={'od 400 PLN'}/></Col>
                    <Col sm={12}><hr/></Col>

                    {/*BTX*/}
                    <Col sm={12} id='price6'>{<PriceListHeading title={'btx'}/>}</Col>
                    <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'jedna partia'} price={'300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dwie partie'} price={'500 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'trzy partie'} price={'700 PLN'}/></Col>
                    <Col sm={12}><p className='price_list_text'> Przykładowe partie: boczny kąt oka (kurze łapki), gładzizna czoła (lwia zmarszczka), zmarszczki
                        poprzeczne czoła.</p></Col>
                    <Col sm={12}><hr/></Col>

                    {/*MAKIJAŻ PERMANENTNY*/}
                    <Col sm={12} id='price7'>{<PriceListHeading title={'makijaż permanentny'}/>}</Col>
                    <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'brwi'} price={'700 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'usta'} price={'700 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'kreski'} price={'650 PLN'}/></Col>
                    <Col sm={12}><hr/></Col>

                    {/*MODELOWANIE UST*/}
                    <Col sm={12} id='price8'>{<PriceListHeading title={'modelowanie'}/>}</Col>
                    <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'usta'} price={'800 PLN'}/></Col>
                    <Col sm={12}><hr/></Col>


                    {/*MEZOTERAPIA IGŁOWA*/}
                    <Col sm={12} id='price9'>{<PriceListHeading title={'mezoterapia igłowa'}/>}</Col>
                    <Col sm={12} ><h3 className='heading_description'> Dermartic1</h3></Col>
                    <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'twarz'} price={'350 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'skóra głowy'} price={'300 PLN'}/></Col>
                    <Col sm={12}><hr/></Col>


                    {/*MEZOTERAPIA MIKROIGŁOWA*/}
                    <Col sm={12} id='price10'>{<PriceListHeading title={'mezoterapia mikroigłowa'}/>}</Col>
                    <Col sm={12} ><h3 className='heading_description'> Dermapen DivesMed</h3></Col>
                    <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'dermapen + mezokoktajl'} price={'300 PLN'}/></Col>
                    <Col sm={12}><hr/></Col>


                    {/*LIPOLIZA*/}
                    <Col sm={12} id='price11'>{<PriceListHeading title={'lipoliza'}/>}</Col>
                    <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'podbródek'} price={'300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'brzuch'} price={'od 300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'okolice bioder (boczki)'} price={'od 300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'ramiona'} price={'od 300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'uda'} price={'od 300 PLN'}/></Col>
                    <Col sm={12}><hr/></Col>


                    {/*PEELING WĘGLOWY*/}
                    <Col sm={12} id="price12">{<PriceListHeading title={'peeling węglowy'} />}</Col>
                    <Col sm={12} ><h3 className='heading_description'> Black Doll </h3></Col>
                    <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'twarz'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja'} price={'220 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja + dekolt'} price={'250 PLN'}/></Col>
                    <Col sm={12}><hr/></Col>


                    {/*PEELING CHEMICZNY*/}
                    <Col sm={12} id="price13">{<PriceListHeading title={'Peeling Chemiczny'}/>}</Col>
                    <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'mesoesthetic'} price={'200 pln'}/></Col>
                    <Col sm={12}><PriceListItem description={'peeling + mezoterapia'} price={'300 pln'}/></Col>
                    <Col sm={12}><hr/></Col>


                    {/*OCZYSZCZANIE WODOROWE*/}
                    <Col sm={12} id="price14">{<PriceListHeading title={'oczyszczanie wodorowe'} />}</Col>
                    <Col sm={12} ><h3 className='heading_description'> M'onduniq AQUAMETIQ HYDRA PRIME </h3></Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'pakiet podstawowy'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'pakiet premium'} price={'300 PLN'}/></Col>
                        <Col sm={12}><hr/></Col>


                    {/*ZABIEG PIELĘGNACYJNY*/}
                    <Col sm={12} id='price15'>{<PriceListHeading title={'Zabieg pielęgnacyjny'}/>}</Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'Gen Factor'} price={'od 200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'Peeling Kawitacyjny + GEN Factor'} price={'220 PLN'}/></Col>
                        <Col sm={12}><hr/></Col>


                    {/*STYLIZACJA BRWI*/}
                     <Col sm={12} id='price16'>{<PriceListHeading title={'Stylizacja brwi'}/>}</Col>
                        <Col sm={12}><hr/></Col>
                    <Col sm={12}><PriceListItem description={'Henna Pudrowa'} price={'80 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'Laminacja + Koloryzacja'} price={'120 PLN'}/></Col>
                        <Col sm={12}><hr/></Col>


                    <Col sm={12} id='price17'>{<PriceListHeading title={'Konsultacja'}/>}</Col>
                    <Col sm={12}><hr/></Col>
                    <Col sm={12} ><p className='price_list_text'> Wszystkie konsultacje związane z wykonywanymi zabiegami w naszym Studio wykonujemy bezpłatnie </p></Col>
                    <Col sm={12}><hr/></Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}
