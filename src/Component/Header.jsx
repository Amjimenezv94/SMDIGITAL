import React from 'react';
import logoSM01 from '../Assets/IMGS/LogoSM01.png';
const Header = () => {
    return (
        <div>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <img className="my-0 mr-md-auto font-weight-small" src={logoSM01} alt="Logo SMDigital" />
                <nav className="my-2 my-md-0 mr-md-3">
                    <a className="p-2 text-dark" href="#Nosotros">Nosotros</a>
                    <a className="p-2 text-dark" href="#Services">Servicios</a>
                    <a className="p-2 text-dark" href="#">Blog</a>
                </nav>
                <a className="btn btn-outline-primary" href="#">Contáctenos</a>
            </div>
        </div>
    )
}

export default Header
