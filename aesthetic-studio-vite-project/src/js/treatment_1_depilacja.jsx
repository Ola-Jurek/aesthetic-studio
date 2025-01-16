import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
// import React from "react";
import {Navbar} from "./navbar.jsx";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import '../css/_treatment_single.scss';
import depilacja from './../assets/zabieg_depilacja.jpg';
import React from "react";


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



export function TreatmentDepilacja() {

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
                        <h1>Depilacja laserowa</h1>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        <img src={depilacja} alt='zdjęcie' className='treatment_photo'></img>
                    </Col>
                    <Col sm={6} className='treatment_small_description'>
                        <h2> Cena: </h2>
                        <p>0d 150 zł</p>

                        <h2>Obszar zabigowy:</h2>
                        <p>Bikini, Brzuch, Kolana, Łydki, Pachy, Plecy, Przedramiona, Ramiona, Wąsik, Twarz, Uda</p>

                        <h2>Na problem:</h2>
                        <p> Owłosienie </p>
                    </Col>
                </Row>

            </Container>

                <Container>

                    <Row>
                        <Col sm={12}><hr/></Col>
                    </Row>

                    <Row className='treatment_section2'>
                        <Col sm={12}>
                            <h3> Laser diodowy Medika Polska Trio Laser SLD 755nm + 808nm + 1064nm </h3>


                                <ul>
                                    Laser Trio SLD jest idealnym i skutecznym rozwiązaniem, które wykorzystuje najnowocześniejszą technologię połączenia 3 długości fal:
                                    <li> 755 nm: reaguje nawet na niewielką ilość melaniny, </li>
                                    <li> 808 nm: to najczęściej spotykana długość fali w laserach diodowych, która wykazuje się niezwykłą skutecznością przy ciemnych włosach </li>
                                    <li> 1064 nm: jest to wiązka, która jest w stanie dostać się nawet do najgłębiej położonych mieszków włosowych, nie uszkadzając przy tym skóry. Fala o tej długości działa przede wszystkim na hemoglobinę. Fale te nastawione są na naczynia włosowate, które otaczają mieszek włosowy, a nie na melaninę, która zawarta jest we włosku. Laser dociera aż do brodawki, gdzie niszczone są naczynia włosowate, które odżywiają mieszek włosowy. Jeśli mieszek nie jest odżywiony, to umiera, dzięki czemu depilacja jest skuteczna. </li>
                                </ul>

                            <p> Idealnie gładkie ciało jest możliwe! Nasz cel to - koniec z podrażnieniami, wrastającymi włoskami i krótkotrwałym efektem gładkości skóry. </p>


                                <h3> Przeciwwskazania do depilacji laserowej: </h3>
                                <ul>
                                    <li> Fototypy skóry 5 i 6 według Fitzpatricka </li>
                                    <li> mocna, świeża opalenizna </li>
                                    <li> zażywanie preparatów światłouczulających (np. zioła rumianek, słonecznik, pokrzywa, krwawnik, wrotycz, nawłoć, bylica pospolita czy stokrotka) </li>
                                    <li> wyrywanie włosów do 4 tygodni przed zabiegiem;</li>
                                    <li> choroba nowotworowa </li>
                                    <li> ciąża, karmienie piersią </li>
                                    <li> opryszczka, zmiany wirusowe, bakteryjne w miejscu depilacji </li>
                                    <li> stosowanie retinoidów w miejscu depilacji;</li>
                                    <li> łuszczyca, rybia łuska </li>
                                </ul>

                                <h3> Jak przygotować się do zabiegu depilacji laserowej? </h3>
                                <ul>
                                    <li> W przeddzień depilacji laserowej zgól włosy </li>
                                    <li> Nie nakładaj na skórę środków nawilżających, odżywczych (kremów, balsamów, olejków) </li>
                                    <li> Nie używaj perfumów na miejsce zabiegowe </li>
                                    <li> Nie stosuj w dniu zabiegu antyprespirantu </li>
                                    <li> Przez 2-3 tygodnie przed zabiegiem unikaj ekspozycji na promieniowanie UV. </li>
                                </ul>

                                <h3> Zalecenie pozabiegowe: </h3>
                                <ul>
                                    <li> Zastosuj preparat łagodzący (żel aloesowy, alantan lub d-panthenol). Do 2 tygodni po zabiegu nie opalaj skóry oraz stosuj krem z filtrem SPF </li>
                                    <li> Ilość zabiegów oraz efekty są uzależnione od wielu czynników - koloru włosa, stanu hormonalnego, predyspozycji genetycznych oraz innych czynników u każdego pacjenta. Najczęściej nasi klienci wykonują około 6-8 zabiegów w odstępach co około 6-8 tygodni. </li>
                                    <li> Oczywiście wybierając kilka obszarów </li>
                                </ul>

                        </Col>
                    </Row>

                    <Row className="treatment_section2">
                        <Col sm={12}>
                            <hr/>
                            <h3> Szczegółowy cennik: </h3>
                        </Col>

                        <Col sm={12}><PriceListItem description={'twarz(wąsik + broda + szyja'} price={'150 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'pachy'} price={'150 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'kark'} price={'150 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'przedramiona'} price={'150 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'ramiona'} price={'200 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'klatka pierisowa'} price={'250 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'górna część pleców'} price={'200 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'dolna część pleców'} price={'200 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'brzuch'} price={'200 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'bikini płytkie(linia majtek)'} price={'150 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'bikini głębokie'} price={'250 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'łydki'} price={'250 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'uda'} price={'300 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'stopy'} price={'150 PLN'}/></Col>
                        <Col sm={12}><PriceListItem description={'dłonie'} price={'100 PLN'}/></Col>
                    </Row>

                    <Row className="treatment_section2" >
                        <Col sm={12}><hr/></Col>
                    </Row>

                </Container>

            <Footer/>
        </>
    );
}