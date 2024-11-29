import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";

export function TreatmentPeelingChemiczny() {
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
                        <h1> Peelini chemiczne</h1>
                        <h2>klucz do pięknej skóry</h2>

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
                        <p> Około 45 minut </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid pink', textAlign:'start', paddingLeft:'20px' }}>

                        <p>
                            Peelingi chemiczne to skuteczna metoda odnowy skóry, która polega na aplikacji specjalnych kwasów
                            w celu złuszczenia martwego naskórka, wygładzenia skóry i poprawy jej kondycji. Dzięki szerokiemu
                            spektrum działania, peelingi chemiczne mogą rozwiązać wiele problemów skórnych, od trądziku po
                            przebarwienia, zmarszczki czy utratę jędrności. W połączeniu z mezoterapią mikroigłową dają
                            spektakularne efekty odmłodzenia i regeneracji skóry.
                        </p>


                        <h2> Dla kogo są peelingi chemiczne?</h2>

                        <div>
                            <h3>Peelingi chemiczne są odpowiednie dla osób: </h3>
                            <ul>
                                <li> Zmagających się z trądzikiem, zaskórnikami i nadmiernym wydzielaniem sebum.
                                </li>
                                <li> Z przebarwieniami, plamami pigmentacyjnymi i nierównym kolorytem skóry.
                                </li>
                                <li> Z widocznymi zmarszczkami, utratą jędrności i elastyczności skóry.
                                </li>
                                <li> Pragnących odświeżyć i odmłodzić skórę, nadając jej zdrowy blask.
                                </li>
                                <li> Z problemami z teksturą skóry, takimi jak blizny potrądzikowe, rozszerzone pory.
                                </li>
                                <li> Szukających metody, która przyspieszy regenerację skóry i poprawi jej strukturę.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3> Jak działają peelingi chemiczne? </h3>
                            <p>
                                Peelingi chemiczne działają poprzez złuszczanie wierzchniej warstwy naskórka, co pobudza skórę do
                                regeneracji i odnowy. W zależności od rodzaju kwasu, peeling może działać na różnej głębokości:
                            </p>
                            <ul>
                                <li> Peelingi powierzchowne (np. kwas glikolowy, mlekowy) – usuwają martwe komórki z
                                    zewnętrznej warstwy naskórka, poprawiając wygląd skóry, jej gładkość i blask.</li>
                                <li>Peelingi średniogłębokie (np. kwas TCA) – penetrują głębiej, redukując zmarszczki, blizny i
                                    przebarwienia.</li>
                                <li>Peelingi głębokie (np. fenolowy) – działają na poziomie skóry właściwej, silnie odmładzając
                                    skórę i poprawiając jej elastyczność.</li>
                            </ul>

                            <p>
                                Połączenie peelingu chemicznego z mezoterapią mikroigłową potęguje efekty zabiegu. Mezoterapia
                                mikroigłowa, dzięki mikronakłuciom, stymuluje skórę do produkcji kolagenu i elastyny, jednocześnie
                                ułatwiając wchłanianie substancji aktywnych z peelingu. Rezultat? Gładka, jędrna i promienna skóra.
                            </p>

                            <h3> Jak przygotować się do zabiegu? </h3>
                            <p>
                                Aby maksymalnie wykorzystać potencjał peelingu chemicznego, ważne jest odpowiednie
                                przygotowanie skóry:
                            </p>
                            <ul>
                                <li> Unikaj opalania – przez co najmniej 2 tygodnie przed zabiegiem.
                                </li>
                                <li>Zrezygnuj z retinoidów i kwasów AHA/BHA na tydzień przed zabiegiem, aby uniknąć
                                    nadmiernego podrażnienia skóry.
                                </li>
                                <li>Nawilżaj skórę – dbaj o odpowiednie nawilżenie, aby skóra była w dobrej kondycji przed
                                    zabiegiem.
                                </li>
                                <li> Unikaj depilacji i innych agresywnych zabiegów na skórze na tydzień przed peelingiem.
                                </li>
                            </ul>

                            <h3> Zalecenia po zabiegu:</h3>

                            <ul>
                                <li>Unikaj słońca – przez co najmniej 2 tygodnie po zabiegu, stosując krem z wysokim filtrem SPF
                                    50.</li>
                                <li> Nawilżaj skórę – intensywnie nawilżaj skórę, stosując delikatne kremy, aby przyspieszyć
                                    proces regeneracji.</li>
                                <li> Unikaj makijażu przez 24-48 godzin po zabiegu, aby skóra mogła swobodnie oddychać.</li>
                                <li> Nie używaj drażniących kosmetyków – zrezygnuj z produktów zawierających retinoidy,
                                    kwasy i alkohol przez co najmniej tydzień po zabiegu.</li>
                                <li> Zrezygnuj z gorących kąpieli, sauny i intensywnego wysiłku fizycznego przez kilka dni po
                                    zabiegu, aby zminimalizować ryzyko podrażnień.</li>
                            </ul>

                            <p>
                                Peelingi chemiczne to skuteczna metoda na poprawę kondycji skóry, która w połączeniu z
                                mezoterapią mikroigłową daje spektakularne efekty odmłodzenia, regeneracji i poprawy struktury
                                skóry. Idealny wybór dla tych, którzy pragną przywrócić swojej skórze zdrowy, promienny wygląd!
                            </p>
                            <p>
                                Zadbaj o swoją skórę i odkryj moc peelingów chemicznych – umów się na wizytę już dziś!
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

