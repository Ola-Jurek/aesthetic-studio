import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
// import React from "react";
import {Navbar} from "./navbar.jsx";
import '../css/_treatment_single.scss';
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import React from "react";
import zabieg_blizny from "../assets/zabieg_blizny.jpg";

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

export function TreatmentBlizny() {
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
                        <h1>Blizny i rozstępy</h1>
                        <p className='treatment_section1_more'></p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        <img src={zabieg_blizny} alt='zdjęcie' className='treatment_photo'></img>
                    </Col>

                    <Col sm={6} className='treatment_small_description'>
                        <h2> Cena: </h2>
                        <p>0d 250 zł </p>

                        <h2>Obszar zabigowy:</h2>
                        <p>Wszelkiego rodzaju blizny</p>

                        <h2>Na problem:</h2>
                        <p> blizny, rozstępy, ubytki tkanki </p>
                    </Col>
                </Row>

            </Container>

            <Container>

                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>

                <Row className='treatment_section2'>
                    <Col sm={12}>
                        <h3> Na czym polega zabieg? </h3>

                        <p>
                            Blizny są powszechnym defektem skórnym, który może znacząco wpłynąć na wygląd i
                            samopoczucie każdego człowieka. Tworzenie się blizn jest nieodłącznym procesem w naturalnym
                            cyklu gojenia się skóry. Gdy dochodzi do uszkodzenia ciągłości naskórka, organizm natychmiast
                            rozpoczyna proces naprawy, w którym tworzą się blizny. Chociaż jest to istotny mechanizm obronny
                            organizmu, mający na celu zabezpieczenie rany i przywrócenie integralności skóry, jednakże blizny
                            mogą prowadzić do różnorodnych problemów i obniżać komfort życia jednostki. Blizny, będące
                            efektem tego niezbędnego procesu gojenia, mogą być bolesne, swędzące, a także ograniczać zakres
                            ruchów skóry. Mogą przybierać różne formy, wielkości i kolory. Pojawiają się w wyniku różnych
                            przyczyn, takich jak urazy, oparzenia czy też operacje chirurgiczne. Pozostają one często na ciele
                            przez całe życie. Ponadto stanowią wyzwanie estetyczne i często prowadzą do kompleksu związanego
                            z wyglądem skóry. Ich obecność może prowadzić nie tylko do problemów kosmetycznych, ale
                            również do powikłań fizycznych i psychicznych.
                        </p>

                        <p>
                            Jako jedyni w naszym regionie prowadzimy terapię blizn metodą ScarINK. Mikronakłuwanie
                            to proces polegający na kontrolowanym wywołaniu mikrouszkodzeń na powierzchni skóry za pomocą
                            specjalnego urządzenia PURO. Jest to niewielkie automatyczne narzędzie wyposażone w igły

                            precyzyjnie nakłuwające skórę. Celem tego zabiegu jest wytworzenie kontrolowanego urazu skóry i
                            rozpoczęcie naturalnego procesu odbudowy włókien kolagenu i nowej tkanki skórnej. Dodatkowo po
                            wykonanym zabiegu wykorzystuje się składniki aktywne oraz preparatu stymulujące Gen Factor,
                            które mają za zadanie wspomagać zainicjowane procesy naprawcze skóry.
                        </p>

                        <div>
                            <h3> Proces regeneracji: </h3>
                            <p>
                                Zabieg mikronakłuwania zwykle wiąże się z niewielkim lub umiarkowanym bólem, który może
                                się różnić w zależności od obszaru poddanego zabiegowi, parametrów urządzenia, długości wysuwu
                                igły, głębokości iniekcji oraz indywidualnej tolerancji bólu. Po zabiegu może pojawić się rumień, który
                                zazwyczaj ustępuje w ciągu 38 kilku do kilkunastu godzin, oraz możliwy obrzęk i uczucie pieczenia.
                                Proces regeneracji i przebudowy skóry w obszarze poddanym zabiegowi może trwać nawet kilka
                                tygodni od jego wykonania.
                            </p>

                            <h3> Kiedy najlepiej wykonać zabieg? </h3>
                            <p>
                                Procedurę mikronakłuć na bliźnie można przeprowadzić najwcześniej po sześciu miesiącach
                                od momentu jej powstania. Liczba zabiegów oraz ich częstotliwość jest ustalana indywidualnie w
                                zależności od rodzaju, rozmiaru blizny i obszaru zabiegowego oraz od satysfakcji z uzyskanych
                                efektów. Zazwyczaj wykonuje się 3-10 zabiegów co 30 dni.
                            </p>
                        </div>
                    </Col>
                </Row>


                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}><PriceListItem description={'twarz'} price={'550 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'szyja'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja'} price={'700 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dekolt'} price={'250 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'biust'} price={'500 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'twarz + szyja + dekolt'} price={'850 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'dłonie'} price={'200 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'brzuch(rozstępy)'} price={'od 400 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'uda'} price={'od 400 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'blizny'} price={'od 250 PLN'}/></Col>
                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>

            </Container>


            <Footer/>
        </>
    );
}