import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
import '../css/_treatment_single.scss';
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";

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

export function TreatmentTerapiaTradziku() {
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
                    <Col sm={12}>
                        <h1> Kompleksowe Leczenie Trądziku</h1>
                        <p className='treatment_section1_more'>Skuteczność Dzięki Wielu Metodom </p>

                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        {/*<img src={zabieg} alt='zdjęcie' style={{height: '400px',backgroundSize:'cover'}}></img>*/}
                    </Col>

                    <Col sm={6} className='treatment_small_description'>
                        <h3> Cena: </h3>
                        <p> od 200 zł</p>

                        <h3>Obszar zabigowy:</h3>
                        <p> Różne partie ciała </p>

                        <h3>Czas trwania</h3>
                        <p> Około 60 minut </p>
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
                            Trądzik to problem, który dotyka osoby w różnym wieku, wpływając na komfort i pewność siebie. W
                            walce z trądzikiem nie ma jednej uniwersalnej metody – kluczem do sukcesu jest indywidualne
                            podejście i łączenie różnych technik oraz produktów, które działają na wielu poziomach skóry. Dzięki
                            nowoczesnym metodom, takim jak produkty <strong>Gen Factor, peeling kawitacyjny, peelingi chemiczne</strong>,
                            czy <strong>peeling węglowy</strong>, możemy skutecznie redukować objawy trądziku, poprawiając kondycję skóry i
                            przywracając jej zdrowy wygląd. Połączenie tych zabiegów z odpowiednią pielęgnacją domową daje
                            najlepsze efekty.
                        </p>


                        <h3> 1. Produkty Gen Factor – Zaawansowana Biotechnologia w Walce z Trądzikiem</h3>

                            <ul>
                                Produkty Gen Factor to innowacyjne preparaty, które wykorzystują najnowsze osiągnięcia
                                biotechnologii. Składniki aktywne zawarte w tych produktach działają na poziomie komórkowym,
                                wspierając regenerację skóry, redukcję stanów zapalnych oraz regulację wydzielania sebum. Gen
                                Factor pomaga w leczeniu trądziku poprzez:
                                <li> Redukcję stanów zapalnych – zmniejszenie zaczerwienień i obrzęków.
                                </li>
                                <li> Wspomaganie regeneracji skóry – przyspieszenie gojenia zmian trądzikowych.
                                </li>
                                <li> Normalizację wydzielania sebum – zmniejszenie przetłuszczania skóry, co zapobiega
                                    powstawaniu nowych wyprysków.
                                </li>
                            </ul>

                            <h3> 2. Peeling Kawitacyjny – Delikatne, a Skuteczne Oczyszczanie </h3>

                            <ul>
                                Peeling kawitacyjny to metoda, która wykorzystuje ultradźwięki do głębokiego, ale jednocześnie
                                delikatnego oczyszczenia skóry. Dzięki niemu usunięte zostają zanieczyszczenia, nadmiar sebum oraz
                                martwe komórki naskórka. Zabieg ten jest idealny dla skóry trądzikowej, ponieważ:
                                <li> Oczyszcza pory – redukuje ilość zaskórników i zapobiega ich powstawaniu.
                                </li>
                                <li> Zmniejsza przetłuszczanie się skóry – regulując wydzielanie sebum.
                                </li>
                                <li> Przygotowuje skórę – do dalszych zabiegów, poprawiając wchłanianie składników
                                    aktywnych.</li>
                            </ul>

                            <h3> 3. Peelingi Chemiczne – Intensywne Złuszczanie i Odnowa Skóry</h3>

                            <ul>
                                Peelingi chemiczne, takie jak te na bazie kwasu salicylowego czy glikolowego, to skuteczna metoda
                                leczenia trądziku, zwłaszcza przy problemach z bliznami i przebarwieniami potrądzikowymi. Działają
                                poprzez kontrolowane złuszczanie naskórka, co sprzyja:
                                <li> Zmniejszeniu blizn potrądzikowych – wygładzenie skóry i poprawa jej tekstury.
                                </li>
                                <li>Rozjaśnieniu przebarwień – wyrównanie kolorytu skóry.
                                </li>
                                <li> Redukcji stanów zapalnych – zmniejszenie liczby aktywnych wyprysków.
                                </li>
                            </ul>

                            <h3> 4. Peeling Węglowy z Laserem ND YAG Q-SWITCH – Głębokie Oczyszczanie i Odmłodzenie</h3>

                            <ul>
                                Peeling węglowy to innowacyjny zabieg, który łączy działanie lasera ND YAG Q-SWITCH z maską
                                węglową. To doskonała metoda dla skóry trądzikowej, ponieważ:
                                <li> Głęboko oczyszcza skórę – usuwając zanieczyszczenia i redukując przetłuszczanie się skóry.
                                </li>
                                <li>Zwęża pory – minimalizując ich widoczność.
                                </li>
                                <li> Redukuje zmiany zapalne – zmniejsza wypryski i stany zapalne.
                                </li>
                                <li> Wyrównuje koloryt – rozjaśnia przebarwienia potrądzikowe i poprawia ogólny wygląd skóry.
                                </li>
                            </ul>

                            <h3>5. Odpowiednia Pielęgnacja Domowa – Klucz do Długotrwałych Efektów</h3>

                            <ul>
                                Poza zabiegami profesjonalnymi, kluczowe znaczenie ma codzienna pielęgnacja skóry w domu. Dobór
                                odpowiednich produktów do mycia, nawilżania i ochrony przeciwsłonecznej pomaga utrzymać efekty
                                zabiegów i zapobiega nawrotom trądziku. Odpowiednia pielęgnacja powinna obejmować:
                                <li> Delikatne oczyszczanie – aby nie naruszać bariery ochronnej skóry.
                                </li>
                                <li>Nawilżanie – lekkie, niekomedogenne kremy, które zapobiegają przesuszeniu skóry.
                                </li>
                                <li> Ochronę przed słońcem – stosowanie kremu z filtrem SPF 50, aby zapobiegać powstawaniu
                                    przebarwień.
                                </li>
                            </ul>

                            <h3> Podsumowanie – Indywidualne Podejście do Leczenia Trądziku</h3>

                            <p>
                                Skuteczne leczenie trądziku wymaga kompleksowego podejścia i łączenia różnych metod, które
                                działają synergistycznie. Produkty Gen Factor, peeling kawitacyjny, peelingi chemiczne i peeling
                                węglowy, w połączeniu z odpowiednią pielęgnacją domową, mogą przynieść spektakularne rezultaty.
                                Kluczem do sukcesu jest indywidualne dopasowanie zabiegów do potrzeb skóry, regularność oraz
                                współpraca z doświadczonym specjalistą.
                            </p>
                            <p>
                                Zadbaj o swoją skórę i odkryj nową jakość życia bez trądziku!
                            </p>

                    </Col>
                </Row>

            </Container>
            <Footer/>
        </>
    )
}

