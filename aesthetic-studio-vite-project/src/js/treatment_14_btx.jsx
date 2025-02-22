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

export function TreatmentBtx() {
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
                        <h1>BTX</h1>
                        <p className='treatment_section1_more'> „Wszystko jest trucizną i nic nie jest trucizną. Tylko dawka czyni truciznę” (łac. Omnia sunt venena,
                            nihil est sine veneno. Sola dosis facit venenum” Ta sentencja Paracelsusa doskonale odnosi się do
                            działania BTX. </p>
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
                        <p> około 15 minut </p>

                    </Col>
                </Row>

            </Container>

            <Container>

                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>

                <Row className='treatment_section2'>
                    <Col sm={12}>
                        <p> Zabiegi z wykorzystaniem toksyny botulinowej, należą do najczęściej wykonywanych
                            zabiegów z zakresu medycyny i kosmetologii estetycznej na świecie. Odpowiednie podanie preparatu
                            pozwala na relaksację mięśnia, a tym samym optyczne zredukowanie ilości zmarszczek. W rękach
                            doświadczonego zabiegowca staje się doskonałym narzędziem do redukcji zmarszczek poprzecznych
                            czoła, gładzizny (lwia zmarszczka), czy bocznego kąta oka.
                        </p>

                        <p> Działanie opiera się na zachamowaniu produkcji acetylocholiny odpowiedzialnej za
                            przekaźnictwo nerwowe. Efekt utrzymuje się 12-16 tyg i jest w pełni wycofujący się z naszego
                            organizmu. </p>


                        <h3>Przebieg zabiegu</h3>

                        <p> Po zebraniu wywiadu medycznego i zakwalifikowaniu, zostaje
                            wykonane kilka bezbolesnych iniekcji w strefie zabiegowej. Efekt zaczyna być widoczny po około 3-5
                            dniach, a w pełni widoczny jest po 2 tygodniach. Po upływie 14 dni przeprowadzana jest kontrola
                            wraz z ewentualną bezpłatną korekcją. </p>


                        <h3> Przeciwwskazania do BTX </h3>

                        <ul>
                            <li> Choroby nerwowo - mięśniowe myasthenia gravis, zespół Lamberta-Eatona, </li>
                            <li> Uczulenie na substancję aktywną lub substancje pomocnicze, </li>
                            <li> Zakażenie w okolicy planowanych iniekcji, </li>
                            <li> Koagulopatie, </li>
                            <li> Leczenie lekami przeciwzakrzepowymi, </li>
                            <li> Antybiotykoterapia (włącznie z przeprowadzoną w ciągu minionych 14 dni), </li>
                            <li> Ciąża, okres laktacji.</li>
                        </ul>


                        <h3> Zalecenie pozabiegowe: </h3>

                        <ul>
                            <li> W ciągu 4h od wykonania zabiegu nie powinno się pochylać głowy ku dołowi, </li>
                            <li> Nie należy rozmasowywać miejsc wykonania iniekcji, </li>
                            <li> Powstrzymywanie się przed znacznym wysiłkim fizycznym przez 24h po zabiegu </li>
                            <li> Zakaz podróżowania samolotem 24h po zabiegu. </li>
                        </ul>

                    </Col>
                </Row>

                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}><PriceListItem description={'jedna partia'} price={'300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dwie partie'} price={'500 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'trzy partie'} price={'700 PLN'}/></Col>
                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>

            </Container>

            <Footer/>
        </>
    );
}

