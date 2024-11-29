import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";

export function TreatmentTerapiaTradziku() {
    return (
        <>
            <Navbar/>
            <Container fluid style={{padding: 0, margin: 0, maxWidth: '100vw',}}>

                <Row>
                    <Col sm={12} style={{
                        wordWrap: 'break-word',
                        lineHeight: '1.6',
                        padding: '10px',
                        border: '2px solid green'
                    }}>
                        <h1> Kompleksowe Leczenie Trądziku</h1>
                        <h2>Skuteczność Dzięki Wielu Metodom </h2>

                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        {/*<img src={zabieg} alt='zdjęcie' style={{height: '400px',backgroundSize:'cover'}}></img>*/}
                    </Col>
                    <Col sm={4} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid blue' }}>
                        <h3> Cena: </h3>
                        <p> od 200 zł</p>

                        <h3>Obszar zabigowy:</h3>
                        <p> Różne partie ciała </p>

                        <h3>Czas trwania</h3>
                        <p> Około 60 minut </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid pink', textAlign:'start', paddingLeft:'20px' }}>

                        <p>
                            Trądzik to problem, który dotyka osoby w różnym wieku, wpływając na komfort i pewność siebie. W
                            walce z trądzikiem nie ma jednej uniwersalnej metody – kluczem do sukcesu jest indywidualne
                            podejście i łączenie różnych technik oraz produktów, które działają na wielu poziomach skóry. Dzięki
                            nowoczesnym metodom, takim jak produkty <strong>Gen Factor, peeling kawitacyjny, peelingi chemiczne</strong>,
                            czy <strong>peeling węglowy</strong>, możemy skutecznie redukować objawy trądziku, poprawiając kondycję skóry i
                            przywracając jej zdrowy wygląd. Połączenie tych zabiegów z odpowiednią pielęgnacją domową daje
                            najlepsze efekty.
                        </p>


                        <h2>1. Produkty Gen Factor – Zaawansowana Biotechnologia w Walce z Trądzikiem</h2>

                        <div>
                            <p>Produkty Gen Factor to innowacyjne preparaty, które wykorzystują najnowsze osiągnięcia
                                biotechnologii. Składniki aktywne zawarte w tych produktach działają na poziomie komórkowym,
                                wspierając regenerację skóry, redukcję stanów zapalnych oraz regulację wydzielania sebum. Gen
                                Factor pomaga w leczeniu trądziku poprzez: </p>
                            <ul>
                                <li> Redukcję stanów zapalnych – zmniejszenie zaczerwienień i obrzęków.
                                </li>
                                <li> Wspomaganie regeneracji skóry – przyspieszenie gojenia zmian trądzikowych.
                                </li>
                                <li> Normalizację wydzielania sebum – zmniejszenie przetłuszczania skóry, co zapobiega
                                    powstawaniu nowych wyprysków.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3> 2. Peeling Kawitacyjny – Delikatne, a Skuteczne Oczyszczanie </h3>
                            <p>
                                Peeling kawitacyjny to metoda, która wykorzystuje ultradźwięki do głębokiego, ale jednocześnie
                                delikatnego oczyszczenia skóry. Dzięki niemu usunięte zostają zanieczyszczenia, nadmiar sebum oraz
                                martwe komórki naskórka. Zabieg ten jest idealny dla skóry trądzikowej, ponieważ:
                            </p>
                            <ul>
                                <li> Oczyszcza pory – redukuje ilość zaskórników i zapobiega ich powstawaniu.
                                </li>
                                <li> Zmniejsza przetłuszczanie się skóry – regulując wydzielanie sebum.
                                </li>
                                <li> Przygotowuje skórę – do dalszych zabiegów, poprawiając wchłanianie składników
                                    aktywnych.</li>
                            </ul>

                            <h3> 3. Peelingi Chemiczne – Intensywne Złuszczanie i Odnowa Skóry</h3>

                            <p>
                                Peelingi chemiczne, takie jak te na bazie kwasu salicylowego czy glikolowego, to skuteczna metoda
                                leczenia trądziku, zwłaszcza przy problemach z bliznami i przebarwieniami potrądzikowymi. Działają
                                poprzez kontrolowane złuszczanie naskórka, co sprzyja:
                            </p>

                            <ul>
                                <li> Zmniejszeniu blizn potrądzikowych – wygładzenie skóry i poprawa jej tekstury.
                                </li>
                                <li>Rozjaśnieniu przebarwień – wyrównanie kolorytu skóry.
                                </li>
                                <li> Redukcji stanów zapalnych – zmniejszenie liczby aktywnych wyprysków.
                                </li>
                            </ul>

                            <h3> 4. Peeling Węglowy z Laserem ND YAG Q-SWITCH – Głębokie Oczyszczanie i Odmłodzenie</h3>

                            <p>
                                Peeling węglowy to innowacyjny zabieg, który łączy działanie lasera ND YAG Q-SWITCH z maską
                                węglową. To doskonała metoda dla skóry trądzikowej, ponieważ:
                            </p>

                            <ul>
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

                            <p>
                                Poza zabiegami profesjonalnymi, kluczowe znaczenie ma codzienna pielęgnacja skóry w domu. Dobór
                                odpowiednich produktów do mycia, nawilżania i ochrony przeciwsłonecznej pomaga utrzymać efekty
                                zabiegów i zapobiega nawrotom trądziku. Odpowiednia pielęgnacja powinna obejmować:
                            </p>

                            <ul>
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

                        </div>
                    </Col>
                </Row>


                <Row>
                    <Col sm={3}> </Col>
                    <Col sm={9}>
                        <div>price title</div>
                        <div>price</div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

