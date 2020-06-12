import React from 'react';
import Instagram from '../Assets/IMGS/Instagram.png';
import facebook from '../Assets/IMGS/facebook.png';
import youtube from '../Assets/IMGS/youtube.png';
import twitter from '../Assets/IMGS/twitter.png';
import '../Assets/CSS/Footer.css';

const Footer = () => {
    return (
        <div>
            <br/>
            <hr/>

            <footer class="container">

           

                <p class="float-right"><a href="Header">Volver al inicio</a></p>
                <p>© 2020 SMDIGITAL,  · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
             
                <p className="text-center"> 
                    Medellín <br/>
                    <a href="https://goo.gl/maps/CETdXNrm6fFja13w9"> Carrera 42 #14 - 11 Piso 5, Edificio Castropol Plaza</a> <br/>
                    +57(4) 444 85 66
                     </p>
       
                <section id="profile-link">
            <div className="icon-container text-center mb-2">
                <a className="ml-1 mr-1 p-1" href="https://www.instagram.com/smdigitalagencia/"><img className="Icons" src={Instagram} alt="Freepik"/></a>
                
                <a className="ml-1 mr-1 p-1" href="https://www.facebook.com/smdigitalagencia/"><img className="Icons"src={facebook} alt="Freepik"/></a>
               
                <a className="ml-1 mr-1 p-1" href="https://www.youtube.com/user/smdigital1"><img className="Icons"src={youtube} alt="Freepik"/></a>
                
                <a className="ml-1 mr-1 p-1" href="https://twitter.com/smdigital"><img className="Icons" src={twitter} alt="Freepik"/></a>
                
            </div>
        </section>
            </footer>
        </div>
    )
}

export default Footer
