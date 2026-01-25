import React from 'react';
import {Navbar} from "./navbar.jsx";
import {Col, Container, Row} from "react-grid-system";
import {Footer} from "./footer.jsx";
import {TreatmentSubmenu} from "./treatmentSubmenu.jsx";
import team2 from "./../assets/marta_i_bartek2.jpg"

import { getTreatment } from '../utils/treatmentHelper';
import ReactMarkdown from 'react-markdown';

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

export function TreatmentPeelingWeglowy() {

    const content = getTreatment('weglowy');

    if (!content) return null;

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

            <Container fluid style={{maxWidth: '100vw',}} className='treatment_section1'>

                <Row>
                    <Col sm={12}>
                        <h1>{content?.title}</h1>
                        <p className='treatment_section1_more'>
                            {content?.description && (
                                <p className='treatment_section1_more'>{content.description}</p>
                            )}
                        </p>

                    </Col>
                </Row>

                <Row>
                    <Col sm={6} className='treatment_photoPlace'>
                        <img src={team2} alt='zdjęcie' className='treatment_photo'></img>
                    </Col>

                    <Col sm={6} className='treatment_small_description'>

                        {content?.main_price && (
                            <>
                                <h3> Cena: </h3>
                                <p>{content.main_price}</p>
                            </>
                        )}

                        {content?.treatment_area && (
                            <>
                                <h3>Obszar zabiegowy:</h3>
                                <p>{content.treatment_area}</p>
                            </>
                        )}

                        {content?.duration && (
                            <>
                                <h3>Czas trwania:</h3>
                                <p>{content.duration}</p>
                            </>
                        )}

                        {content?.problem && (
                            <>
                                <h3>Na problem:</h3>
                                <p>{content.problem}</p>
                            </>
                        )}

                    </Col>
                </Row>
            </Container>

            <Container>

                <Row>
                    <Col sm={12}><hr/></Col>
                </Row>

                <Row className='treatment_section2'>
                    <Col sm={12}>

                        <ReactMarkdown>{content?.full_text}</ReactMarkdown>

                    </Col>
                </Row>


                <Row className="treatment_section2">
                    <Col sm={12}>
                        <hr/>
                        <h3> Szczegółowy cennik: </h3>
                    </Col>

                    <Col sm={12}>
                        {content?.detailed_prices && content.detailed_prices.length > 0 ? (
                            content.detailed_prices.map((item, index) => (
                                <PriceListItem
                                    key={index}
                                    description={item.area}
                                    price={item.cost}
                                />
                            ))
                        ) : (
                            <p>Cennik w trakcie aktualizacji...</p>
                        )}
                    </Col>
                </Row>

                <Row className="treatment_section2" >
                    <Col sm={12}><hr/></Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
