import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
// import React from "react";
import {Navbar} from "./navbar.jsx";



export function TreatmentLipoliza() {

    return (
        <>
            <Navbar/>
            <Container fluid style={{padding: 0, margin: 0, maxWidth: '100vw',}}>

                <Row>
                    <Col sm={12} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid green' }}>
                        <h1>Lipoliza iniekcyjna</h1>
                        <p>Skuteczny Sposób na Redukcję Tkanki Tłuszczowej</p>
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
                        <p> </p>

                        <h3>Na problem:</h3>
                        <p> </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid pink', textAlign:'start', paddingLeft:'20px' }}>

                        <p> Lipoliza iniekcyjna to nowoczesna metoda modelowania sylwetki, polegająca na redukcji
                            lokalnych złogów tłuszczu poprzez wstrzyknięcie specjalnych substancji rozkładających
                            tłuszcz. Zabieg ten jest coraz bardziej popularny wśród osób pragnących uzyskać smuklejszą
                            sylwetkę bez konieczności poddawania się inwazyjnym operacjom chirurgicznym.</p>


                        <h2> Dla kogo jest lipoliza iniekcyjna? </h2>

                        <div>
                            <h3>Lipoliza iniekcyjna jest idealna dla osób, które: </h3>
                            <ul>
                                <li> Mimo zdrowego trybu życia i regularnych ćwiczeń fizycznych nie mogą pozbyć się uporczywego tłuszczu w niektórych partiach ciała. </li>
                                <li> Chcą zredukować tłuszcz w miejscach takich jak: podbródek, ramiona, brzuch, uda, biodra, kolana czy pośladki. </li>
                                <li> Poszukują nieinwazyjnych metod modelowania sylwetki, które nie wymagają długiej rekonwalescencji. </li>
                                <li> Mają stabilną wagę i pragną poprawić kontury swojego ciała.</li>
                            </ul>
                        </div>

                        <div>
                            <h3> Jak przebiega zabieg? </h3>
                            <p>
                                Zabieg lipolizy iniekcyjnej polega na wstrzyknięciu w tkankę tłuszczową substancji
                                aktywnych, które rozkładają komórki tłuszczowe. Proces ten jest kontrolowany i bezpieczny,
                                a jego efekty są trwałe, pod warunkiem utrzymania zdrowego stylu życia. Zabieg jest
                                wykonywany w seriach, najczęściej co 2-4 tygodnie, w zależności od obszaru i ilości tkanki
                                tłuszczowej.
                            </p>

                            <h3> Ilość zabiegów </h3>
                           <p>
                               Liczba zabiegów potrzebnych do osiągnięcia optymalnych rezultatów jest indywidualna i
                               zależy od wielkości obszaru, który ma być poddany lipolizie, oraz od reakcji organizmu na
                               substancje wstrzyknięte. Zazwyczaj seria obejmuje od 2 do 6 zabiegów.
                           </p>

                            <h3> Efekty i rekonwalescencja</h3>
                            <p>
                                Pierwsze efekty lipolizy iniekcyjnej można zauważyć już po kilku tygodniach od pierwszego
                                zabiegu, jednak pełne rezultaty widoczne są po zakończeniu całej serii. Po zabiegu klient
                                może wrócić do codziennych czynności niemal od razu, choć zaleca się unikanie
                                intensywnego wysiłku fizycznego przez kilka dni. Mogą pojawić się drobne siniaki i
                                opuchlizna, które ustępują w ciągu kilku dni.
                            </p>

                            <h3> Bezpieczeństwo</h3>
                            <p>
                                Lipoliza iniekcyjna to skuteczny sposób na redukcję tkanki tłuszczowej i modelowanie
                                sylwetki, który może pomóc wielu osobom osiągnąć wymarzoną figurę bez potrzeby
                                korzystania z bardziej inwazyjnych metod. Jeśli masz pytania lub chcesz umówić się na
                                konsultację, skontaktuj się z nami!
                            </p>

                            <h3> Czas trwania i częstotliwość</h3>
                            <p>
                                Zabieg trwa średnio do 30 -45minut, w zależności od obszaru ciała. Aby uzyskać oczekiwane
                                rezultaty, zaleca się serię 3-6 zabiegów co 4 tygodnie.
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

