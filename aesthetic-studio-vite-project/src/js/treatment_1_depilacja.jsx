import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
import React from "react";
import {TreatmentHeading, TreatmentSidebar, TreatmentDescription, TreatmentsPriceList} from "./treatmentSingle.jsx";
import {Navbar} from "./navbar.jsx";
import Treatments from "./treatments.jsx";




export function TreatmentDepilacja() {
    return (
        <>
            <Navbar/>
            <Container fluid style={{padding: 0, margin: 0, maxWidth: '100vw',}}>

                <Row>
                    <Col sm={12} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid green' }}>
                        <h1>Depilacja laserowa</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <img src={zabieg} alt='zdjęcie' style={{height: '400px',backgroundSize:'cover'}}></img>
                    </Col>
                    <Col sm={4} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid blue' }}>
                        <h3> Cena: </h3>
                        <p>0d 150 zł - szczegółowy cennik na dole strony</p>

                        <h3>Obszar zabigowy:</h3>
                        <p>Bikini, Brzuch, Kolana, Łydki, Pachy, Plecy, Przedramiona, Ramiona, Wąsik, Twarz, Uda</p>

                        <h3>Na problem:</h3>
                        <p> Owłosienie </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} style={{ wordWrap: 'break-word', lineHeight: '1.6', padding: '10px', border: '2px solid pink', textAlign:'start', paddingLeft:'20px' }}>
                        <h2> Laser diodowy Medika Polska Trio Laser SLD 755nm + 808nm + 1064nm </h2>

                        <div>
                            <ul>
                                <li> Laser Trio SLD jest idealnym i skutecznym rozwiązaniem, które wykorzystuje najnowocześniejszą technologię połączenia 3 długości fal: </li>
                                <li> •	755 nm: reaguje nawet na niewielką ilość melaniny, </li>
                                <li> •	808 nm: to najczęściej spotykana długość fali w laserach diodowych, która wykazuje się niezwykłą skutecznością przy ciemnych włosach </li>
                                <li> •	1064 nm: jest to wiązka, która jest w stanie dostać się nawet do najgłębiej położonych mieszków włosowych, nie uszkadzając przy tym skóry. Fala o tej długości działa przede wszystkim na hemoglobinę. Fale te nastawione są na naczynia włosowate, które otaczają mieszek włosowy, a nie na melaninę, która zawarta jest we włosku. Laser dociera aż do brodawki, gdzie niszczone są naczynia włosowate, które odżywiają mieszek włosowy. Jeśli mieszek nie jest odżywiony, to umiera, dzięki czemu depilacja jest skuteczna. </li>
                            </ul>
                        </div>
                        <p> Idealnie gładkie ciało jest możliwe! Nasz cel to - koniec z podrażnieniami, wrastającymi włoskami i krótkotrwałym efektem gładkości skóry. </p>

                        <div>
                            <h3> Przeciwwskazania do depilacji laserowej: </h3>
                            <ul>
                                <li> •	Fototypy skóry 5 i 6 według Fitzpatricka </li>
                                <li> •	mocna, świeża opalenizna </li>
                                <li> •	zażywanie preparatów światłouczulających (np. zioła rumianek, słonecznik, pokrzywa, krwawnik, wrotycz, nawłoć, bylica pospolita czy stokrotka) </li>
                                <li> •	wyrywanie włosów do 4 tygodni przed zabiegiem;</li>
                                <li> •	choroba nowotworowa </li>
                                <li> •	ciąża, karmienie piersią </li>
                                <li> •	opryszczka, zmiany wirusowe, bakteryjne w miejscu depilacji </li>
                                <li> •	stosowanie retinoidów w miejscu depilacji;</li>
                                <li> •	łuszczyca, rybia łuska </li>
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