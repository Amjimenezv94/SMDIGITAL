import React from 'react';
import SliderX from '../Assets/IMGS/sliderX.jpg';

const Services = () => {
    return (
        <div id="Services">
            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={SliderX} alt=''/>
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus omnis nihil necessitatibus eaque quis fugiat vitae ea modi fuga, ut illo odio officiis pariatur corporis ullam quasi magnam soluta molestias!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Ver más</button>
                                           
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={SliderX} alt=''/>
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia natus adipisci, cumque illum deleniti a possimus eum aliquid odio nostrum neque similique sapiente laboriosam perferendis. Vitae enim nisi ea.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Ver más</button>
                                          
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={SliderX} alt=''/>
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus quos amet! Sapiente, ducimus qui velit, libero molestiae earum eius nulla, assumenda consequuntur est odio minima. Animi quis eum dicta.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Ver más</button>
                                            
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
