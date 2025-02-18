import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import {Footer} from "./footer.jsx";

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

export function TreatmentMezoterapiaMikroiglowa() {
    return (
        <>
            <Navbar/>

            <Container>
                <Row>
                    <Col sm={12}><hr/></Col>

                    <TreatmentSubmenu/>

                </Row>
            </Container>


            <Container fluid style={{ maxWidth: '100vw'}} className='treatment_section1'>

                <Row>
                    <Col sm={12}>
                        <h1>Mezoterapia mikroigłowa</h1>
                        <p> Skuteczna Regeneracja Skóry!  </p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        {/*<img src={zabieg} alt='zdjęcie' className='treatment_photo'></img>*/}
                    </Col>
                    <Col sm={6} className='treatment_small_description'>
                        <h2> Cena: </h2>
                        <p> od 300 zł</p>

                        <h2>Czas trwania:</h2>
                        <p> 60 minut </p>

                        <h2>Na problem:</h2>
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
                        <p> Mezoterapia mikroigłowa, zwana również mikronakłuwaniem, to innowacyjny zabieg,
                            który pobudza skórę do intensywnej regeneracji. Za pomocą specjalnego urządzenia z
                            mikroigłami tworzone są mikroskopijne nakłucia, co stymuluje produkcję kolagenu i
                            elastyny oraz ułatwia wchłanianie składników aktywnych. Efektem jest widoczna
                            poprawa kondycji i wyglądu skóry.
                        </p>


                        <ul>
                            Dla kogo jest mezoterapia mikroigłowa?
                            <li> Osoby z oznakami starzenia – zabieg redukuje drobne zmarszczki i poprawia napięcie skóry. </li>
                            <li> Osoby z bliznami potrądzikowymi – mikronakłuwanie wspiera wygładzenie i rozjaśnienie blizn. </li>
                            <li> Osoby z rozszerzonymi porami – zabieg zmniejsza widoczność porów i poprawia strukturę skóry. </li>
                            <li> Osoby z przebarwieniami – pomaga wyrównać koloryt skóry. </li>
                            <li> Osoby z utratą jędrności skóry – zabieg poprawia elastyczność i ogólną kondycję skóry. </li>
                        </ul>


                        <h3> Ile zabiegów potrzeba? </h3>
                        <ul>
                            <li> Zaleca się serię 3-6 zabiegów, wykonywanych co 3-4 tygodnie, aby uzyskać najlepsze rezultaty. </li>
                            <li> Pierwsze efekty można zauważyć już po pierwszym zabiegu, jednak pełna regeneracja skóry następuje po zakończeniu serii.</li>
                            <li> Dla utrzymania efektów zaleca się powtarzanie zabiegu co 6-12 miesięcy. </li>
                        </ul>

                        <h3> Przeciwwskazania: </h3>
                        <ul>
                            <li> Ciąża i karmienie piersią </li>
                            <li> Choroby autoimmunologiczne </li>
                            <li> Aktywne infekcje skórne (np. opryszczka) </li>
                            <li> Skłonność do keloidów i bliznowacenia </li>
                            <li> Cukrzyca (niewyrównana) </li>
                            <li> Skóra naczynkowa i trądzik różowaty w fazie aktywnej </li>
                            <li> Przeziębienie i antybiotykoterapia </li>
                        </ul>

                        <h3> Zalecenie pozabiegowe: </h3>
                        <ul>
                            <li> Unikaj ekspozycji na słońce przez 2 tygodnie po zabiegu, stosując krem z filtrem SPF 50+. </li>
                            <li> Zadbaj o nawilżenie skóry – używaj kremów regenerujących i nawilżających przez kilka dni po zabiegu. </li>
                            <li> Nie stosuj makijażu przez 24-48 godzin, aby umożliwić skórze pełną regenerację. </li>
                            <li> Unikaj intensywnego wysiłku fizycznego, sauny i basenu przez 48 godzin, aby zmniejszyć ryzyko podrażnień. </li>
                            <li> Pij dużo wody, co pomoże w regeneracji i nawodnieniu skóry. </li>
                        </ul>

                        <p> Odkryj swoją nową skórę dzięki mezoterapii mikroigłowej! </p>

                        <p> Zapraszamy na konsultację, gdzie nasi specjaliści dobiorą odpowiedni plan zabiegowy dostosowany
                            do Twoich potrzeb. Pozwól sobie na młodszy i zdrowszy wygląd skóry – już dziś umów się na wizytę!
                        </p>

                    </Col>
                </Row>

                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}><PriceListItem description={'trzy etapowy protokół zabiegowy'} price={'350 PLN'}/></Col>

                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>

            </Container>

            <Footer/>
        </>
    );
}

