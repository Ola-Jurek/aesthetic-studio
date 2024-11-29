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
            <Row>
                <Col sm={12}><hr /></Col>
            </Row>
            <Container>

                <Row  className='treatments_nav'>

                        <Col sm={2.3} className='treatment_submenu dropdown toggle' ref={el => toggleRefs.current.body = el}
                             onClick={() => setIsChecked(prevState => ({...prevState, body: !prevState.body}))}>
                            Ciało
                            {isChecked.body && (
                                <ul className='treatment_submenu_item'>
                                    <Link to='/treatment_depilacja'>Depilacja laserowa</Link>
                                    <Link to='/treatment_blizny_i_rozstepy'>Terapia blizn i rozstępów</Link>
                                    <Link to='/treatment_lipoliza_iniekcyjna'>Lipoliza iniekcyjna</Link>
                                    <Link to='/treatment_radiofrekwencja_mikroiglowa'>Radiofrekwencja mikroigłowa</Link>
                                    <Link to='/treatment_usuwamie_tatuazy'>Laserowe usuwanie tatuaży</Link>
                                    <Link href="#">Rewitalizacja skóry dłoni</Link>
                                </ul>
                            )}
                        </Col>
                        <Col sm={2.3} className='treatment_submenu dropdown toggle' ref={el => toggleRefs.current.face = el}
                             onClick={() => setIsChecked(prevState => ({...prevState, face: !prevState.face}))}>
                            Twarz
                            {isChecked.face && (
                                <div className='treatment_submenu_item'>
                                    <Link to="#">Makijaż permanentny</Link>
                                    <Link to="#">Henna pudrowa</Link>
                                    <Link to="#">Makijaż okolicznościowy</Link>
                                    <Link to="#">Mezoteriapia igłowa</Link>
                                    <Link to="#">Mezoterapia mikroigłowa</Link>
                                    <Link to="#">Osocze bogatopłytkowe</Link>
                                    <Link to="#">Radiofrekwencja mikroigłowa</Link>
                                    <Link to="#">BTX</Link>
                                </div>
                            )}
                        </Col>
                        <Col sm={2.3} className='treatment_submenu dropdown toggle' ref={el => toggleRefs.current.model = el}
                             onClick={() => setIsChecked(prevState => ({...prevState, model: !prevState.model}))}>
                            Modelowanie kwasem hialuronowym
                            {isChecked.model && (
                                <div className='treatment_submenu_item'>
                                    <Link to="#">Modelowanie us</Link>
                                </div>
                            )}
                        </Col>
                        <Col sm={2.3} className='treatment_submenu dropdown toggle' ref={el => toggleRefs.current.tychology = el}
                             onClick={() => setIsChecked(prevState => ({
                                 ...prevState,
                                 tychology: !prevState.tychology
                             }))}>
                            Tychologia
                            {isChecked.tychology && (
                                <div className='treatment_submenu_item'>
                                    <Link to="#">Mezoterapia igłowa skóry głowy</Link>
                                </div>
                            )}
                        </Col>
                        <Col sm={2.3} className='treatment_submenu dropdown toggle' ref={el => toggleRefs.current.whelk = el}
                             onClick={() => setIsChecked(prevState => ({...prevState, whelk: !prevState.whelk}))}>
                            Trądzik
                            {isChecked.whelk && (
                                <div className='treatment_submenu_item'>
                                    <Link to='/treatment_oczyszczanie_wodorowe'>Oczyszczanie wodorowe</Link>
                                    <Link to='/treatment_peeling_kawitacyjny'>Peeling kawitacyjny</Link>
                                    <Link to='/treatment_peeling_weglowy'>Peeling węglowy</Link>
                                    <Link to='/treatment_peeling_chemiczny'>Peeling chemiczny</Link>
                                    <Link to='/treatment_terapia_tradziku'>Indywidualne terapie trądziku</Link>
                                </div>
                            )}
                        </Col>


                </Row>
                <div style={{height: '400px'}}></div>
            </Container>
        </>
    );
}

// return (
//     <>
//         <Navbar />
//         <Row>
//             <Col sm={12}><hr /></Col>
//         </Row>
//         <Container>
//             <div className="treatments_nav">
//                 <div className="treatment_submenu" onClick={() => setIsChecked(prevState => ({...prevState, body: !prevState.body}))}>
//                     Ciało
//                     {isChecked.body && (
//                         <ul className="treatment_submenu_item">
//                             <li><Link to='/treatment_depilacja'>Depilacja laserowa</Link></li>
//                             <li><Link to='/treatment_blizny_i_rozstepy'>Terapia blizn i rozstępów</Link></li>
//                             <li><Link to='/treatment_lipoliza_iniekcyjna'>Lipoliza iniekcyjna</Link></li>
//                             <li><Link to='/treatment_radiofrekwencja_mikroiglowa'>Radiofrekwencja mikroigłowa</Link></li>
//                             <li><Link to='/treatment_usuwamie_tatuazy'>Laserowe usuwanie tatuaży</Link></li>
//                             <li><Link href="#">Rewitalizacja skóry dłoni</Link></li>
//                         </ul>
//                     )}
//                 </div>
//                 <div className="treatment_submenu" onClick={() => setIsChecked(prevState => ({...prevState, face: !prevState.face}))}>
//                     Twarz
//                     {isChecked.face && (
//                         <ul className="treatment_submenu_item">
//                             <li><Link to="#">Makijaż permanentny</Link></li>
//                             <li><Link to="#">Henna pudrowa</Link></li>
//                             <li><Link to="#">Makijaż okolicznościowy</Link></li>
//                             <li><Link to="#">Mezoteriapia igłowa</Link></li>
//                             <li><Link to="#">Mezoterapia mikroigłowa</Link></li>
//                             <li><Link to="#">Osocze bogatopłytkowe</Link></li>
//                             <li><Link to="#">Radiofrekwencja mikroigłowa</Link></li>
//                             <li><Link to="#">BTX</Link></li>
//                         </ul>
//                     )}
//                 </div>
//                 <div className="treatment_submenu" onClick={() => setIsChecked(prevState => ({...prevState, model: !prevState.model}))}>
//                     Modelowanie kwasem hialuronowym
//                     {isChecked.model && (
//                         <ul className="treatment_submenu_item">
//                             <li><Link to="#">Modelowanie us</Link></li>
//                         </ul>
//                     )}
//                 </div>
//                 <div className="treatment_submenu" onClick={() => setIsChecked(prevState => ({...prevState, tychology: !prevState.tychology}))}>
//                     Tychologia
//                     {isChecked.tychology && (
//                         <ul className="treatment_submenu_item">
//                             <li><Link to="#">Mezoterapia igłowa skóry głowy</Link></li>
//                         </ul>
//                     )}
//                 </div>
//                 <div className="treatment_submenu" onClick={() => setIsChecked(prevState => ({...prevState, whelk: !prevState.whelk}))}>
//                     Trądzik
//                     {isChecked.whelk && (
//                         <ul className="treatment_submenu_item">
//                             <li><Link to='/treatment_oczyszczanie_wodorowe'>Oczyszczanie wodorowe</Link></li>
//                             <li><Link to='/treatment_peeling_kawitacyjny'>Peeling kawitacyjny</Link></li>
//                             <li><Link to='/treatment_peeling_weglowy'>Peeling węglowy</Link></li>
//                             <li><Link to='/treatment_peeling_chemiczny'>Peeling chemiczny</Link></li>
//                             <li><Link to='/treatment_terapia_tradziku'>Indywidualne terapie trądziku</Link></li>
//                         </ul>
//                     )}
//                 </div>
//             </div>
//             <div style={{height: '400px'}}></div>
//         </Container>
//     </>
// );

