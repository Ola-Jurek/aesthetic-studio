import React from 'react';
import logo from "../assets/znak wodny_złoty.png";
import {Link} from "react-router-dom";
import {Navbar} from "./navbar.jsx";
import {Footer} from "./footer.jsx";

export function Cosmetics(props) {
    return (
        <>

            <Navbar/>

            <div> Podstrona o kosmetykach </div>

            <Footer/>

        </>
    );
}

