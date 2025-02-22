import React, {useRef, useState, useEffect} from 'react';
import logo from "../assets/logo.png";
// import {Link} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import '../css/_navbar.scss';
import {Container, Row, Col} from "react-grid-system";
// import {Searchbar} from "./searchbar.jsx";





export function Navbar() {
    // const [isPriceMenuOpen, seiIsPriceMenuOpen] = useState(false);
    // const [isTreatmentsMenuOpen, setIsTreatmentsMenuOpen] = useState(false);
    // const [isSubmenuActive, setIsSubmenuActive] = useState(null);
    //
    //
    // const enterPriceMenu = () => {
    //     seiIsPriceMenuOpen(true);
    // };
    //
    // const leavePriceMenu = () => {
    //     seiIsPriceMenuOpen(false);
    // };
    // const enterTreatmentsMenu = () => {
    //     setIsTreatmentsMenuOpen(true);
    // };
    //
    // const leaveTreatmentsMenu = () => {
    //     setIsTreatmentsMenuOpen(false);
    // };
    //
    // const leaveSubmenu = () => {
    //     setIsSubmenuActive(null);
    // };
    //
    // const enterSubmenu = () => {
    //     setIsSubmenuActive(true);
    // };
    //
    // const handleSearch = () => {
    //     console.log('wyszykiwanie dla:', query);
    // };

    const [menuOpen, setMenuOpen] = useState(false);


    return (

        <>
            <Container>
                <Row className="nav">

                    <Col sm={2.4} xs={6}>
                        <a href="/">
                            <img src={logo} className="logo" alt="logo"/>
                        </a>
                    </Col>

                    <Col xs={6} className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </Col>

                    <Col sm={2.4} className={`menu_item col ${menuOpen ? "open" : ""}`}>
                        <Link to="/about"> O nas </Link>
                    </Col>

                    <Col sm={2.4} className={`menu_item ${menuOpen ? "open" : ""}`}>
                        <Link to="/treatments">Zabiegi </Link>
                    </Col>

                    <Col sm={2.4} className={`menu_item ${menuOpen ? "open" : ""}`}>
                        <Link to="/price_list"> Cennik </Link>
                    </Col>

                    <Col sm={2.4} className={`menu_item ${menuOpen ? "open" : ""}`}>
                        <Link to="/contact">Kontakt </Link>
                    </Col>
                </Row>
            </Container>
        </>


        // <>
        //     <Container >
        //         <Row className='nav'>
        //
        //             <Col sm={2.4}>
        //                 <a href='/'>
        //                     <img src={logo} className='logo' alt='logo' />
        //                 </a>
        //             </Col>
        //
        //
        //             <Col sm={2.4} className='menu_item'> <Link to='/about'> O nas </Link> </Col>
        //
        //             <Col sm={2.4} className='menu_item'> <Link to='/treatments'>Zabiegi </Link> </Col>
        //
        //             <Col sm={2.4} className='menu_item'> <Link to='/price_list' > Cennik </Link> </Col>
        //
        //             {/*<Col sm={2} className='menu_item'> <Link to='/cosmetics' className='nav_item' >Kosmetyki </Link> </Col>*/}
        //
        //             <Col sm={2.4} className='menu_item'> <Link to='/contact' className='nav_item' >Kontakt </Link> </Col>
        //         </Row>
        //     </Container>
        //
        // </>
    );
}

