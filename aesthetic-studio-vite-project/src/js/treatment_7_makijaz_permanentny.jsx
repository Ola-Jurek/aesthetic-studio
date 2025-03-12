import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import {Footer} from "./footer.jsx";
import team from "./../assets/team.jpg";

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

export function TreatmentMakijazPermanentny() {
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
                        <h1>Makijaż permanentny</h1>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        <img src={team} alt='zdjęcie' className='treatment_photo'></img>
                    </Col>
                    <Col sm={6} className='treatment_small_description'>

                        <h2> Cena: </h2>
                        <p> od 600 zł</p>

                        <h2>Czas trwania:</h2>
                        <p> około 2 godzin </p>

                    </Col>
                </Row>

            </Container>

            <Container>

                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>

                <Row className='treatment_section2'>
                    <Col sm={12}>
                        <p> Makijaż permanentny to popularna metoda długotrwałego podkreślenia naturalnych rysów twarzy,
                            obejmująca brwi, usta oraz powieki. Jest to idealne rozwiązanie dla osób, które chcą zaoszczędzić
                            czas na codziennym makijażu, pragną poprawić symetrię twarzy lub zmagają się z rzadkimi, jasnymi
                            lub nieregularnymi brwiami. Technika ta jest również polecana osobom z alergiami na tradycyjne
                            kosmetyki lub tym, które cenią trwały, estetyczny efekt bez konieczności ciągłych poprawek.
                        </p>



                            <h3>Przebieg zabiegu</h3>

                            <p> Zabieg makijażu permanentnego trwa zazwyczaj około dwóch godzin i składa się z kilku etapów:
                                konsultacji, doboru odpowiedniego kształtu i koloru pigmentu, a następnie precyzyjnej aplikacji
                                barwnika w warstwy naskórka przy użyciu specjalistycznego urządzenia. Procedura jest wykonywana
                                z uwzględnieniem wysokich standardów higieny oraz bezpieczeństwa. </p>


                            <h3> Korekta i dopigmentowanie </h3>

                            <p> W cenie zabiegu zawarte jest dopigmentowanie, które odbywa się po upływie 4-6 tygodni. Korekta ta
                                pozwala wyrównać ewentualne różnice w intensywności koloru i zapewnić idealny efekt końcowy,
                                dostosowany do indywidualnych potrzeb klienta. </p>

                            <p> Makijaż permanentny to inwestycja w wygodę i pewność siebie, zapewniająca trwały, naturalny
                            wygląd na długi czas. </p>


                            <h3> Przeciwwskazania do makijażu permanentnego </h3>

                            <ul> Zabieg makijażu permanentnego, choć bezpieczny, nie jest odpowiedni dla każdego. Oto
                                najważniejsze przeciwwskazania:
                                <li> Ciąża i okres karmienia piersią, </li>
                                <li> Aktywne infekcje, takie jak opryszczka lub stany zapalne skóry w miejscu zabiegu, </li>
                                <li> Choroby autoimmunologiczne </li>
                                <li> Cukrzyca (szczególnie insulinozależna), </li>
                                <li> Skłonność do bliznowców (keloidów), </li>
                                <li> Nowotwory (wymagana zgoda lekarza), </li>
                                <li> Niezaleczone choroby skóry, takie jak łuszczyca w miejscu zabiegu, </li>
                                <li> Przebyta antybiotykoterapia (w przeciągu dwóch ostatnich tygodni), </li>
                                <li> Przyjmowanie sterydów. </li>
                            </ul>

                        <p> Przed przystąpieniem do zabiegu zaleca się przeprowadzenie szczegółowej konsultacji, aby wykluczyć
                            ewentualne przeciwwskazania. </p>

                        <h3> Zalecenie pozabiegowe: </h3>

                        <ul> Dla optymalnego efektu i szybkiego gojenia się skóry należy przestrzegać zaleceń pozabiegowych:
                            <li> Unikanie dotykania i drapania miejsca zabiegu – minimalizuje to ryzyko infekcji. </li>
                            <li> Stosowanie kremów regenerujących zgodnie z zaleceniami specjalisty. </li>
                            <li> Unikanie ekspozycji na słońce i korzystania z solarium przez co najmniej 4 tygodnie – promienie UV
                                mogą wpłynąć na trwałość pigmentu. </li>
                            <li> Ochrona przed wodą, sauną, basenem przez pierwsze 7-10 dni, aby uniknąć przedwczesnego
                                wypłukiwania pigmentu. </li>
                            <li> Niestosowanie kosmetyków kolorowych ani pielęgnacyjnych na obszarze poddanym zabiegowi do
                                czasu całkowitego zagojenia. </li>
                        </ul>

                        <p> Zalecane jest także odpowiednie nawilżanie i obserwacja procesu gojenia. Pełny efekt widoczny jest
                            po wykonaniu dopigmentowania, które pozwala wyrównać ewentualne ubytki pigmentu.
                            Przestrzeganie zaleceń przyczynia się do długotrwałego i estetycznego rezultatu makijażu
                            permanentnego! </p>

                    </Col>
                </Row>

                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}><PriceListItem description={'brwi'} price={'700 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'usta'} price={'700 PLN'}/></Col>
                    <Col sm={12}><PriceListItem description={'kreska na powiece'} price={'600 PLN'}/></Col>

                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>

            </Container>

            <Footer/>
        </>
    );
}

