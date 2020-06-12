import React from 'react';
import logoSM04 from '../Assets/IMGS/LogoSM04.png';
import "../Assets/CSS/Header.css";
const Header = () => {
    return (
        <div id="Header">
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <img className="my-0 mr-md-auto font-weight-small " id="Logo" src={logoSM04} alt="Logo SMDigital" />
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark" href="#Nosotros">Nosotros</a>
                    <a className="p-2 text-dark" href="#Services">Servicios</a>
                    <a className="p-2 text-dark" href="Blog">Blog</a>
                </nav>
                <a className="btn btn-outline-primary" href="contact">Contáctenos</a>
            </div>
        </div>
    )
}

export default Header
