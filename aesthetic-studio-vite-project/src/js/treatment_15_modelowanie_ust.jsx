import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import {Footer} from "./footer.jsx";
import team from './../assets/team.jpg';

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

export function TreatmentModelowanieUst() {
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
                        <h1>Modelowanie ust</h1>
                        <p className='treatment_section1_more'> piękno w harmonii z naturalnym wyglądem </p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        <img src={team} alt='zdjęcie' className='treatment_photo'></img>
                    </Col>
                    <Col sm={6} className='treatment_small_description'>

                        <h2> Cena: </h2>
                        <p> 800 zł</p>

                        <h2>Czas trwania:</h2>
                        <p> około 30 minut </p>

                    </Col>
                </Row>

            </Container>

            <Container>

                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>

                <Row className='treatment_section2'>
                    <Col sm={12}>
                        <p> Modelowanie ust to zabieg, który pozwala podkreślić kształt, objętość oraz kontur ust, zapewniając
                            harmonijny i estetyczny wygląd twarzy. Wykorzystanie kwasu hialuronowego, naturalnego składnika
                            występującego w organizmie, sprawia, że efekty są subtelne, a usta nawilżone i pełniejsze. To idealna
                            opcja dla osób pragnących zwiększyć objętość warg, wyrównać asymetrię lub poprawić ich kontur.
                        </p>



                        <h3>Przebieg zabiegu</h3>

                        <p> Zabieg rozpoczyna się od konsultacji, podczas której dobierana jest
                            odpowiednia ilość preparatu i oczekiwany efekt. Następnie stosowane jest znieczulenie, aby
                            zapewnić komfort, a preparat jest aplikowany za pomocą cienkiej igły. Rezultat jest widoczny
                            natychmiast, choć pełny efekt uwidacznia się po kilku dniach, gdy opuchlizna ustępuje. </p>

                        <p> Rekomendujemy serię zabiegów od 4 do 6 w odstępach 3 tygodni każdy </p>


                        <h3> Przeciwwskazania do mezoterapii </h3>

                        <ul> Mimo że modelowanie ust jest bezpieczne, istnieją pewne przeciwwskazania:
                            <li> Ciąża i okres karmienia piersią, </li>
                            <li> Skłonność do powstawania blizn przerostowych (keloidów),</li>
                            <li> Aktywne infekcje lub opryszczka, </li>
                            <li> Przebyta atybiotykoterapia, </li>
                            <li> Przyjmowanie sterydów, </li>
                            <li> Alergia na składniki preparatu, </li>
                            <li> Choroby autoimmunologiczne i cukrzyca (niewyrównana),</li>
                            <li> Nowotwory. </li>
                        </ul>

                        <p> Przed zabiegiem ważna jest szczegółowa konsultacja w celu wykluczenia ryzyka.</p>

                        <h3> Zalecenie pozabiegowe: </h3>

                        <ul> Aby zapewnić długotrwały efekt i szybkie gojenie:
                            <li> Przez pierwsze 24 godziny unikaj dotykania i masowania ust. </li>
                            <li> Nie spożywaj gorących napojów i nie wystawiaj ust na działanie wysokich temperatur (sauna,
                                solarium). </li>
                            <li> Unikaj intensywnego wysiłku fizycznego przez 2-3 dni. </li>
                            <li> Stosuj delikatne nawilżanie według zaleceń specjalisty. </li>
                            <li> Obserwuj skórę – w przypadku silnego obrzęku lub bólu skontaktuj się z osobą wykonującą zabieg. </li>
                        </ul>

                        <p>Modelowanie ust pozwala cieszyć się pełniejszymi, zmysłowymi wargami, zachowując jednocześnie
                            naturalność i harmonię twarzy. </p>

                    </Col>
                </Row>

                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}><PriceListItem description={'usta'} price={'800 PLN'}/></Col>

                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>

            </Container>

            <Footer/>
        </>
    );
}

