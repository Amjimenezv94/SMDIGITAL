import React from 'react';
import Servicios01 from '../Assets/IMGS/Servicios01.jpg';
import Servicios02 from '../Assets/IMGS/Servicios02.JPG';
import Servicios03 from '../Assets/IMGS/Servicios03.jpg';
import compartir from '../Assets/IMGS/compartir.png';


const Services = () => {
    return (
        <div id="Services">
            <div className="album py-5 bg-light">
                <div className="container">
                 <h1>Portafolio de Servicios</h1> 
                 <br/>
                 <hr/>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={Servicios01} alt='Designed by pressfoto / Freepik'/>
                                <div className="card-body">
                                    <h4> Marketing de contenidos</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus omnis nihil necessitatibus eaque quis fugiat vitae ea modi fuga, ut illo odio officiis pariatur corporis ullam quasi magnam soluta molestias!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group text-center">
                                            <button type="button" className="btn btn-outline-primary justify-content-center">Ver más</button>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={Servicios02} alt='Designed by pressfoto / Freepik'/>
                                <div className="card-body">
                                    <h4> Gestión de redes Sociales</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia natus adipisci, cumque illum deleniti a possimus eum aliquid odio nostrum neque similique sapiente laboriosam perferendis. Vitae enim nisi ea.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-outline-primary justify-content-center">Ver más</button>
                                          
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={Servicios03} alt='Designed by pressfoto / Freepik'/>
                                <div className="card-body">
                                    <h4> Desarrollo y administración de sitios Web</h4>
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus , ducimus qui velit, libero molestiae earum eius nulla, assumenda consequuntur est odio minima. Animi quis eum dicta.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-outline-primary justify-content-center">Ver más</button>
                                            
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
