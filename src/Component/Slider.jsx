import React from 'react'
import Slider01 from '../Assets/IMGS/Slider01.jpg';
import Slider02 from '../Assets/IMGS/Slider02.jpg';
import Slider03 from '../Assets/IMGS/Slider03.jpg';
import '../Assets/CSS/slider.css';

const Slider = () => {
    return (
        <div className= "slider">
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Slider01} className="d-block w-100 carousel" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Slider02} className="d-block w-100 carousel"  alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Slider03} className="d-block w-100 carousel" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Slider
