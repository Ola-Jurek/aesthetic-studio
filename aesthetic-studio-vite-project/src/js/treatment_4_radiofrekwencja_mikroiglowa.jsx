import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
// import React from "react";
import {Navbar} from "./navbar.jsx";



export function TreatmentRadiofrekwencja() {

    return (
        <>
            <Navbar/>
            <Container fluid style={{padding: 0, margin: 0, maxWidth: '100vw',}}>

                <Row>
                    <Col sm={12} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid green' }}>
                        <h1>Radiofrekwencja Mikroigłowa</h1>
                        <p>Nowoczesna Technologia Odmładzania i Modelowania Skóry</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        {/*<img src={zabieg} alt='zdjęcie' style={{height: '400px',backgroundSize:'cover'}}></img>*/}
                    </Col>
                    <Col sm={4} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid blue' }}>
                        <h3> Cena: </h3>
                        <p>0d 300 zł </p>

                        <h3>Obszar zabigowy:</h3>
                        <p> Różne partie ciała: twarz, szyja, dekolt, brzuch, uda </p>

                        <h3>Na problem:</h3>
                        <p> Odmładzanie i modelowanie skóry </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid pink', textAlign:'start', paddingLeft:'20px' }}>

                        <p>Radiofrekwencja mikroigłowa to innowacyjna metoda poprawy kondycji skóry, która łączy
                            zalety mikronakłuwania i radiofrekwencji. Zabieg ten cieszy się coraz większą popularnością
                            ze względu na swoje wszechstronne działanie i efektywność w redukcji wielu problemów
                            skórnych.
                        </p>


                        <h2> Mechanizm Działania</h2>

                        <div>
                            <h3>Radiofrekwencja mikroigłowa działa na dwóch poziomach: </h3>
                            <ul>
                                <li> 1. Mikronakłuwanie: Specjalne mikroigły wnikają w skórę na określoną głębokość, tworząc
                                    mikrouszkodzenia. Te kontrolowane nakłucia stymulują naturalne procesy regeneracyjne
                                    skóry, pobudzając produkcję kolagenu i elastyny. </li>
                                <li> 2. Radiofrekwencja: Po wprowadzeniu mikroigieł, przez nie emitowane są fale radiowe, które
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


                <Row>
                    <Col sm={3}> </Col>
                    <Col sm={9}>
                        <div>price title</div>
                        <div>price</div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}