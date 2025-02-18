import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import {Footer} from "./footer.jsx";

export function TreatmentZamykwanieZmianNaczyniowych() {
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
                        <h1>Zabiegi zamykania zmian naczyniowych</h1>
                        <p> laser Quadrostar Pro Yellow</p>
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
                        <p> Zabiegi laserowe są najskuteczniejszą formą terapii zmian naczyniowych. Doskonale
                            sprawdzają się w zamykaniu drobnych naczynek, teleangiektazji, zmian typu „port wine”,
                            terapii
                            trądziku różowatego oraz wspomagania leczenia guzowatego nosa. Istotnym jest aby laser
                            wykazywał najwyższe powinowactwo do hemoglobiny, przy jednoczesnym niskim oddziaływaniu na
                            melaninę. Będzie to zwiększało jego skuteczność a zarazem zmniejszy odczucie bólu czy
                            dyskomfortu
                            zabiegowego. Laser Quadrostar Pro Yellow generuje żółtą wiązkę światła o długości 577nm, co
                            czyni
                            go idealnym narzędziem do walki z opisanymi problemami. W porównaniu z laserami IPL, jest
                            bezpieczniejszy, mniej bolesny, oraz powoduje krótszy okres rekonwalescencji po zabiegu.
                            Posiada
                            głowicę typu „pen”, a także nieablacyjną głowicę skanującą która przyspiesza zabieg, oraz
                            zwiększa
                            oddziaływanie nawet na najdrobniejsze naczynia.
                        </p>


                        <h3>Przebieg zabiegu</h3>

                        <p> Zabieg polega na krótkotrwałym podgrzaniu zmiany naczyniowej do ok 70stC, co powoduje
                            natychmiastowe obkurczenie światła naczynia, a także zwiększenie lepkości krwi co skutkuje
                            jego
                            trwałym zamknięciem.</p>


                        <h3> Przeciwwskazania do zabiegu </h3>

                        <ul>
                            <li> Spożywanie ziół fotouczulających (dziurawiec, nagietek, mieszanki ziołowe np.
                                Skrzypovita, Figura itp.) – należy zakończyć stosowanie 2 tygodnie przed zabiegiem
                            </li>
                            <li> Świeża opalenizna (również solarium – 1-2 tygodnie przed zabiegiem)</li>
                            <li> Balsamy samoopalające i brązujące (2 tygodnie przed zabiegiem)</li>
                            <li> Kremy z witaminą A i C oraz kremy z kwasami i substancjami ziołowymi np: krem z
                                nagietkiem,maści sterydowe,maści antybiotykowe. (należy zakończyć kurację 3 tygodnie przed zabiegiem)
                            </li>
                            <li> Aktywne zmiany wirusowe i bakteryjne na skórze objętej zabiegiem</li>
                            <li> Depilacja woskiem lub pęsetą (4 tygodnie przed zabiegiem),</li>
                            <li> Guzy i nowotwory ( przebyty rak skóry, czerniak złośliwy),</li>
                            <li> Bielactwo,łuszczyca oraz inne choroby autoimmunologiczne,</li>
                            <li> Ciąża, karmienie piersią,</li>
                            <li> Rozrusznik serca, implanty, pompa insulinowa,</li>
                            <li> Tendencja do powstawania bliznowców i keloidów,</li>
                            <li> Cukrzyca nieuregulowana,</li>
                            <li> Epilepsja,</li>
                            <li> Zaburzenia krzepnięcia krwi,</li>
                            <li> Stosowanie leków obniżających krzepliwość krwi,</li>
                            <li> Przyjmowanie leków światłoczułych (np. Tetracykliny),</li>
                            <li> Antybiotyki (np: tetracykliny, azytromycyna),</li>
                            <li> Niesteroidowe środki przeciwreumatyczne,</li>
                            <li> Niektóre środki przeciwbakteryjne i przeciwgrzybiczne (terbinafina, ketokonazol,
                                gryzeofulwina).
                            </li>
                        </ul>


                        <h3> Po zabiegu może wystąpić: </h3>

                        <ul>
                            <li> Rumień, </li>
                            <li> Uaktywnienie opryszczki, infekcje bakteryjne w obszarze skóry poddanej zabiegowi,</li>
                            <li> Hipopigmentacje, hiperpigmentacje, </li>
                            <li> Przejściowe przebarwienia (głównie u osób nie stosujących filtrów
                                przeciwsłonecznych lub u osób zdrapujących złuszczający się naskórek, czy
                                skoagulowane naczynie).</li>
                        </ul>


                        <h3> Zalecenie pozabiegowe: </h3>

                        <ul>
                            <li> Schładzanie skóry kompresem otrzymanym w gabinecie, cyklicznie przez pierwsze 24h,</li>
                            <li> W pierwszej dobie po zabiegu stosujemy tylko kremy i kosmetyki zalecane przez operatora i
                                kosmetologa,</li>
                            <li> Nie myjemy twarzy gorącą wodą, </li>
                            <li> Zakaz korzystania z sauny, solarium przez okres min 2 tyg,</li>
                            <li> Używanie kremów z wysoką ochroną UV.</li>
                        </ul>


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

