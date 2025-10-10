import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
// import React from "react";
import {Navbar} from "./navbar.jsx";
import React from "react";
import '../css/_treatment_single.scss';
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import laserowe_usuwanie_tatuazu from '../assets/laserowe_usuwanie_tatuazu.jpg';

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

export function TreatmentUsuwanieTatuazy() {

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

            <Container fluid style={{maxWidth: '100vw'}} className='treatment_section1'>

                <Row>
                    <Col sm={12} >
                        <h1>Laserowe Usuwanie Tatuażu i Makijażu Permanentnego</h1>
                        <p className='treatment_section1_more'>W bezpiecznej technologii ND YAG Q-SWITC</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        <img src={laserowe_usuwanie_tatuazu} alt='laserowe usuwanie tatuażu' className='treatment_photo'></img>
                    </Col>

                    <Col sm={6} className='treatment_small_description'>

                        <h3> Cena: </h3>
                        <p> Od 200 zł</p>

                        <h3>Obszar zabigowy:</h3>
                        <p> Różne partie ciała </p>

                        {/*<h2>Na problem:</h2>*/}
                        {/*<p> </p>*/}
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
                            Laserowe usuwanie tatuażu i makijażu permanentnego to nowoczesna i skuteczna metoda,
                            pozwalająca na pozbycie się niechcianych pigmentów z różnych obszarów ciała. Dzięki
                            zaawansowanej technologii laserowej możliwe jest stopniowe rozjaśnianie i usuwanie
                            barwnika bez uszkodzenia skóry.
                        </p>

                        <h3> Mechanizm Działania</h3>

                            <ul>
                                Proces laserowego usuwania tatuażu i makijażu permanentnego opiera się na działaniu
                                wysokoenergetycznych impulsów światła laserowego, które są absorbowane przez pigmenty
                                w skórze. Laser emituje krótkie, intensywne impulsy światła o określonej długości fali, które
                                są skierowane na barwnik. Mechanizm działania można opisać w kilku krokach:
                                <li> Absorpcja Światła: Barwnik w tatuażu lub makijażu permanentnym absorbuje energię
                                    świetlną emitowaną przez laser.
                                </li>
                                <li> Rozbicie Pigmentu: Energia świetlna powoduje mikroskopijne rozbicie cząsteczek pigmentu
                                    na mniejsze fragmenty.
                                </li>
                                <li> Usuwanie przez Organizm: Rozbite cząsteczki pigmentu są stopniowo usuwane przez układ
                                    limfatyczny organizmu, co prowadzi do stopniowego rozjaśniania tatuażu lub makijażu.
                                </li>
                            </ul>


                            <h3> Zalety bezpiecznej technologii <br/> ND YAG Q-SWITCH </h3>

                            <ul>
                                Pracuje w parametrach nanosekundowych, praca w tym trybie pozwala usuwać makijaże
                                permanentne i tatuaże bezpiecznie bez obrażeń na skórze. Skuteczny dla wszystkich typów
                                skór.
                                Usuwa wszystkie kolory pigmentu na głębokość 5mm.
                                <li> Fale 532nm stosujemy na czerwienie</li>
                                <li> Falę 1064nm wszystkie ciemne kolory.</li>
                                <li> Laser pozwala na szybką pracę z częstotliwością do 10 HZ- to jest 10 bł/sek.</li>
                            </ul>

                            <h3> Na czym polega zabieg? </h3>

                            <ul>
                                Zabieg laserowego usuwania tatuażu i makijażu permanentnego jest przeprowadzany w kilku
                                krokach:
                                <li> Konsultacja: Przed rozpoczęciem serii zabiegów zalecana jest konsultacja, podczas
                                    której
                                    oceniamy stan skóry, rodzaj tatuażu lub makijażu oraz określamy plan zabiegów.
                                </li>
                                <li> Przygotowanie Skóry: Wykonywany jest demakijaż oraz przygotowanie skóry do
                                    zabiegu
                                </li>
                                <li> Zastosowanie Lasera: Specjalista kieruje laser na obszar skóry pokryty tatuażem lub
                                    makijażem permanentnym, wykonując serię krótkich impulsów świetlnych.
                                </li>
                                <li> Chłodzenie Skóry: Po zabiegu skóra może być chłodzona, aby złagodzić ewentualne
                                    podrażnienia i obrzęk.
                                </li>
                            </ul>

                            <h3> Zalecana seria zabiegów </h3>

                            <ul>
                                Aby osiągnąć pełne i zadowalające rezultaty, laserowe usuwanie tatuażu i makijażu
                                permanentnego wymaga serii zabiegów. Liczba sesji zależy od kilku czynników, takich jak:
                                <li> Kolor i gęstość pigmentu</li>
                                <li> Głębokość osadzenia barwnika</li>
                                <li> Rodzaj i wielkość tatuażu lub makijażu permanentnego</li>
                                <li> Typ skóry pacjenta</li>
                            </ul>

                            <p> Zazwyczaj potrzeba od 4 do 10 zabiegów, wykonywanych w odstępach 8-12 tygodniowych,
                                aby skóra miała czas na regenerację i usunięcie rozbitych cząsteczek pigmentu.
                            </p>

                            <h3> Efekty i rekonwalescencja </h3>
                            <p>
                                Efekty laserowego usuwania tatuażu i makijażu permanentnego są widoczne stopniowo po
                                każdej sesji. Po zabiegu skóra może być lekko zaczerwieniona i obrzęknięta. Objawy te
                                ustępują zazwyczaj w ciągu kilku dni. Ważne jest, aby przestrzegać zaleceń specjalisty
                                dotyczących pielęgnacji skóry po zabiegu.
                            </p>

                    </Col>
                </Row>

                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}><PriceListItem description={'Laserowe usuwanie'} price={'od 200 PLN'}/></Col>

                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>

            </Container>
            <Footer/>
        </>
    );
}