import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import team from "../assets/marta_i_bartek2.jpg";
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

export function TreatmentLiftera(props) {
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
                        <h1> Liftera HIFU </h1>
                        <p className='treatment_section1_more'> Niechirurgiczny lifting i przebudowa skóry </p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        <img src={team} alt='zdjęcie' className='treatment_photo'></img>
                    </Col>
                    <Col sm={6} className='treatment_small_description'>

                        <h3> Cena: </h3>
                        <p>od 800 zł</p>

                        {/*<h3>Czas trwania:</h3>*/}
                        {/*<p>około 60 minut</p>*/}

                        <h3>Na problem:</h3>
                        <p> Poprawa jędrności </p>

                    </Col>
                </Row>

            </Container>

            <Container>

                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>

                <Row className='treatment_section2'>
                    <Col sm={12}>
                        <p> Dla kogo?
                        </p>


                        <ul>
                            Zabieg Liftera HIFU polecany jest osobom, które chcą:
                            <li> Poprawić jędrność i napięcie skóry twarzy oraz ciała </li>
                            <li> Unieść owal twarzy, podnieść policzki, zlikwidować tzw. „chomiki”</li>
                            <li> Ujędrnić skórę szyi i zredukować wiotkość podbródka („double chin”)</li>
                            <li> Spłycić zmarszczki i bruzdy (np. nosowo-wargowe).</li>
                            <li> Zredukować wiotkość skóry ramion, brzucha, ud czy kolan</li>
                            <li> Uzyskać efekt liftingu bez ingerencji chirurgicznej i bez długiej rekonwalescencji</li>
                        </ul>


                        <h3> Jak działa Liftera? Mechanizm przebudowy </h3>
                        <ul> <strong>Liftera</strong> wykorzystuje technologię <strong>MFU (Micro-Focused Ultrasound)</strong> – mikroogniskowana fala
                            ultradźwiękowa. To bardziej precyzyjna wersja HIFU: energia skupiana jest w wielu <strong>mikropunktach
                                na różnych głębokościach </strong>(np. 1,5 mm, 3 mm, 4,5 mm), co pozwala działać dokładniej i bezpieczniej.

                            <li> Energia ultradźwięków dociera w głąb skóry, aż do warstw SMAS (tych samych, które są
                                podciągane podczas chirurgicznego liftingu). </li>
                            <li> W tkankach powstają punkty koagulacji termicznej – mikrouszkodzenia cieplne o
                                temperaturze 60–70°C.
                            </li>
                            <li> Skóra wokół pozostaje nienaruszona, co uruchamia procesy naprawy i intensywnej
                                regeneracji.
                            </li>
                            <li> Dochodzi do obkurczenia włókien kolagenowych i stymulacji fibroblastów do produkcji
                                nowego kolagenu i elastyny.</li>
                            <li> Efektem jest stopniowa poprawa napięcia, gęstości i jędrności skóry, która przebudowuje się
                                od środka przez wiele tygodni. </li>

                            W odróżnieniu od lasera czy RF, ultradźwięki omijają naskórek – dzięki czemu zabieg nie powoduje
                            uszkodzeń powierzchni skóry i praktycznie nie wymaga okresu rekonwalescencji.
                        </ul>


                        <h3> Przeciwwskazania: </h3>
                        <ul>
                            <li> Ciąża i karmienie piersią </li>
                            <li> Aktywne stany zapalne skóry, infekcje (np. opryszczka)</li>
                            <li> Choroby nowotworowe lub okres po terapii onkologicznej (wymaga konsultacji)</li>
                            <li> Wszczepiony rozrusznik serca lub metalowe implanty w obszarze zabiegowym</li>
                            <li> Ciężkie choroby przewlekłe (np. nieuregulowana cukrzyca, zaburzenia krzepnięcia)</li>
                            <li> Uszkodzenia skóry, świeże blizny w miejscu zabiegu</li>
                            <li> Choroby neurologiczne przebiegające z zaburzeniem czucia w miejscu zabiegowym</li>
                            <li> Skóra bardzo cienka i mocno zwiotczała – w niektórych przypadkach efekt może być
                                niewystarczający
                            </li>
                        </ul>

                        <h3> Zalecenia przed zabiegiem </h3>
                        <ul>
                            <li> Nie ma specjalnego przygotowania – zabieg można wykonać o każdej porze roku.</li>
                            <li> Należy unikać opalania i stosowania samoopalaczy w dniu zabiegu.</li>
                            <li> Warto zadbać o dobrą kondycję skóry (nawilżenie, unikanie podrażnień).</li>
                            <li> W dniu zabiegu nie stosować mocnych kremów złuszczających ani retinolu.</li>
                        </ul>

                        <h3> Zalecenia po zabiegu: </h3>
                        <ul>
                            <li> Nie ma okresu rekonwalescencji – można wrócić do codziennych zajęć.</li>
                            <li> Przez 1–2 dni unikać gorących kąpieli, sauny, intensywnego wysiłku.</li>
                            <li> Delikatnie pielęgnować skórę kosmetykami nawilżającymi i łagodzącymi.</li>
                            <li> Unikać masażu lub mocnego ucisku obszaru zabiegowego przez kilka dni.</li>
                            <li> Chronić skórę przed słońcem i stosować krem z filtrem SPF 50, zwłaszcza przy zabiegach na
                                twarz i szyję.</li>
                        </ul>

                        <h3> Efekty i liczba zabiegów: </h3>
                        <ul>
                            <li> <strong>Efekt natychmiastowy</strong> – lekkie napięcie skóry widoczne tuż po zabiegu (wynika z obkurczenia
                                włókien kolagenowych).</li>
                            <li> <strong>Efekt właściwy</strong> – stopniowo narasta w ciągu 3–6 miesięcy dzięki przebudowie i tworzeniu
                                nowego kolagenu.</li>
                            <li> W większości przypadków wystarczy <strong>1 zabieg</strong>, a jego efekt utrzymuje się nawet do 18–24
                                miesięcy.</li>
                            <li> W zależności od kondycji skóry i wieku pacjenta, zalecane są czasem sesje przypominające co
                                12–18 miesięcy.</li>
                        </ul>


                    </Col>
                </Row>

                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}><PriceListItem description={'górna część twarzy (czoło i "kurze łapki")'} price={'800 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dolna część twarzy(policzki i "chomiki")'} price={'800 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'podbródek'} price={'800 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'szyja'} price={'800 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dolna część twarzy + podbródek'} price={'1200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'cała twarz'} price={'1300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'cała twarz + podbródek'} price={'1500 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'cała twarz + podbródek + szyja'} price={'1800 PLN'}/></Col>


                </Row>

                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                    </Col>
                </Row>

            </Container>

            <Footer/>
        </>
    );
}

