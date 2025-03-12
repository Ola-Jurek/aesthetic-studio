import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Footer} from "./footer.jsx";
import {Container, Row, Col} from "react-grid-system";
import '../css/settings/reset.scss';
import '../css/_about.scss';

import marta from "../assets/marta.jpg";
import bartek from'../assets/bartek.jpg';
import kasia from '../assets/kasia.jpg';

export function About() {
    return (
        <>
            <Navbar/>
            <Container className='container'>

                {/*<Row>*/}
                {/*    <Col sm={12}><hr/></Col>*/}
                {/*</Row>*/}
                <Row className='row'>

                    <Col sm={12}><hr/></Col>

                    <Col sm={6} className='about_card'>

                            <h2 className='about_name'>Marta Kazimierska</h2>

                            <div>
                                <img className='about_img' src={marta} alt='zdjęcie' ></img>
                            </div>


                                <p className='about_text'>
                                    Magister kosmetologii ze specjalizacją inżynierii produktu kosmetycznego.
                                    Specjalizuje się w pracy z wszelkimi bliznami, oraz laserowym usuwaniu pigmentów.
                                    Prezentuje
                                    koncepcję naukowego rozpatrywania zabiegów, eliminowania tych które mają wątpliwą
                                    skuteczność i
                                    obarczone są dużym ryzykiem powikłań. Wieloletnia linergistka doskonale rozumiejąca
                                    procesy
                                    zachodzące w skórze w skojarzeniu z pigmentami. Produkty kosmetyczne rozkłada na
                                    czynniki
                                    pierwsze, dobierając najwłaściwsze i eliminując marketingowe buble. „Dobry duch Studia”,
                                    zawsze
                                    uśmiechnięta, z uwagą i wyrozumiałością podchodząca do problemów naszych klientów.
                                </p>

                    </Col>

                    <Col sm={6} className='about_card'>
                        <h2 className='about_name'>Bartosz Kazimierski</h2>
                            <div>
                                <img className='about_img' src={bartek}></img>
                            </div>

                        <div>
                            <p className='about_text'>
                                Ratownik medyczny. Setki godzin przepracowanych w Ochronie Zdrowia (SOR,
                                oddziały szpitalne), stale dyżuruje w Zespołach Ratownictwa Medycznego. Zafiksowany na
                                punkcie
                                bezpieczeństwa, sterylności i czystości wykonywanych zabiegów. Specjalizuje się w
                                zabiegach
                                iniekcyjnych i laseroterapii. Każde z wprowadzanych urządzeń i zabiegów rozpatrywał pod
                                względem
                                bezpieczeństwa i czasu rekonwalescencji pozabiegowej. Starannie selekcjonuje produkty,
                                dzieląc je
                                na skuteczne i „marketingowe”. Od lat walczy z „medycyną zasłyszaną” i „wiedzą
                                ulotkową”.
                                Maniakalny wielbiciel kawy i długich rozmów przy niej (lub zamiast niej) z każdym
                                klientem.
                            </p>
                        </div>

                    </Col>

                    {/*<Col sm={4}>*/}
                    {/*    <h2 className='about_name'>Katarzyna Stępkowska</h2>*/}
                    {/*        <div>*/}
                    {/*            <img className='about_img' src={justyna}/>*/}
                    {/*        </div>*/}
                    {/*        <p>*/}
                    {/*            Doświadczona kosmetolog z pasją do pielęgnacji skóry i urody. Posiada dyplom z kosmetologii uzyskany na Uniwersytecie Medycznym*/}
                    {/*            w Krakowie oraz liczne certyfikaty i szkolenia w dziedzinie kosmetologii. Jej zamiłowanie do pracy z ludźmi oraz umiejętność słuchania*/}
                    {/*            sprawiają, że potrafi zbudować zaufanie i stworzyć przyjazną atmosferę dla swoich klientów. Katarzyna specjalizuje się w różnorodnych*/}
                    {/*            zabiegach, takich jak mikrodermabrazja, mezoterapia, zabiegi na bazie kwasu hialuronowego oraz peelingi chemiczne.*/}
                    {/*            Jest również ekspertką w doborze odpowiednich kosmetyków do pielęgnacji domowej, dostosowanych do indywidualnych*/}
                    {/*            potrzeb i typu skóry klienta. Jej celem jest nie tylko poprawa wyglądu zewnętrznego, ale także budowanie pewności siebie i*/}
                    {/*            dobrego samopoczucia u swoich klientów. Poza pracą zawodową, Katarzyna uwielbia podróże, kulinaria oraz aktywny wypoczynek*/}
                    {/*            na łonie natury. Jej pasją jest również literatura oraz sztuka, co inspiruje ją w codziennej pracy i rozwijaniu swoich umiejętności.*/}
                    {/*        </p>*/}
                    {/*</Col>*/}

                    {/*<Col sm={4}>*/}
                    {/*    <h2 className='about_name'>Magdalena Rak</h2>*/}
                    {/*        <div>*/}
                    {/*            <img className='about_img' src={justyna}/>*/}
                    {/*        </div>*/}
                    {/*        <p>*/}
                    {/*            Doświadczona i certyfikowana kosmetyczka, która od lat pasjonuje się dbaniem o piękno i zdrowie skóry.*/}
                    {/*            Zdobyła swoje kwalifikacje i certyfikaty w renomowanej szkole kosmetycznej, a następnie zdobywała doświadczenie pracując*/}
                    {/*            w różnych salonach kosmetycznych. Magdalena cechuje się nie tylko profesjonalizmem, ale także empatią i troską o*/}
                    {/*            dobro swoich klientów. Jej specjalnością są różnorodne zabiegi pielęgnacyjne, takie jak zabiegi na twarz, manicure,*/}
                    {/*            pedicure, depilacja oraz masaże relaksacyjne. Dzięki swojej wiedzy i doświadczeniu potrafi indywidualnie dopasować*/}
                    {/*            zabiegi do potrzeb oraz typu skóry każdego klienta. Katarzyna zawsze stara się stworzyć przyjemną i relaksującą*/}
                    {/*            atmosferę w swoim salonie, aby klienci mogli odprężyć się i poczuć się komfortowo podczas wizyty. Poza pracą zawodową,*/}
                    {/*            Magdalena uwielbia podróże, gotowanie oraz aktywność fizyczną, co dodaje jej energii i inspiracji do dalszego rozwoju*/}
                    {/*            zarówno w życiu zawodowym, jak i prywatnym. Jej celem jest nie tylko poprawa wyglądu, ale również podniesienie samopoczucia i*/}
                    {/*            pewności siebie swoich klientów poprzez kompleksową pielęgnację.*/}
                    {/*        </p>*/}
                    {/*</Col>*/}

                    {/*<Col sm={4}>*/}
                    {/*    <h2 className='about_name'>Justyna Urbanek-Trzeszcz</h2>*/}
                    {/*        <div>*/}
                    {/*            <img className='about_img' src={justyna}/>*/}
                    {/*        </div>*/}
                    {/*        <p>*/}
                    {/*            Utalentowana i kreatywna makijażystka, której pasją jest sztuka podkreślania naturalnego piękna oraz eksperymentowanie*/}
                    {/*            z różnorodnymi stylami makijażu. Od najmłodszych lat fascynowała się światem kosmetyków i mody, co sprawiło,*/}
                    {/*            że postanowiła podążać ścieżką zawodową w dziedzinie makijażu. Justyna zdobyła swoje umiejętności i wiedzę na*/}
                    {/*            prestiżowych kursach i szkoleniach z zakresu makijażu artystycznego oraz wizażu, a także stale się doskonali*/}
                    {/*            poprzez śledzenie najnowszych trendów i technik. Jej główną misją jest wydobycie i podkreślenie naturalnego piękna każdej osoby,*/}
                    {/*            przy zachowaniu indywidualnego stylu i preferencji klienta. Justyna specjalizuje się zarówno w makijażu codziennym,*/}
                    {/*            jak i wieczorowym, a także w makijażu okazjonalnym, takim jak makijaż ślubny czy sesje fotograficzne.*/}
                    {/*            Jej umiejętności obejmują również makijaż charakteryzacyjny oraz body painting. Klientki doceniają jej profesjonalizm,*/}
                    {/*            precyzję oraz cierpliwość w wysłuchiwaniu ich potrzeb i oczekiwań. Poza pracą zawodową, Justyna uwielbia podróże,*/}
                    {/*            sztukę i fotografię, które stale inspirują ją w jej twórczej pracy. Jej celem jest nie tylko stworzenie idealnego makijażu,*/}
                    {/*            ale przede wszystkim sprawienie, aby każda klientka poczuła się pewnie i pięknie w swojej skórze.*/}
                    {/*        </p>*/}
                    {/*</Col>*/}

                </Row>
            </Container>

            <Footer/>
        </>
    );
}

