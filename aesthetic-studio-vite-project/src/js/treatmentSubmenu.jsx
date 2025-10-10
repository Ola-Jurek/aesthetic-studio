import React, {useEffect, useRef, useState} from 'react'
import {HashLink as Link} from "react-router-hash-link";
import '../css/_treatmentsSubmenu.scss';
import {Col, Row, Container} from "react-grid-system";
export function TreatmentSubmenu() {

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
                setIsChecked(prevState => ({...prevState, [key]: false}));
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
        <div className="treatments_nav">
            <div className={`treatment_submenu ${isChecked.body ? 'open' : ''}`}
                 ref={el => toggleRefs.current.body = el}
                 onClick={() => setIsChecked(prevState => ({...prevState, body: !prevState.body}))}>
                Ciało
                {isChecked.body && (
                    <ul className="treatment_submenu_item">
                        <li><Link to='/treatment_depilacja'>Depilacja laserowa</Link></li>
                        <li><Link to='/treatment_blizny_i_rozstepy'>Terapia blizn i rozstępów</Link></li>
                        <li><Link to='/treatment_lipoliza_iniekcyjna'>Lipoliza iniekcyjna</Link></li>
                        <li><Link to='/treatment_radiofrekwencja_mikroiglowa'>Radiofrekwencja mikroigłowa</Link></li>
                        <li><Link to='/treatment_usuwamie_tatuazy'>Laserowe usuwanie tatuaży</Link></li>
                        <li><Link to='/treatment_laser_frakcyjny'>Laser Frakcyjny</Link></li>
                    </ul>

                )}
            </div>
            <div className={`treatment_submenu ${isChecked.face ? 'open' : ''}`}
                 ref={el => toggleRefs.current.face = el}
                 onClick={() => setIsChecked(prevState => ({...prevState, face: !prevState.face}))}>
                Twarz
                {isChecked.face && (
                    <ul className="treatment_submenu_item">
                        <li><Link to='/treatment_makijaz_permanentny'>Makijaż permanentny</Link></li>
                        <li><Link to='/treatment_btx'>BTX</Link></li>
                        {/*<li><Link to='/treatment_henna_pudrowa'>Henna pudrowa</Link></li>*/}
                        {/*<li><Link to="#">Makijaż okolicznościowy</Link></li>*/}
                        <li><Link to='/treatment_mezoterapia-iglowa'>Mezoteriapia igłowa</Link></li>
                        <li><Link to='/treatment_mezoterapia_mikroiglowa'>Mezoterapia mikroigłowa</Link></li>
                        <li><Link to='/treatment_osocze_bogatoplytkowe'>Osocze bogatopłytkowe</Link></li>
                        <li><Link to='/treatment_radiofrekwencja_beziglowa'>Radiofrekwencja bezigłowa</Link></li>
                        <li><Link to='/treatment_modelowanie_ust'>Modelowanie ust</Link></li>
                        <li><Link to='/treatment_liftera'>Lifting twarzy i okolic</Link></li>
                    </ul>
                )}
            </div>
            <div className={`treatment_submenu ${isChecked.model ? 'open' : ''}`}
                 ref={el => toggleRefs.current.model = el}
                 onClick={() => setIsChecked(prevState => ({...prevState, model: !prevState.model}))}>
                <Link to='/treatment_zamykanie_zmian_naczyniowych'>Zamykanie zmian naczyniowych</Link>

            </div>
            <div className={`treatment_submenu ${isChecked.tychology ? 'open' : ''}`}
                 ref={el => toggleRefs.current.tychology = el}
                 onClick={() => setIsChecked(prevState => ({...prevState, tychology: !prevState.tychology}))}>
                Tychologia
                {isChecked.tychology && (
                    <ul className="treatment_submenu_item">
                        <li><Link to='/treatment_mezoterapia_iglowa_skory_glowy'>Mezoterapia igłowa skóry głowy</Link></li>
                    </ul>
                )}
            </div>
            <div className={`treatment_submenu ${isChecked.whelk ? 'open' : ''}`}
                 ref={el => toggleRefs.current.whelk = el}
                 onClick={() => setIsChecked(prevState => ({...prevState, whelk: !prevState.whelk}))}>
                Trądzik
                {isChecked.whelk && (
                    <ul className="treatment_submenu_item">
                        <li><Link to='/treatment_oczyszczanie_wodorowe'>Oczyszczanie wodorowe</Link></li>
                        <li><Link to='/treatment_peeling_kawitacyjny'>Peeling kawitacyjny</Link></li>
                        <li><Link to='/treatment_peeling_weglowy'>Peeling węglowy</Link></li>
                        <li><Link to='/treatment_peeling_chemiczny'>Peeling chemiczny</Link></li>
                        <li><Link to='/treatment_terapia_tradziku'>Indywidualne terapie trądziku</Link></li>
                    </ul>
                )}
            </div>
        </div>
        </>
    );
}
