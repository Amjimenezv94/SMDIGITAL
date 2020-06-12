import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/CSS/index.css';
import Header from './Component/Header.jsx';
import Slider from './Component/Slider.jsx';
import Nosotros from './Component/Nosotros.jsx';
import Services from './Component/Services.jsx';
import Blog from './Component/Blog.jsx';
import Footer from './Component/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Contactform from './Component/ContactForm.jsx';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Slider/>
    <Nosotros/>
    <Services/>
    <Blog/>
    <Contactform/>
    <Footer/>


  </React.StrictMode>,
  document.getElementById('root')
);


