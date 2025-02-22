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

export function TreatmentOsoczeBogatoplytkowe() {
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
                        <h1>Osocze bogatopłytkowe (PRP)</h1>
                        <p className='treatment_section1_more'> Naturalne Odmładzanie Twojej Skóry! </p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        {/*<img src={zabieg} alt='zdjęcie' className='treatment_photo'></img>*/}
                    </Col>
                    <Col sm={6} className='treatment_small_description'>
                        <h2> Cena: </h2>
                        <p>od 650 zł</p>

                        <h2>Czas trwania:</h2>
                        <p>około 60 minut</p>

                        <h2>Na problem:</h2>
                        <p> Regeneracja skóry </p>
                    </Col>
                </Row>

            </Container>

            <Container>

                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>

                <Row className='treatment_section2'>
                    <Col sm={12}>
                        <p> Zabieg z osoczem bogatopłytkowym (PRP), znany również jako "wampirzy lifting", to jeden z
                            najnowocześniejszych i najbardziej naturalnych zabiegów medycyny estetycznej. Polega na
                            wykorzystaniu osocza uzyskanego z własnej krwi pacjenta, co sprawia, że jest to metoda wyjątkowo
                            bezpieczna i skuteczna. Osocze bogate w płytki krwi stymuluje procesy regeneracyjne, zwiększając
                            produkcję kolagenu i elastyny.
                        </p>


                        <ul>
                            Dla kogo jest zabieg z osoczem bogatopłytkowym?
                            <li> Osoby z oznakami starzenia – redukuje zmarszczki i poprawia napięcie skóry. </li>
                            <li> Osoby z cerą zmęczoną i odwodnioną – działa regenerująco i odmładzająco.</li>
                            <li> Osoby z bliznami potrądzikowymi – wspomaga procesy naprawcze i wygładza skórę. </li>
                            <li> Osoby z przebarwieniami – wyrównuje koloryt skóry i redukuje przebarwienia. </li>
                            <li> Osoby z problemem łysienia – wspiera odrastanie włosów i poprawia ich kondycję. </li>
                        </ul>


                        <h3> Ile zabiegów potrzeba? </h3>
                        <ul>
                            <li> Rekomendowana seria to 3 zabiegi, wykonywane co 4-6 tygodni, w zależności od kondycji skóry. </li>
                            <li> Pierwsze efekty są widoczne już po kilku tygodniach od zabiegu, jednak pełna regeneracja następuje
                                po serii.</li>
                            <li> Aby utrzymać efekty, warto powtarzać zabieg co 6-12 miesięcy. </li>
                        </ul>

                        <h3> Przeciwwskazania: </h3>
                        <ul>
                            <li> Ciąża i karmienie piersią </li>
                            <li> Choroby autoimmunologiczne </li>
                            <li> Infekcje skórne (np. opryszczka)</li>
                            <li> Choroby nowotworowe </li>
                            <li> Stany zapalne skóry </li>
                            <li> Przyjmowanie leków przeciwzakrzepowych i przeciwzapalnych</li>
                        </ul>

                        <h3> Zalecenie pozabiegowe: </h3>
                        <ul>
                            <li> Unikaj ekspozycji na słońce przez tydzień po zabiegu, stosując krem z filtrem SPF 50+. </li>
                            <li> Nawilżaj skórę – stosuj kremy łagodzące i regenerujące, aby wspierać procesy odbudowy skóry. </li>
                            <li> Odstaw makijaż na 24 godziny po zabiegu, aby zmniejszyć ryzyko podrażnień. </li>
                            <li> Unikaj intensywnego wysiłku fizycznego, sauny i gorących kąpieli przez 48 godzin po zabiegu. </li>
                            <li> Pij dużo wody, aby wspierać procesy regeneracyjne organizmu. </li>
                        </ul>

                        <h3>Wybierz naturalną regenerację skóry dzięki osoczu bogatopłytkowemu!</h3>

                        <p> Zapraszamy na konsultację, podczas której nasi specjaliści ocenią stan Twojej skóry i zaproponują
                            indywidualny plan zabiegowy. Pozwól sobie na naturalne odmłodzenie i poprawę kondycji skóry! </p>

                        <p> Zdrowa i promienna skóra bez sztucznych dodatków! </p>

                    </Col>
                </Row>

                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}><PriceListItem description={'twarz'} price={'650 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja'} price={'800 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja + dekolt'} price={'900 PLN'}/></Col>

                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>

            </Container>

            <Footer/>
        </>
    );
}

