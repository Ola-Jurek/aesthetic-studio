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

export function TreatmentLaserFrakcyjny(props) {
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
                        <h1>Laser frakcyjny FINEXEL CO₂</h1>
                        <p className='treatment_section1_more'> Głęboka regeneracja i odmłodzenie skóry </p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        <img src={team} alt='zdjęcie' className='treatment_photo'></img>
                    </Col>
                    <Col sm={6} className='treatment_small_description'>

                        <h3> Cena: </h3>
                        <p>od 200 zł</p>

                        {/*<h3>Czas trwania:</h3>*/}
                        {/*<p>około 60 minut</p>*/}

                        <h3>Na problem:</h3>
                        <p> Regeneracja i odmłodzenie skóry </p>

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
                            Zabieg laserem frakcyjnym FINEXEL jest idealny dla osób, które chcą:
                            <li> Osoby z oznakami starzenia – redukuje zmarszczki i poprawia napięcie skóry. </li>
                            <li> Osoby z cerą zmęczoną i odwodnioną – działa regenerująco i odmładzająco.</li>
                            <li> Osoby z bliznami potrądzikowymi – wspomaga procesy naprawcze i wygładza skórę.</li>
                            <li> Osoby z przebarwieniami – wyrównuje koloryt skóry i redukuje przebarwienia.</li>
                            <li> Osoby z problemem łysienia – wspiera odrastanie włosów i poprawia ich kondycję.</li>
                        </ul>


                        <h3> Jak to działa? </h3>
                        <ul> Laser FINEXEL to zaawansowany laser ablacyjny CO₂ w trybie frakcyjnym. Technologia polega
                            na
                            tym, że światło laserowe podawane jest w wielu mikrowiązkach, które tworzą tysiące
                            mikroskopijnych kolumn mikrouszkodzeń w skórze, pozostawiając pomiędzy nimi obszary
                            nieuszkodzone. Dzięki temu:

                            <li> Stymulowany jest naturalny mechanizm gojenia (remodeling), produkcja kolagenu i
                                elastyny </li>
                            <li> Uszkodzenia są precyzyjne i kontrolowane, nie dochodzi do uszkodzenia całej powierzchni
                                skóry
                            </li>
                            <li> Dzięki wysokiej mocy szczytowej i małej średnicy plamki (np. ~ 80 µm) okres gojenia
                                może
                                być krótszy niż przy starszych urządzeniach
                            </li>
                            <li> Można osiągnąć efekt odmłodzenia, ujędrnienia, redukcji blizn i przebarwień</li>

                            Zabieg może być wykonywany zarówno w trybie estetycznym (frakcyjnym), jak i w trybie
                            chirurgicznym (do usuwania zmian skórnych)
                        </ul>

                        <h3> Okres gojenia i regeneracji: </h3>
                        <p>
                            Przez pierwsze dni skóra może być zaczerwieniona, opuchnięta, mogą pojawić się
                            mikrostrupki. Proces gojenia trwa zwykle od 3 do 7 dni, a pełna odbudowa i efekt
                            remodelingowy rozwija się przez kilka tygodni do miesięcy.
                        </p>

                        <h3> Przeciwwskazania: </h3>
                        <ul> Zabiegu nie wykonuje się u osób, które mają:
                            <li> Ciążę lub karmienie piersią </li>
                            <li> Aktywne infekcje skórne (opryszczka, grzybica, stany zapalne)</li>
                            <li> Choroby autoimmunologiczne lub immunosupresję</li>
                            <li> Skłonność do bliznowców/keloidów</li>
                            <li> Nieuregulowaną cukrzycę</li>
                            <li> Zaburzenia krzepnięcia lub przyjmowanie leków przeciwzakrzepowych</li>
                            <li> Świeżą opaleniznę lub używanie samoopalaczy</li>
                            <li> Stosowanie leków lub suplementów światłouczulających (np. retinoidy, niektóre
                                antybiotyki)
                            </li>
                            <li> Choroby nowotworowe skóry lub wcześniejszą terapię onkologiczną (konieczna indywidualna
                                ocena)
                            </li>
                            <li> Choroby dermatologiczne typu łuszczyca, bielactwo w aktywnej fazie</li>
                            <li> Przeciwwskazania ogólne do zabiegów laserowych (np. padaczka, choroby serca z
                                rozrusznikiem)
                            </li>
                            <li> Przeziębienie i antybiotykoterapia</li>
                        </ul>

                        <h3> Zalecenia przed zabiegiem: </h3>
                        <ul>
                            <li> Nie opalać się – skóra powinna być bez opalenizny co najmniej 10–14 dni przed zabiegiem
                            </li>
                            <li> Przestać stosować kosmetyki zawierające retinoidy, kwasy owocowe na kilka dni do tygodnia
                                przed zabiegiem
                            </li>
                            <li> Unikać preparatów światłouczulających i niektórych leków (wymaga konsultacji lekarskiej)</li>
                            <li> Przed zabiegiem można zalecić preparaty wspomagające kondycję skóry (np. kremy
                                regenerujące, natłuszczające)
                            </li>
                            <li> Dobre nawodnienie organizmu</li>
                        </ul>

                        <h3> Zalecenia po zabiegu (pielęgnacja pozabiegowa): </h3>
                        <ul>
                            <li> Stosować łagodne kosmetyki bez drażniących składników (bez kwasów, retinoidów, alkoholu)
                            </li>
                            <li> Nakładać kremy regenerujące, łagodzące i natłuszczające (zazwyczaj kilka razy dziennie)
                            </li>
                            <li> Nie zrywać strupków – naturalne złuszczanie</li>
                            <li> Unikać ekspozycji na słońce i stosować wysoką ochronę przeciwsłoneczną (SPF 50) przez co
                                najmniej 4 tygodnie po zabiegu, a często zaleca się dłużej
                            </li>
                            <li> Unikać sauny, basenu, intensywnego wysiłku fizycznego przez około 1–2 tygodnie</li>
                            <li> Nie wykonywać peelingów chemicznych lub mechanicznych w rejonie zabiegowym do czasu
                                pełnego zagojenia (czasem nawet 1–2 miesiące)</li>
                            <li> Utrzymywać czystość skóry – używać czystych ręczników, zmieniać poszewki, unikać kontaktu
                                ze zwierzętami (zwłaszcza gdy skóra ma strupki)</li>
                            <li> Stosować inne zalecenia indywidualne otrzymane od specjalisty</li>

                        </ul>


                        <p> W razie wystąpienia silnych dolegliwości bólowych, przedłużającego się zaczerwienienia lub objawów
                            niepokojących — skontaktować się z gabinetem. </p>

                    </Col>
                </Row>

                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}><PriceListItem description={'twarz'} price={'1000 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja'} price={'1300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja + dekolt'} price={'1500 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'szyja'} price={'500 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dekolt'} price={'500 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'czoło'} price={'400 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'okolica oka'} price={'350 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'okolica ust'} price={'350 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'blizny'} price={'od 300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'rozstępy'} price={'od 400 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'peeling laserowy twarzy'} price={'500 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'peeling laserowy ciało'} price={'od 500 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'usuwanie zmian skórnych (np. włókniaki'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'każda kolejna zmiana'} price={'30 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'zamykanie zmian łojotokowych'} price={''}/></Col>
                    <Col sm={12}><PriceListItem description={'nos'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'broda'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'policzki'} price={'300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'przebarwienia'} price={'od 300 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'plamy soczewicowate'} price={'od 300 PLN'}/></Col>

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

