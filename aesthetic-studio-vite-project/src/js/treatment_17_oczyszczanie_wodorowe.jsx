import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";


export function TreatmentOczyszczanieWodorowe() {
    return (
        <>
            <Navbar/>
            <Container fluid style={{padding: 0, margin: 0, maxWidth: '100vw',}}>

                <Row>
                    <Col sm={12} style={{
                        wordWrap: 'break-word',
                        lineHeight: '1.6',
                        padding: '10px',
                        border: '2px solid green'
                    }}>
                        <h1>Oczyszczanie Wodorowe</h1>
                        <h2>z wykorzystaniem urządzenienia M'onduniq</h2>

                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        {/*<img src={zabieg} alt='zdjęcie' style={{height: '400px',backgroundSize:'cover'}}></img>*/}
                    </Col>
                    <Col sm={4} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid blue' }}>
                        <h3> Cena: </h3>
                        <p> od 250 zł</p>

                        <h3>Obszar zabigowy:</h3>
                        <p> Różne partie ciała </p>

                        <h3>Na problem:</h3>
                        <p> Poprawa kondycji skóry </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid pink', textAlign:'start', paddingLeft:'20px' }}>

                        <p>
                            Oczyszczanie wodorowe to nowoczesny zabieg kosmetologiczny, który łączy w sobie działanie
                            wodoru z zaawansowaną technologią, by zapewnić skórze głębokie oczyszczenie i rewitalizację.
                            Korzystając z urządzenia renomowanej firmy M&#39;onduniq, możemy osiągnąć spektakularne efekty
                            pielęgnacyjne, które są widoczne już po pierwszej wizycie.
                        </p>


                        <h2> Dla kogo jest ten zabieg?</h2>

                        <div>
                            <h3>Oczyszczanie wodorowe jest idealne dla osób: </h3>
                            <ul>
                                <li> Zmagających się z nadmiarem sebum, zaskórnikami i innymi niedoskonałościami.
                                </li>
                                <li> Pragnących poprawić kondycję skóry, nadając jej zdrowy blask i jednolity koloryt.
                                </li>
                                <li> Z oznakami starzenia, takimi jak drobne zmarszczki i utrata jędrności skóry.
                                </li>
                                <li> Z cerą narażoną na zanieczyszczenia środowiskowe, wymagającą dogłębnego oczyszczenia.
                                </li>
                                <li> Z cerą wrażliwą, skłonną do podrażnień, ponieważ zabieg jest łagodny i nieinwazyjny.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3> Jak przygotować się do zabiegu? </h3>
                            <p>
                                Przygotowanie do oczyszczania wodorowego jest bardzo proste:
                            </p>
                            <ul>
                                <li> Przyjdź na zabieg z oczyszczoną skórą - unikanie ciężkiego makijażu przed wizytą pomoże w
                                    lepszym działaniu zabiegu. </li>
                                <li> Unikaj ekspozycji na słońce - przynajmniej na 24 godziny przed zabiegiem, aby
                                    zminimalizować ryzyko podrażnień.</li>
                                <li>Zrezygnuj z intensywnych peelingów - na kilka dni przed zabiegiem, aby skóra była w jak
                                    najlepszej kondycji..</li>
                            </ul>

                            <h3> Przebieg zabiegu z urządzeniem M'onduniq: </h3>

                            <ul>
                                <li> Oczyszczanie skóry – na początek skóra jest delikatnie oczyszczana z makijażu i
                                    zanieczyszczeń.
                                </li>
                                <li>Aplikacja wodoru – urządzenie M&#39;onduniq dostarcza aktywny wodór do skóry, gdzie działa on
                                    na poziomie komórkowym, neutralizując wolne rodniki.
                                </li>
                                <li> Eksfoliacja – usunięcie martwego naskórka, co pozwala na głębsze wnikanie substancji
                                    aktywnych.
                                </li>
                                <li> Nawilżenie i odżywienie – skóra jest intensywnie nawilżana i odżywiana odpowiednio
                                    dobranymi preparatami.
                                </li>
                                <li> Zamknięcie porów – dzięki chłodzeniu, pory zostają zamknięte, a skóra staje się gładka i
                                    miękka.
                                </li>
                            </ul>

                            <h3> Zalecenia po zabiegu:</h3>

                            <ul>
                                <li> Unikaj słońca przez 24-48 godzin po zabiegu i stosuj krem z filtrem SPF 50.</li>
                                <li> Nawilżaj skórę – używaj delikatnych kremów nawilżających, aby podtrzymać efekt zabiegu.</li>
                                <li> Unikaj intensywnego makijażu i kosmetyków o ciężkiej konsystencji przez 24 godziny.</li>
                                <li> Pij dużo wody – wspomaga to naturalny proces oczyszczania organizmu.</li>
                                <li> Unikaj sauny i gorących kąpieli – przez 48 godzin, aby uniknąć podrażnień.</li>
                            </ul>

                            <p> Zabieg oczyszczania wodorowego to doskonały sposób na odświeżenie i regenerację skóry, polecany
                                dla osób w każdym wieku, pragnących zadbać o zdrowy i promienny wygląd swojej cery.
                            </p>

                            <p>
                                Zachęcamy do konsultacji i umówienia się na wizytę, aby Twoja skóra poczuła różnicę!
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
