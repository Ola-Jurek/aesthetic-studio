import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import team from "../assets/team.jpg";
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

export function TreatmentMezoterapiaIglowa() {
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
                        <h1>Mezoterapia igłowa</h1>
                        <p className='treatment_section1_more'> Twoja Skóra w Lepszej Formie! </p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        <img src={team} alt='zdjęcie' className='treatment_photo'></img>
                    </Col>
                    <Col sm={6} className='treatment_small_description'>
                        <h2> Cena: </h2>
                        <p>350 zł</p>

                        <h2>Czas trwania:</h2>
                        <p>90 minut</p>

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
                        <p> Mezoterapia igłowa to jeden z najskuteczniejszych zabiegów medycyny estetycznej,
                            który działa od wewnątrz, poprawiając kondycję skóry. Polega na wprowadzeniu składników aktywnych
                            bezpośrednio w głąb skóry za pomocą cienkich igieł. Efektem jest intensywne nawilżenie,
                            regeneracja oraz odmłodzenie skóry.
                        </p>


                        <ul>
                            Dla kogo jest mezoterapia igłowa?
                            <li> Osoby z cerą suchą i odwodnioną – zabieg pomaga w głębokim nawilżeniu skóry. </li>
                            <li> Osoby z oznakami starzenia – redukuje drobne zmarszczki, poprawia elastyczność i napięcie skóry.</li>
                            <li> Osoby z problemem łysienia – wspomaga wzrost włosów i poprawia ich kondycję - czytaj więcej w dziale trychologia. </li>
                            <li> Osoby z bliznami potrądzikowymi – wspiera procesy regeneracyjne skóry, wygładzając jej strukturę. </li>
                        </ul>


                        <h3> Ile zabiegów potrzeba? </h3>
                        <ul>
                            <li> Standardowa kuracja to seria 3-6 zabiegów, wykonywanych co 2-4 tygodnie. </li>
                            <li> Pierwsze efekty są widoczne już po kilku dniach, jednak dla optymalnych rezultatów zaleca się pełną serię zabiegów.</li>
                            <li> Dla podtrzymania efektu rekomenduje się powtarzanie zabiegu co kilka miesięcy. </li>
                        </ul>

                        <h3> Przeciwwskazania: </h3>
                        <ul>
                            <li> Ciąża i karmienie piersią </li>
                            <li> Choroby autoimmunologiczne </li>
                            <li> Alergie na składniki preparatu </li>
                            <li> Infekcje skórne (np. opryszczka) </li>
                            <li> Aktywne stany zapalne skóry </li>
                            <li> Skłonność do bliznowacenia i keloidów </li>
                            <li> Przeziębienie i antybiotykoterapia </li>
                        </ul>

                        <h3> Zalecenie pozabiegowe: </h3>
                        <ul>
                            <li> Unikaj słońca – przez kilka dni po zabiegu należy stosować kremy z filtrem SPF 50+. </li>
                            <li> Nawilżanie – zwiększ nawilżenie skóry, stosując kremy regenerujące. </li>
                            <li> Odstaw makijaż na co najmniej 24 godziny po zabiegu, aby pozwolić skórze się zregenerować. </li>
                            <li> Unikaj wysiłku fizycznego i sauny przez 48 godzin po zabiegu, aby zminimalizować ryzyko podrażnień. </li>
                            <li> Pij dużo wody – odpowiednie nawodnienie wspomaga proces regeneracji skóry. </li>
                        </ul>

                        <p> Umów się na konsultację i odkryj piękno swojej skóry!  </p>

                        <p> Jeśli chcesz dowiedzieć się więcej o mezoterapii igłowej, zapraszamy do kontaktu!
                            Nasi specjaliści chętnie odpowiedzą na wszystkie pytania i pomogą dobrać
                            odpowiedni plan zabiegowy dla Twojej skóry.
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
