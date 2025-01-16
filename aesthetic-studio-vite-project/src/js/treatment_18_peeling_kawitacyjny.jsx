import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";

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

export function TreatmentPeelingKawitacyjny() {
    return (
        <>
            <Navbar/>

            <Container>
                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>
                <Row>
                    <TreatmentSubmenu/>
                </Row>
            </Container>

            <Container fluid style={{maxWidth: '100vw',}} className='treatment_section1'>

                <Row>
                    <Col sm={12}>
                        <h1> Peeling kawitacyjny</h1>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        {/*<img src={zabieg} alt='zdjęcie' style={{height: '400px',backgroundSize:'cover'}}></img>*/}
                    </Col>

                    <Col sm={6} className='treatment_small_description'>
                        <h3> Cena: </h3>
                        <p> od 200 zł</p>

                        <h3>Obszar zabigowy:</h3>
                        <p> Różne partie ciała </p>

                        <h3>Czas trwania</h3>
                        <p> Około 30 minut </p>
                    </Col>
                </Row>

            </Container>

            <Container>

                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>

                <Row className='treatment_section2'>
                    <Col sm={12}>

                        <p>
                            Peeling kawitacyjny to nieinwazyjna i bezbolesna metoda głębokiego oczyszczania skóry, która
                            wykorzystuje ultradźwięki do usunięcia martwego naskórka i zanieczyszczeń. Urządzenie ………..
                            znane z wysokiej jakości i precyzji, zapewnia doskonałe efekty, nadając skórze zdrowy i promienny
                            wygląd już po pierwszym zabiegu.
                        </p>

                        <h3> Dla kogo jest ten zabieg?</h3>

                            <ul>
                                Peeling kawitacyjny jest idealny dla osób:
                                <li> Z problematyczną cerą, skłonną do zaskórników, trądziku i nadmiernego wydzielania sebum.
                                </li>
                                <li> Poszukujących delikatnej metody oczyszczania, która nie podrażnia skóry.
                                </li>
                                <li> Z cerą zmęczoną, matową i pozbawioną blasku, wymagającą odświeżenia.
                                </li>
                                <li> Chcących poprawić nawilżenie skóry i przyspieszyć regenerację.
                                </li>
                                <li> Zmagających się z drobnymi zmarszczkami, które chcą wygładzić skórę.
                                </li>
                                <li> Dla osób z wrażliwą skórą, które szukają delikatnych, a jednocześnie skutecznych zabiegów.
                                </li>
                            </ul>

                            <h3> Jak przygotować się do zabiegu? </h3>

                                <ul>
                                    Przygotowanie do peelingu kawitacyjnego jest niezwykle proste:
                                    <li> Oczyść skórę przed zabiegiem, usuwając makijaż i zanieczyszczenia. </li>
                                    <li> Unikaj peelingów mechanicznych na kilka dni przed wizytą, aby nie podrażniać
                                        skóry.
                                    </li>
                                    <li>Zrezygnuj z ekspozycji na słońce na 24 godziny przed zabiegiem, aby uniknąć
                                        nadwrażliwości
                                        skóry.
                                    </li>
                                </ul>

                            <h3> Przebieg zabiegu: </h3>

                            <ul>
                                <li> Demakijaż i oczyszczanie wstępne – na początku skóra jest dokładnie oczyszczona z
                                    makijażu
                                    i zanieczyszczeń.
                                </li>
                                <li>Aplikacja toniku – skóra jest nawilżona odpowiednim tonikiem, który wspomaga
                                    przewodzenie ultradźwięków.
                                </li>
                                <li> Peeling kawitacyjny – za pomocą specjalnej głowicy emitującej ultradźwięki, martwe komórki
                                    naskórka oraz zanieczyszczenia zostają delikatnie usunięte. Proces ten jest bezbolesny, a
                                    efekt widoczny natychmiastowo.
                                </li>
                                <li> Odżywienie skóry – po peelingu stosuje się serum lub maskę, które lepiej wnikają w skórę
                                    dzięki oczyszczonym porom.
                                </li>
                                <li> Zamknięcie zabiegu – skóra jest tonizowana i nawilżana, aby przywrócić jej naturalną
                                    równowagę.
                                </li>
                            </ul>

                            <h3> Zalecenia po zabiegu:</h3>

                            <ul>
                                <li> Unikaj ekspozycji na słońce przez 24-48 godzin i stosuj krem z filtrem SPF 50.</li>
                                <li> Nawilżaj skórę – stosuj lekkie, nawilżające kremy, które pomogą utrzymać efekt gładkości.</li>
                                <li> Unikaj makijażu przez co najmniej 12 godzin po zabiegu, aby skóra mogła swobodnie
                                    oddychać..</li>
                                <li> Pij dużo wody</li>
                            </ul>


                    </Col>
                </Row>

                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

