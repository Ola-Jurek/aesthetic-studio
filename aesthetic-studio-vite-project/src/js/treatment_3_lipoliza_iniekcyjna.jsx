import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
// import React from "react";
import {Navbar} from "./navbar.jsx";
import React from "react";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import foto from '../assets/team.jpg'
import '../css/_treatment_single.scss';

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

export function TreatmentLipoliza() {

    return (
        <>
            <Navbar/>

            <Container>
                <Row>
                    <Col sm={12}><hr/></Col>

                    <TreatmentSubmenu/>

                </Row>
            </Container>

            <Container fluid style={{ maxWidth: '100vw'}} className="treatment_section1">

                <Row>
                    <Col sm={12} >
                        <h1>Lipoliza iniekcyjna</h1>
                        <p>Skuteczny Sposób na Redukcję Tkanki Tłuszczowej</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        <img src={foto} alt='zdjęcie' className='treatment_photo'></img>
                    </Col>

                    <Col sm={6} className='treatment_small_description'>
                        <h2> Cena: </h2>
                        <p>0d 300 zł </p>

                        <h2>Obszar zabigowy:</h2>
                        <p> </p>

                        <h2>Na problem:</h2>
                        <p> </p>
                    </Col>
                </Row>

            </Container>

            <Container>

                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>

                <Row className="treatment_section2">
                    <Col sm={12}>

                        <p> Lipoliza iniekcyjna to nowoczesna metoda modelowania sylwetki, polegająca na redukcji
                            lokalnych złogów tłuszczu poprzez wstrzyknięcie specjalnych substancji rozkładających
                            tłuszcz. Zabieg ten jest coraz bardziej popularny wśród osób pragnących uzyskać smuklejszą
                            sylwetkę bez konieczności poddawania się inwazyjnym operacjom chirurgicznym.</p>


                        <h3> Dla kogo jest lipoliza iniekcyjna? </h3>

                        <div>

                            <ul>
                                Lipoliza iniekcyjna jest idealna dla osób, które:
                                <li> Mimo zdrowego trybu życia i regularnych ćwiczeń fizycznych nie mogą pozbyć się
                                    uporczywego tłuszczu w niektórych partiach ciała.
                                </li>
                                <li> Chcą zredukować tłuszcz w miejscach takich jak: podbródek, ramiona, brzuch, uda,
                                    biodra, kolana czy pośladki.
                                </li>
                                <li> Poszukują nieinwazyjnych metod modelowania sylwetki, które nie wymagają długiej
                                    rekonwalescencji.
                                </li>
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
                                Zabieg trwa średnio do 30 - 45minut, w zależności od obszaru ciała. Aby uzyskać oczekiwane
                                rezultaty, zaleca się serię 3-6 zabiegów co 4 tygodnie.
                            </p>

                        </div>
                    </Col>
                </Row>


                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}><PriceListItem description={'podbródek'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'brzuch'} price={'300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'uda'} price={'350 PLN'}/></Col>
                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>

            </Container>
            <Footer/>
        </>
    );
}

