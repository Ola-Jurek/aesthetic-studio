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

export function TreatmentRadiofrekwencjaBeziglowa() {
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
                        <h1>Radiofrekwencja Bezigłowa (RF)</h1>
                        <p> Skuteczne Ujędrnianie i Odmładzanie Skóry! </p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        {/*<img src={zabieg} alt='zdjęcie' className='treatment_photo'></img>*/}
                    </Col>
                    <Col sm={6} className='treatment_small_description'>
                        <h2> Cena: </h2>
                        <p> od 150 zł </p>

                        <h2>Czas trwania:</h2>
                        <p> od 30 min </p>

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
                        <p> Radiofrekwencja bezigłowa (RF) to nowoczesny zabieg, który działa na skórę za pomocą fal
                            radiowych. Zabieg stymuluje głębokie warstwy skóry, podgrzewając je i pobudzając produkcję
                            kolagenu oraz elastyny. Dzięki temu skóra staje się bardziej jędrna, elastyczna i widocznie
                            odmłodzona, a wszystko to bez igieł i inwazyjnych metod!
                        </p>


                        <ul>
                            Dla kogo jest radiofrekwencja bezigłowa?
                            <li> Osoby z oznakami starzenia – wygładza drobne zmarszczki i poprawia napięcie skóry. </li>
                            <li> Osoby z utratą jędrności skóry – skutecznie ujędrnia skórę na twarzy i ciele. </li>
                            <li> Osoby z cellulitem – fale radiowe pomagają redukować widoczność cellulitu. </li>
                            <li> Osoby z rozszerzonymi porami – zmniejsza widoczność porów i poprawia strukturę skóry. </li>
                            <li> Osoby po ciąży lub odchudzaniu – poprawia wygląd luźnej skóry i wspomaga jej regenerację. </li>
                        </ul>


                        <h3> Ile zabiegów potrzeba? </h3>
                        <ul>
                            <li> Standardowa seria to 4-8 zabiegów, wykonywanych co 1-2 tygodnie, w zależności od potrzeb
                                skóry. </li>
                            <li> Pierwsze efekty są widoczne już po kilku sesjach, jednak najlepsze rezultaty pojawiają się po
                                zakończeniu pełnej serii.</li>
                            <li> Dla utrzymania efektów zaleca się powtarzanie zabiegu co 6-12 miesięcy. </li>
                        </ul>

                        <h3> Przeciwwskazania: </h3>
                        <ul>
                            <li> Ciąża i karmienie piersią </li>
                            <li> Rozrusznik serca i implanty metalowe w obszarze zabiegowym </li>
                            <li> Choroby nowotworowe </li>
                            <li> Aktywne infekcje skórne lub stany zapalne </li>
                            <li> Problemy z krążeniem (zakrzepica, niewydolność serca) </li>
                        </ul>

                        <h3> Zalecenie pozabiegowe: </h3>
                        <ul>
                            <li> Unikaj słońca przez kilka dni po zabiegu, stosując krem z filtrem SPF 50+. </li>
                            <li> Nawilżaj skórę – używaj kremów regenerujących, aby wspierać odbudowę skóry. </li>
                            <li> Unikaj gorących kąpieli, sauny i basenu przez 48 godzin po zabiegu, aby zapobiec podrażnieniom. </li>
                            <li> Unikaj intensywnego wysiłku fizycznego przez 24 godziny, aby zminimalizować ryzyko wystąpienia
                                obrzęków. </li>
                            <li> Pij dużo wody, aby przyspieszyć proces detoksykacji i wspierać regenerację skóry. </li>
                        </ul>

                        <p> Wypróbuj radiofrekwencję bezigłową i ciesz się gładką, jędrną skórą! </p>

                        <p> Zapraszamy na konsultację, podczas której nasi specjaliści ocenią potrzeby Twojej skóry i dobiorą
                            odpowiedni plan zabiegowy. Zaufaj sprawdzonej technologii i odkryj piękno na nowo!
                        </p>

                        <p> Skuteczna regeneracja bez igieł i skalpela! </p>

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
    );
}

