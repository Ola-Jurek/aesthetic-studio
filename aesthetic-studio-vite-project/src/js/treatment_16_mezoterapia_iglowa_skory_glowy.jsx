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

export function TreatmentMezoterapiaIglowaSkoryGlowy() {
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
                        <h1>Mezoterapia skóry głowy</h1>
                        <p className='treatment_section1_more'> skuteczna regeneracja i stymulacja wzrostu włosów </p>
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
                        <p> 30 - 60 minut </p>

                    </Col>
                </Row>

            </Container>

            <Container>

                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>

                <Row className='treatment_section2'>
                    <Col sm={12}>
                        <p> Mezoterapia skóry głowy to zabieg, który wspomaga regenerację włosów oraz stymuluje ich wzrost
                            poprzez dostarczanie skórze odpowiednich składników odżywczych, takich jak witaminy, minerały,
                            aminokwasy i peptydy. Jest to doskonałe rozwiązanie dla osób zmagających się z nadmiernym
                            wypadaniem włosów, osłabieniem cebulek czy przerzedzeniami.
                        </p>



                        <h3>Przebieg zabiegu</h3>

                        <p> Zabieg polega na wprowadzeniu preparatów odżywczych bezpośrednio w
                            skórę głowy przy użyciu mikroiniekcji za pomocą urządzenia Dermatic1. Dzięki temu składniki
                            aktywne działają bezpośrednio na cebulki włosowe, poprawiając ich kondycję i wspierając wzrost
                            nowych włosów. Zabieg jest wykonywany w warunkach sterylnych, z zachowaniem najwyższych
                            standardów higieny. </p>

                        <p> Rekomendujemy serię zabiegów od 4 do 6 w odstępach 3 tygodni każdy </p>



                        <h3> Przeciwwskazania do mezoterapii </h3>

                        <ul> Choć mezoterapia jest bezpieczna i skuteczna, istnieją pewne przeciwwskazania do jej wykonania:
                            <li> Ciąża i okres karmienia piersią, </li>
                            <li> Alergia na składniki używanych preparatów,</li>
                            <li> Przebyta atybiotykoterapia w przeciągu ostatnich dwóch tygodni, </li>
                            <li> Przyjmowanie sterydów, </li>
                            <li> Cukrzyca (niewyrównana), </li>
                            <li> Choroby autoimmunologiczne, </li>
                            <li> Infekcje skóry głowy lub stany zapalne, </li>
                            <li> Skłonność do bliznowców (keloidów), </li>
                            <li> Nowotwory i terapia przeciwnowotworowa. </li>
                        </ul>

                        <p> Konsultacja przed zabiegiem pozwala wykluczyć ryzyko i dobrać odpowiednią terapię.</p>

                        <h3> Zalecenie pozabiegowe: </h3>

                        <ul> Aby osiągnąć najlepsze rezultaty:
                            <li> Przez 24-48 godzin unikaj mycia włosów i moczenia skóry głowy. </li>
                            <li> Przez kilka dni unikaj basenu, sauny i intensywnych ćwiczeń fizycznych. </li>
                            <li> Chroń skórę głowy przed promieniowaniem UV. </li>
                            <li>Nie stosuj kosmetyków drażniących skórę głowy bez konsultacji ze specjalistą. </li>
                        </ul>

                        <p> Mezoterapia skóry głowy to skuteczny sposób na poprawę kondycji włosów oraz zahamowanie ich
                            wypadania. Systematyczna terapia pozwala cieszyć się gęstszymi, mocniejszymi włosami i zdrowszą
                            skórą głowy. </p>

                    </Col>
                </Row>

                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}><PriceListItem description={'mezoterapia skóry głowy'} price={'300 PLN'}/></Col>

                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>

            </Container>

            <Footer/>
        </>
    );
}

