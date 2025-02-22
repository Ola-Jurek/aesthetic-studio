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

export function TreatmentOczyszczanieWodorowe() {
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
                        <h1>Oczyszczanie Wodorowe</h1>
                        <p className='treatment_section1_more'>z wykorzystaniem urządzenienia M'onduniq</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        {/*<img src={zabieg} alt='zdjęcie' style={{height: '400px',backgroundSize:'cover'}}></img>*/}
                    </Col>

                    <Col sm={6} className='treatment_small_description'>
                        <h3> Cena: </h3>
                        <p> od 250 zł</p>

                        <h3>Obszar zabigowy:</h3>
                        <p> Różne partie ciała </p>

                        <h3>Na problem:</h3>
                        <p> Poprawa kondycji skóry </p>
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
                            Oczyszczanie wodorowe to nowoczesny zabieg kosmetologiczny, który łączy w sobie działanie
                            wodoru z zaawansowaną technologią, by zapewnić skórze głębokie oczyszczenie i rewitalizację.
                            Korzystając z urządzenia renomowanej firmy M&#39;onduniq, możemy osiągnąć spektakularne
                            efekty
                            pielęgnacyjne, które są widoczne już po pierwszej wizycie.
                        </p>

                        <h3> Dla kogo jest ten zabieg?</h3>

                            <ul>
                                Oczyszczanie wodorowe jest idealne dla osób:
                                <li> Zmagających się z nadmiarem sebum, zaskórnikami i innymi niedoskonałościami.
                                </li>
                                <li> Pragnących poprawić kondycję skóry, nadając jej zdrowy blask i jednolity koloryt.
                                </li>
                                <li> Z oznakami starzenia, takimi jak drobne zmarszczki i utrata jędrności skóry.
                                </li>
                                <li> Z cerą narażoną na zanieczyszczenia środowiskowe, wymagającą dogłębnego
                                    oczyszczenia.
                                </li>
                                <li> Z cerą wrażliwą, skłonną do podrażnień, ponieważ zabieg jest łagodny i
                                    nieinwazyjny.
                                </li>
                            </ul>

                        <h3> Jak przygotować się do zabiegu? </h3>

                            <ul>
                                Przygotowanie do oczyszczania wodorowego jest bardzo proste:
                                <li> Przyjdź na zabieg z oczyszczoną skórą - unikanie ciężkiego makijażu przed wizytą
                                    pomoże w
                                    lepszym działaniu zabiegu. </li>
                                <li> Unikaj ekspozycji na słońce - przynajmniej na 24 godziny przed zabiegiem, aby
                                    zminimalizować ryzyko podrażnień.
                                </li>
                                <li>Zrezygnuj z intensywnych peelingów - na kilka dni przed zabiegiem, aby skóra była w
                                    jak
                                    najlepszej kondycji..
                                </li>
                            </ul>

                            <h3> Przebieg zabiegu z urządzeniem M'onduniq: </h3>

                            <ul>
                                <li> Oczyszczanie skóry – na początek skóra jest delikatnie oczyszczana z makijażu i
                                    zanieczyszczeń.
                                </li>
                                <li>Aplikacja wodoru – urządzenie M&#39;onduniq dostarcza aktywny wodór do skóry, gdzie
                                    działa on
                                    na poziomie komórkowym, neutralizując wolne rodniki.
                                </li>
                                <li> Eksfoliacja – usunięcie martwego naskórka, co pozwala na głębsze wnikanie
                                    substancji
                                    aktywnych.
                                </li>
                                <li> Nawilżenie i odżywienie – skóra jest intensywnie nawilżana i odżywiana odpowiednio
                                    dobranymi preparatami.
                                </li>
                                <li> Zamknięcie porów – dzięki chłodzeniu, pory zostają zamknięte, a skóra staje się
                                    gładka i
                                    miękka.
                                </li>
                            </ul>

                            <h3> Zalecenia po zabiegu:</h3>

                            <ul>
                                <li> Unikaj słońca przez 24-48 godzin po zabiegu i stosuj krem z filtrem SPF 50.</li>
                                <li> Nawilżaj skórę – używaj delikatnych kremów nawilżających, aby podtrzymać efekt
                                    zabiegu.
                                </li>
                                <li> Unikaj intensywnego makijażu i kosmetyków o ciężkiej konsystencji przez 24
                                    godziny.
                                </li>
                                <li> Pij dużo wody – wspomaga to naturalny proces oczyszczania organizmu.</li>
                                <li> Unikaj sauny i gorących kąpieli – przez 48 godzin, aby uniknąć podrażnień.</li>
                            </ul>


                            <h3/>
                            <p> Zabieg oczyszczania wodorowego to doskonały sposób na odświeżenie i regenerację
                                skóry, polecany
                                dla osób w każdym wieku, pragnących zadbać o zdrowy i promienny wygląd swojej cery.
                            </p>

                            <p>
                                Zachęcamy do konsultacji i umówienia się na wizytę, aby Twoja skóra poczuła różnicę!
                            </p>


                    </Col>
                </Row>


                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}><PriceListItem description={'pakiet podstawowy'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'pakiet premium'} price={'300 PLN'}/></Col>
                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>

            </Container>
            <Footer/>
        </>
    );
}
