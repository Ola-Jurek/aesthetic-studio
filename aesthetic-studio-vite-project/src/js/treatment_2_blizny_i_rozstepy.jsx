import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
// import React from "react";
import {Navbar} from "./navbar.jsx";



export function TreatmentBlizny() {
    return (
        <>
            <Navbar/>
            <Container fluid style={{padding: 0, margin: 0, maxWidth: '100vw',}}>

                <Row>
                    <Col sm={12} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid green' }}>
                        <h1>Blizny i rozstępy</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        {/*<img src={foto} style={{height: '400px',backgroundSize:'cover'}}></img>*/}
                    </Col>
                    <Col sm={4} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid blue' }}>
                        <h3> Cena: </h3>
                        <p>0d 250 zł </p>

                        <h3>Obszar zabigowy:</h3>
                        <p>Wszelkiego rodzaju blizny</p>

                        <h3>Na problem:</h3>
                        <p> blizny, rozstępy, ubytki tkanki </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid pink', textAlign:'start', paddingLeft:'20px' }}>
                        <h2> Na czym polega zabieg? </h2>

                        <p> Blizny są powszechnym defektem skórnym, który może znacząco wpłynąć na wygląd i
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
    );
}