import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
// import React from "react";
import {Navbar} from "./navbar.jsx";
import React from "react";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import '../css/_treatment_single.scss';
import radiofrekwencja from '../assets/zabieg_radiofrekwencja.jpg'

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

export function TreatmentRadiofrekwencja() {

    return (
        <>
            <Navbar/>

            <Container>
                <Row>
                    <Col sm={12}><hr/></Col>

                    <TreatmentSubmenu/>

                </Row>
            </Container>

            <Container fluid style={{maxWidth: '100vw',}} className='treatment_section1'>

                <Row>
                    <Col sm={12}>
                        <h1>Radiofrekwencja Mikroigłowa</h1>
                        <p className='treatment_section1_more'>Nowoczesna Technologia Odmładzania i Modelowania Skóry</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        <img src={radiofrekwencja} alt='zdjęcie' className='treatment_photo'></img>
                    </Col>
                    <Col sm={6} className='treatment_small_description'>

                        <h2> Cena: </h2>
                        <p>0d 300 zł </p>

                        <h2>Obszar zabigowy:</h2>
                        <p> Różne partie ciała: twarz, szyja, dekolt, brzuch, uda </p>

                        <h2>Na problem:</h2>
                        <p> Odmładzanie i modelowanie skóry </p>

                    </Col>
                </Row>

            </Container>

            <Container>

                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>

                <Row className='treatment_section2'>
                    <Col sm={12}>

                        <p>Radiofrekwencja mikroigłowa to innowacyjna metoda poprawy kondycji skóry, która łączy
                            zalety mikronakłuwania i radiofrekwencji. Zabieg ten cieszy się coraz większą popularnością
                            ze względu na swoje wszechstronne działanie i efektywność w redukcji wielu problemów
                            skórnych.
                        </p>


                        <h3> Mechanizm Działania</h3>

                        <div>
                            <ul>
                                Radiofrekwencja mikroigłowa działa na dwóch poziomach:
                                <li>Mikronakłuwanie: Specjalne mikroigły wnikają w skórę na określoną głębokość, tworząc
                                    mikrouszkodzenia. Te kontrolowane nakłucia stymulują naturalne procesy regeneracyjne
                                    skóry, pobudzając produkcję kolagenu i elastyny. </li>
                                <li>Radiofrekwencja: Po wprowadzeniu mikroigieł, przez nie emitowane są fale radiowe, które
                                    generują ciepło w głębszych warstwach skóry. Ciepło to powoduje dalszą stymulację
                                    produkcji kolagenu oraz skurczenie się istniejących włókien kolagenowych, co skutkuje
                                    ujędrnieniem i wygładzeniem skóry.</li>
                            </ul>
                        </div>

                        <div>
                            <h3> Na czym polega zabieg? </h3>
                            <p>
                                Zabieg radiofrekwencji mikroigłowej rozpoczyna się od demakijażu i przygotowania skóry do
                                zabiegu. Następnie, za pomocą specjalnego urządzenia firmy Medika wyposażonego w
                                mikroigły, wykonywane są nakłucia skóry, a przez mikroigły emitowane są fale radiowe. Cały
                                proces trwa około 30-60 minut, w zależności od obszaru zabiegowego.
                            </p>

                            <h3> Zalecana seria zabiegów </h3>
                            <p>
                                Aby uzyskać optymalne rezultaty, zaleca się wykonanie serii zabiegów. Liczba sesji jest
                                indywidualnie dostosowywana do potrzeb klienta, ale zazwyczaj wynosi od 3 do 6 zabiegów
                                przeprowadzanych w odstępach 4-6 tygodniowych.
                            </p>

                            <h3> Efekty i rekonwalescencja</h3>
                            <p>
                                Pierwsze efekty radiofrekwencji mikroigłowej można zauważyć już po pierwszym zabiegu,
                                jednak pełne rezultaty są widoczne po zakończeniu serii zabiegów. Skóra staje się jędrniejsza,
                                gładsza, a zmarszczki i blizny zostają zredukowane. Po zabiegu może wystąpić lekkie
                                zaczerwienienie i obrzęk, które ustępują w ciągu kilku dni.
                            </p>

                        </div>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

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
                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>

            </Container>

            <Footer/>
        </>
    );
}