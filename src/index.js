import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/CSS/index.css';
import App from './Component/App';
import Header from './Component/Header.jsx';
import Slider from './Component/Slider.jsx';
import Nosotros from './Component/Nosotros.jsx';
import Services from './Component/Services.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Slider/>
    <Nosotros/>
    <Services/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


