import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Footer} from "./footer.jsx";
import {Container, Row, Col} from "react-grid-system";
import '../css/settings/reset.scss';
import '../css/_about.scss';

import marta from "../assets/marta.jpg";
import bartek from'../assets/bartek.jpg';
import justyna from '../assets/justyna.jpg';

export function About() {
    return (
        <>
            <Navbar/>
            <Container className='container'>

                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>
                <Row className='row'>

                    <Col sm={4} className='about_card'>
                        <h2 className='about_name'>Marta Kazimierska</h2>
                            <div >
                                <img className='about_img' src={marta} alt='zdjęcie' ></img>
                            </div>
                            <p>
                                Utalentowana i doświadczona kosmetolog, która pasjonuje się pielęgnacją skóry i urodą od najmłodszych lat.
                                Po ukończeniu studiów z kosmetologii na Uniwersytecie Medycznym w Warszawie, zdobyła dodatkowe certyfikaty i
                                szkolenia w zakresie nowoczesnych metod pielęgnacyjnych oraz technik makijażu. Marta specjalizuje się w zabiegach twarzy,
                                takich jak oczyszczanie skóry, peelingi chemiczne oraz zabiegi anti-aging. Jej cierpliwość i empatia sprawiają,
                                że potrafi słuchać potrzeb swoich klientów i dostosowywać zabiegi do indywidualnych potrzeb i oczekiwań.
                                Marta jest również zaangażowana w ciągłe doskonalenie swoich umiejętności poprzez uczestnictwo w konferencjach
                                branżowych oraz szkoleniach. Poza pracą zawodową, Marta uwielbia podróże i aktywny wypoczynek na świeżym powietrzu.
                                Jej celem zawodowym jest nie tylko poprawa wyglądu zewnętrznego klientów, ale również podniesienie ich poczucia własnej
                                wartości i pewności siebie poprzez dbałość o skórę i urodę.
                            </p>
                    </Col>

                    <Col sm={4}>
                        <h2 className='about_name'>Bartosz Kazimierski</h2>
                            <div>
                                <img className='about_img' src={bartek}></img>
                            </div>
                            <p>
                                Ceniony lekarz medycyny estetycznej z bogatym doświadczeniem i pasją do doskonalenia urody.
                                Ukończył studia medyczne na Uniwersytecie Jagiellońskim, po których podjął specjalizację z zakresu medycyny
                                estetycznej i anti-agingowej. Bartosz jest znany ze swojego profesjonalizmu, delikatności oraz precyzji w wykonywaniu zabiegów.
                                Jego podejście do pacjentów jest indywidualne i empatyczne – zawsze stara się zrozumieć ich oczekiwania oraz dostosować zabiegi
                                do ich potrzeb. Posiada szeroką wiedzę na temat najnowszych osiągnięć w dziedzinie medycyny estetycznej i stale podnosi swoje
                                kwalifikacje poprzez uczestnictwo w międzynarodowych konferencjach i szkoleniach. Bartosz specjalizuje się w różnorodnych zabiegach,
                                takich jak wypełniacze, toksyna botulinowa, mezoterapia czy laseroterapia. Jego celem jest nie tylko poprawa wyglądu pacjentów,
                                ale przede wszystkim ich zadowolenie oraz samopoczucie. Poza pracą zawodową, Bartosz jest miłośnikiem sportu i aktywnego trybu życia,
                                co dodatkowo wpływa na jego podejście do zdrowia i urody.
                            </p>
                    </Col>

                    <Col sm={4}>
                        <h2 className='about_name'>Katarzyna Stępkowska</h2>
                            <div>
                                <img className='about_img' src={justyna}/>
                            </div>
                            <p>
                                Doświadczona kosmetolog z pasją do pielęgnacji skóry i urody. Posiada dyplom z kosmetologii uzyskany na Uniwersytecie Medycznym
                                w Krakowie oraz liczne certyfikaty i szkolenia w dziedzinie kosmetologii. Jej zamiłowanie do pracy z ludźmi oraz umiejętność słuchania
                                sprawiają, że potrafi zbudować zaufanie i stworzyć przyjazną atmosferę dla swoich klientów. Katarzyna specjalizuje się w różnorodnych
                                zabiegach, takich jak mikrodermabrazja, mezoterapia, zabiegi na bazie kwasu hialuronowego oraz peelingi chemiczne.
                                Jest również ekspertką w doborze odpowiednich kosmetyków do pielęgnacji domowej, dostosowanych do indywidualnych
                                potrzeb i typu skóry klienta. Jej celem jest nie tylko poprawa wyglądu zewnętrznego, ale także budowanie pewności siebie i
                                dobrego samopoczucia u swoich klientów. Poza pracą zawodową, Katarzyna uwielbia podróże, kulinaria oraz aktywny wypoczynek
                                na łonie natury. Jej pasją jest również literatura oraz sztuka, co inspiruje ją w codziennej pracy i rozwijaniu swoich umiejętności.
                            </p>
                    </Col>

                    <Col sm={4}>
                        <h2 className='about_name'>Magdalena Rak</h2>
                            <div>
                                <img className='about_img' src={justyna}/>
                            </div>
                            <p>
                                Doświadczona i certyfikowana kosmetyczka, która od lat pasjonuje się dbaniem o piękno i zdrowie skóry.
                                Zdobyła swoje kwalifikacje i certyfikaty w renomowanej szkole kosmetycznej, a następnie zdobywała doświadczenie pracując
                                w różnych salonach kosmetycznych. Magdalena cechuje się nie tylko profesjonalizmem, ale także empatią i troską o
                                dobro swoich klientów. Jej specjalnością są różnorodne zabiegi pielęgnacyjne, takie jak zabiegi na twarz, manicure,
                                pedicure, depilacja oraz masaże relaksacyjne. Dzięki swojej wiedzy i doświadczeniu potrafi indywidualnie dopasować
                                zabiegi do potrzeb oraz typu skóry każdego klienta. Katarzyna zawsze stara się stworzyć przyjemną i relaksującą
                                atmosferę w swoim salonie, aby klienci mogli odprężyć się i poczuć się komfortowo podczas wizyty. Poza pracą zawodową,
                                Magdalena uwielbia podróże, gotowanie oraz aktywność fizyczną, co dodaje jej energii i inspiracji do dalszego rozwoju
                                zarówno w życiu zawodowym, jak i prywatnym. Jej celem jest nie tylko poprawa wyglądu, ale również podniesienie samopoczucia i
                                pewności siebie swoich klientów poprzez kompleksową pielęgnację.
                            </p>
                    </Col>

                    <Col sm={4}>
                        <h2 className='about_name'>Justyna Urbanek-Trzeszcz</h2>
                            <div>
                                <img className='about_img' src={justyna}/>
                            </div>
                            <p>
                                Utalentowana i kreatywna makijażystka, której pasją jest sztuka podkreślania naturalnego piękna oraz eksperymentowanie
                                z różnorodnymi stylami makijażu. Od najmłodszych lat fascynowała się światem kosmetyków i mody, co sprawiło,
                                że postanowiła podążać ścieżką zawodową w dziedzinie makijażu. Justyna zdobyła swoje umiejętności i wiedzę na
                                prestiżowych kursach i szkoleniach z zakresu makijażu artystycznego oraz wizażu, a także stale się doskonali
                                poprzez śledzenie najnowszych trendów i technik. Jej główną misją jest wydobycie i podkreślenie naturalnego piękna każdej osoby,
                                przy zachowaniu indywidualnego stylu i preferencji klienta. Justyna specjalizuje się zarówno w makijażu codziennym,
                                jak i wieczorowym, a także w makijażu okazjonalnym, takim jak makijaż ślubny czy sesje fotograficzne.
                                Jej umiejętności obejmują również makijaż charakteryzacyjny oraz body painting. Klientki doceniają jej profesjonalizm,
                                precyzję oraz cierpliwość w wysłuchiwaniu ich potrzeb i oczekiwań. Poza pracą zawodową, Justyna uwielbia podróże,
                                sztukę i fotografię, które stale inspirują ją w jej twórczej pracy. Jej celem jest nie tylko stworzenie idealnego makijażu,
                                ale przede wszystkim sprawienie, aby każda klientka poczuła się pewnie i pięknie w swojej skórze.
                            </p>
                    </Col>

                </Row>
            </Container>

            <Footer/>
        </>
    );
}

