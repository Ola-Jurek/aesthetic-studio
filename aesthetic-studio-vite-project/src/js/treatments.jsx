import React, { useRef, useEffect, useState } from 'react';
import { Navbar } from './navbar.jsx';
import '../App.scss';
import '../css/_treatments.scss';
import { Container, Row, Col } from 'react-grid-system';
import { HashLink as Link } from 'react-router-hash-link';
import { Footer } from './footer.jsx';

import {TreatmentDepilacja} from "./treatment_1_depilacja.jsx";

export function Treatments() {
    const [isChecked, setIsChecked] = useState({
        body: false,
        face: false,
        model: false,
        tychology: false,
        whelk: false
    });

    const toggleRefs = useRef({
        body: null,
        face: null,
        model: null,
        tychology: null,
        whelk: null
    });

    const handleClickOutside = (event) => {
        Object.keys(toggleRefs.current).forEach(key => {
            if (toggleRefs.current[key] && !toggleRefs.current[key].contains(event.target)) {
                setIsChecked(prevState => ({ ...prevState, [key]: false }));
            }
        });
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <>
            <Navbar />
            <Container className='treatments_nav submenu'>
                <Row>
                    <Col sm={12}><hr /></Col>
                    <Col sm={2.27} className='submenu_item dropdown toggle' ref={el => toggleRefs.current.body = el} onClick={() => setIsChecked(prevState => ({ ...prevState, body: !prevState.body }))}>
                        Ciało
                        {isChecked.body && (

                                <div className='treatments_menu'>

                                <Link to='/treatment_depilacja'>Depilacja laserowa</Link>
                                <a href="#">Terapia blizn i rozstępów</a>
                                <a href="#">Lipoliza infekcyjna</a>
                                <a href="#">Radiofrekwencja mikroigłowa</a>
                                <a href="#">Laserowe usuwanie tatuaży</a>
                                <a href="#">Rewitalizacja skóry głowy</a>

                            </div>



                        )}
                    </Col>
                    <Col sm={2.27} className='submenu_item dropdown toggle' ref={el => toggleRefs.current.face = el} onClick={() => setIsChecked(prevState => ({ ...prevState, face: !prevState.face }))}>
                        Twarz
                        {isChecked.face && (
                            <ul>
                                <li><a href="#">Makijaż permanentny</a></li>
                                <li><a href="#">Henna pudrowa</a></li>
                                <li><a href="#">Makijaż okolicznościowy</a></li>
                                <li><a href="#">Mezoteriapia igłowa</a></li>
                                <li><a href="#">Mezoterapia mikroigłowa</a></li>
                                <li><a href="#">Osocze bogatopłytkowe</a></li>
                                <li><a href="#">Radiofrekwencja mikroigłowa</a></li>
                                <li><a href="#">BTX</a></li>
                            </ul>
                        )}
                    </Col>
                    <Col sm={2.27} className='submenu_item dropdown toggle' ref={el => toggleRefs.current.model = el} onClick={() => setIsChecked(prevState => ({ ...prevState, model: !prevState.model }))}>
                        Modelowanie kwasem hialuronowym
                        {isChecked.model && (
                            <ul>
                                <li><a href="#">Modelowanie ust</a></li>
                            </ul>
                        )}
                    </Col>
                    <Col sm={2.27} className='submenu_item dropdown toggle' ref={el => toggleRefs.current.tychology = el} onClick={() => setIsChecked(prevState => ({ ...prevState, tychology: !prevState.tychology }))}>
                        Tychologia
                        {isChecked.tychology && (
                            <ul>
                                <li><a href="#">Mezoterapia igłowa skóry głowy</a></li>
                            </ul>
                        )}
                    </Col>
                    <Col sm={2.27} className='submenu_item dropdown toggle' ref={el => toggleRefs.current.whelk = el} onClick={() => setIsChecked(prevState => ({ ...prevState, whelk: !prevState.whelk }))}>
                        Trądzik
                        {isChecked.whelk && (
                            <ul>
                                <li><a href="#">Oczyszczanie wodorowe</a></li>
                                <li><a href="#">Peeling kawitacyjny</a></li>
                                <li><a href="#">Peeling węglowy</a></li>
                                <li><a href="#">Peeling chemiczny</a></li>
                                <li><a href="#">Indywidualne terapie trądziku</a></li>
                            </ul>
                        )}
                    </Col>
                </Row>
                <div style={{height:'400px'}}></div>
            </Container>
            <Footer/>
        </>
    );
}

export default Treatments;