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

    const closeMenu = () => setMenuOpen(false);

    return (

        <>

            <nav className="navbar-wrapper">
                <Container style={{position: 'relative'}}>
                    <Row className="nav" align="center" style={{height: '80px'}}>
                        {/* LOGO - Twoja klasa i style */}
                        <Col xs={6} sm={2.4}>
                            <Link to="/" onClick={closeMenu} style={{display: 'block', minHeight: '50px'}}>
                                <img src={logo} className="logo" alt="logo" style={{display: 'block'}}/>
                            </Link>
                        </Col>

                        {/* MENU DESKTOPOWE - Wrzucamy do Row */}
                        <Col sm={9.6} className="desktop-menu-only">
                            <div className="nav-links-desktop">
                                <Link to="/about"> O nas </Link>
                                <Link to="/treatments"> Zabiegi </Link>
                                <Link to="/price_list"> Cennik </Link>
                                <Link to="/contact"> Kontakt </Link>
                            </div>
                        </Col>

                        {/* HAMBURGER - Twoja klasa i style */}
                        <Col xs={6} className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                            ☰
                        </Col>
                    </Row>

                    {/* MENU MOBILE - To, co już miałaś idealnie ostylowane */}
                    <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
                        <Link to="/about" onClick={closeMenu}> O nas </Link>
                        <Link to="/treatments" onClick={closeMenu}> Zabiegi </Link>
                        <Link to="/price_list" onClick={closeMenu}> Cennik </Link>
                        <Link to="/contact" onClick={closeMenu}> Kontakt </Link>
                    </div>
                </Container>
            </nav>


            {/*<nav className="navbar-wrapper">*/}
            {/*    <Container style={{ position: 'relative' }}>*/}

            {/*        <Row className="nav" align="center" style={{ height: '80px' }}>*/}
            {/*            <Col xs={6} sm={2.4}>*/}
            {/*                <Link to="/" onClick={closeMenu} style={{ display: 'block', minHeight: '50px' }}>*/}
            {/*                    <img src={logo} className="logo" alt="logo" style={{ display: 'block' }}/>*/}
            {/*                </Link>*/}
            {/*            </Col>*/}

            {/*            <Col xs={6} className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} style={{ textAlign: 'right' }}>*/}
            {/*                ☰*/}
            {/*            </Col>*/}
            {/*        </Row>*/}

            {/*        /!* MENU MOBILE - outside the row *!/*/}
            {/*        <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>*/}
            {/*            <Link to="/about" onClick={closeMenu}> O nas </Link>*/}
            {/*            <Link to="/treatments" onClick={closeMenu}> Zabiegi </Link>*/}
            {/*            <Link to="/price_list" onClick={closeMenu}> Cennik </Link>*/}
            {/*            <Link to="/contact" onClick={closeMenu}> Kontakt </Link>*/}
            {/*        </div>*/}

            {/*        /!* MENU DESKTOPOWE - te linki znikną na mobile *!/*/}
            {/*        <Col sm={9.6} className="desktop-menu-only">*/}
            {/*            <div className="nav-links-desktop">*/}
            {/*                <Link to="/about"> O nas </Link>*/}
            {/*                <Link to="/treatments"> Zabiegi </Link>*/}
            {/*                <Link to="/price_list"> Cennik </Link>*/}
            {/*                <Link to="/contact"> Kontakt </Link>*/}
            {/*            </div>*/}
            {/*        </Col>*/}
            {/*    </Container>*/}
            {/*</nav>*/}


            {/*<Container>*/}
            {/*    <Row className="nav">*/}
            {/*        <Col sm={2.4} xs={6}>*/}
            {/*            /!* Zmieniamy na Link, żeby nie przeładowywało strony przy powrocie do Home *!/*/}
            {/*            <Link to="/" onClick={closeMenu}>*/}
            {/*                <img src={logo} className="logo" alt="logo"/>*/}
            {/*            </Link>*/}
            {/*        </Col>*/}

            {/*        <Col xs={6} className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>*/}
            {/*            ☰*/}
            {/*        </Col>*/}

            {/*        /!* Dodajemy onClick={closeMenu} do każdego linku *!/*/}
            {/*        <Col sm={2.4} className={`menu_item col ${menuOpen ? "open" : ""}`}>*/}
            {/*            <Link to="/about" onClick={closeMenu}> O nas </Link>*/}
            {/*        </Col>*/}

            {/*        <Col sm={2.4} className={`menu_item ${menuOpen ? "open" : ""}`}>*/}
            {/*            <Link to="/treatments" onClick={closeMenu}> Zabiegi </Link>*/}
            {/*        </Col>*/}

            {/*        <Col sm={2.4} className={`menu_item ${menuOpen ? "open" : ""}`}>*/}
            {/*            <Link to="/price_list" onClick={closeMenu}> Cennik </Link>*/}
            {/*        </Col>*/}

            {/*        <Col sm={2.4} className={`menu_item ${menuOpen ? "open" : ""}`}>*/}
            {/*            <Link to="/contact" onClick={closeMenu}> Kontakt </Link>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}

            {/*<Container>*/}
            {/*    <Row className="nav">*/}

            {/*        <Col sm={2.4} xs={6}>*/}
            {/*            <a href="/">*/}
            {/*                <img src={logo} className="logo" alt="logo"/>*/}
            {/*            </a>*/}
            {/*        </Col>*/}

            {/*        <Col xs={6} className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>*/}
            {/*            ☰*/}
            {/*        </Col>*/}

            {/*        <Col sm={2.4} className={`menu_item col ${menuOpen ? "open" : ""}`}>*/}
            {/*            <Link to="/about"> O nas </Link>*/}
            {/*        </Col>*/}

            {/*        <Col sm={2.4} className={`menu_item ${menuOpen ? "open" : ""}`}>*/}
            {/*            <Link to="/treatments">Zabiegi </Link>*/}
            {/*        </Col>*/}

            {/*        <Col sm={2.4} className={`menu_item ${menuOpen ? "open" : ""}`}>*/}
            {/*            <Link to="/price_list"> Cennik </Link>*/}
            {/*        </Col>*/}

            {/*        <Col sm={2.4} className={`menu_item ${menuOpen ? "open" : ""}`}>*/}
            {/*            <Link to="/contact">Kontakt </Link>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}
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

