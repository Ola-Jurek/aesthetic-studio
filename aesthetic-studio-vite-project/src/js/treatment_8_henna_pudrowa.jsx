//
//
// !!!!!!!!!!!!!!!!!!!!!!!!!!! DISABLED
//
//
//
//
import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import {Footer} from "./footer.jsx";
import team2 from "../assets/team2.jpg";

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


export function TreatmentHennaPudrowa() {
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
                        <h1>Henna i laminacja brwi</h1>
                        <p className='treatment_section1_more'> piękno i styl w naturalnym wydaniu </p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        <img src={team2} alt='zdjęcie' className='treatment_photo'></img>
                    </Col>
                    <Col sm={6} className='treatment_small_description'>

                        {/*<h2> Cena: </h2>*/}
                        {/*<p>  </p>*/}

                        <h2>Czas trwania:</h2>
                        <p> około 1 godzina </p>

                    </Col>
                </Row>

            </Container>

            <Container>

                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>

                <Row className='treatment_section2'>
                    <Col sm={12}>
                        <p> Henna oraz laminacja brwi to doskonały sposób na podkreślenie naturalnego kształtu i koloru brwi,
                            zapewniając im zadbany i wyrazisty wygląd. Zabieg ten polecany jest osobom, które chcą
                            zaoszczędzić czas na codziennym makijażu, a także poprawić wygląd niesfornych, cienkich lub jasnych
                            włosków. Henna przyciemnia włoski oraz skórę, podczas gdy laminacja ujarzmia je, nadając idealne
                            ułożenie i objętość.
                        </p>



                        <h3>Przebieg zabiegu</h3>

                        <p> Zabieg trwa około godziny. Obejmuje oczyszczanie i przygotowanie skóry, stylizację kształtu brwi,
                            nałożenie henny o odpowiednim odcieniu oraz laminację, która odżywia i utrwala ułożenie włosków.
                            Efekt pięknie podkreślonych brwi utrzymuje się do 4 tygodni, w zależności od rodzaju skóry i
                            pielęgnacji domowej. </p>


                        <h3> Przeciwwskazania do makijażu permanentnego </h3>

                        <ul> Choć zabieg jest bezpieczny i delikatny, istnieją pewne przeciwwskazania:
                            <li> Alergia na składniki preparatów (henna lub produkty do laminacji), </li>
                            <li> Świeże rany, podrażnienia lub infekcje skóry w okolicach brwi, </li>
                            <li> Choroby oczu lub skóry w obszarze zabiegu, </li>
                        </ul>

                        <p> Przed wykonaniem zabiegu specjalista może przeprowadzić próbę uczuleniową. </p>

                        <h3> Zalecenie pozabiegowe: </h3>

                        <ul> Aby cieszyć się jak najdłużej doskonałym efektem:
                            <li> Unikaj moczenia brwi przez pierwsze 24 godziny. </li>
                            <li> Nie pocieraj i nie drap brwi, aby nie uszkodzić ułożenia włosków. </li>
                            <li> Przez kilka dni unikaj sauny, basenu i intensywnej ekspozycji na słońce. </li>
                            <li> Nawilżaj brwi olejkiem lub odżywką zgodnie z zaleceniami stylisty. </li>
                            <li> Niestosowanie kosmetyków kolorowych ani pielęgnacyjnych na obszarze poddanym zabiegowi do
                                czasu całkowitego zagojenia. </li>
                        </ul>

                        <p> Henna i laminacja to idealne rozwiązanie dla tych, którzy pragną naturalnego, ale wyrazistego looku
                            na co dzień. </p>

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

