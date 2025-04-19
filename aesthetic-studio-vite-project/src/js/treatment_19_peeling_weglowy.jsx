import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import team2 from "./../assets/marta_i_bartek2.jpg"

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

export function TreatmentPeelingWeglowy() {
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
                    <Col>
                        <h1> Peeling węglowy</h1>
                        <p className='treatment_section1_more'>Z wykorzystaniem Laserem ND YAG Q-SWITCH </p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        <img src={team2} alt='zdjęcie' className='treatment_photo'></img>
                    </Col>

                    <Col sm={6} className='treatment_small_description'>

                        <h3> Cena: </h3>
                        <p> od 200 zł</p>

                        <h3>Obszar zabigowy:</h3>
                        <p> Różne partie ciała </p>

                        <h3>Czas trwania</h3>
                        <p> Około 45 minut </p>

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
                            Peeling węglowy, znany również jako „Black Doll Peel” lub „Hollywood Peel”, to
                            innowacyjny zabieg łączący działanie lasera ND YAG Q-SWITCH z maską węglową, który
                            oferuje skórze głębokie oczyszczenie, odmłodzenie i wyrównanie kolorytu. Jest to metoda
                            ciesząca się ogromną popularnością, zwłaszcza wśród osób poszukujących szybkich i
                            spektakularnych efektów bez długiego okresu rekonwalescencji.
                        </p>

                        <h3> Na czym polega peeling węglowy?</h3>

                            <ul>
                                Peeling węglowy polega na nałożeniu na skórę specjalnej maski z aktywnym węglem, a
                                następnie naświetlaniu jej laserem ND YAG Q-SWITCH. Aktywny węgiel przyciąga
                                zanieczyszczenia, sebum i martwe komórki naskórka, a laser, poprzez swoje działanie, usuwa
                                te zanieczyszczenia wraz z węglem. Zabieg działa wielokierunkowo:
                                <li> Oczyszcza skórę z głębokich zanieczyszczeń.
                                </li>
                                <li> Zwęża pory i reguluje wydzielanie sebum.
                                </li>
                                <li> Wyrównuje koloryt skóry, rozjaśnia przebarwienia.
                                </li>
                                <li> Stymuluje produkcję kolagenu, poprawiając elastyczność i jędrność skóry.
                                </li>
                                <li> Wygładza drobne zmarszczki i linie mimiczne.
                                </li>
                            </ul>


                            <h3> Dla kogo jest ten zabieg? </h3>

                            <ul>
                                Peeling węglowy z laserem ND YAG Q-SWITCH jest idealny dla osób:
                                <li> Z tłustą, mieszaną lub trądzikową cerą, zmagających się z nadmiernym wydzielaniem
                                    sebum i zaskórnikami.
                                </li>
                                <li> Pragnących poprawić teksturę skóry, wygładzić drobne zmarszczki i linie mimiczne.
                                </li>
                                <li> Z widocznymi porami, przebarwieniami oraz nierównym kolorytem skóry.</li>
                                <li> Szukających bezbolesnej i nieinwazyjnej metody odmłodzenia skóry.</li>
                                <li>Dla osób, które chcą uzyskać natychmiastowy efekt odświeżenia skóry, bez długiego
                                    okresu rekonwalescencji..
                                </li>
                            </ul>

                            <h3> Jak przygotować się do zabiegu?</h3>

                            <ul>
                                Aby uzyskać najlepsze efekty peelingu węglowego, warto odpowiednio przygotować skórę:
                                <li> Unikaj opalania – zarówno na słońcu, jak i w solarium przez co najmniej 2 tygodnie
                                    przed zabiegiem.
                                </li>
                                <li>Nie stosuj retinoidów oraz kwasów AHA/BHA przez co najmniej tydzień przed
                                    zabiegiem.
                                </li>
                                <li> Oczyść skórę – przed wizytą unikaj nakładania ciężkiego makijażu i produktów, które
                                    mogą zatykać pory.
                                </li>
                                <li> Zadbaj o odpowiednie nawilżenie skóry w dniach poprzedzających zabieg.
                                </li>

                            </ul>

                            <h3> Zalecenia po zabiegu:</h3>

                            <ul>
                                <li> Unikaj ekspozycji na słońce przez 2 tygodnie po zabiegu, stosując krem z filtrem
                                    SPF 50.
                                </li>
                                <li>Nawilżaj skórę – używaj delikatnych, nawilżających kremów, aby przyspieszyć
                                    proces regeneracji.
                                </li>
                                <li> Unikaj sauny, gorących kąpieli i intensywnych ćwiczeń fizycznych przez 48
                                    godzin, aby zminimalizować ryzyko podrażnień.
                                </li>
                                <li> Nie stosuj drażniących kosmetyków – przez co najmniej tydzień po zabiegu
                                    zrezygnuj z kosmetyków zawierających kwasy, retinoidy czy alkohol.
                                </li>
                                <li>Pij dużo wody – odpowiednie nawodnienie organizmu wspiera regenerację skóry.</li>
                            </ul>

                            <p>
                                Peeling węglowy to doskonały sposób na odświeżenie, wygładzenie i oczyszczenie skóry,
                                który przynosi spektakularne efekty bez bólu i dyskomfortu. Idealny przed ważnym
                                wydarzeniem lub jako regularny zabieg pielęgnacyjny, który sprawi, że Twoja skóra będzie
                                wyglądać promiennie i zdrowo!
                            </p>
                            <p>
                                Zapraszamy do umówienia się na wizytę i przekonania się o niesamowitych efektach peelingu
                                węglowego!
                            </p>

                    </Col>
                </Row>


                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}><PriceListItem description={'twarz'} price={'150 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja + dekolt'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'plecy'} price={'300 PLN'}/></Col>
                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
