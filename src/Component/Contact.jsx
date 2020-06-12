// Añadimos React & nuestro archivo de configuración
import React, { Component } from 'react';
import firebaseConf from '../firebase';

class Contact extends Component {

  // inicializamos nuestro estado inicial
  constructor(props) {
    super(props);
    this.state = {
      form: [],
      alert: false,
      alertData: {}
    };
  }

  // Mostrar una alerta cuando se envia el formulario
  showAlert(type, message) {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

  // Con esta funcion borramos todos los elementos del formulario
  resetForm() {
    this.refs.contactForm.reset();
  }

  // Funcion para enviar la informacion del formulario a Firebase Database
  sendMessage(e) {
    // Detiene la acción predeterminada del elemento
    e.preventDefault();
    
    // Creamos un objeto con los valores obtenidos de los inputs
    const params = {
      name: this.inputName.value,
      telephone: this.inputTelehone.value,
      email: this.inputEmail.value,
      adress: this.inputAdress.value
     
    };
    
    // Validamos que no se encuentren vacios los principales elementos de nuestro formulario
    if (params.name && params.telephone && params.email && params.adress ) {
      // enviamos nuestro objeto "params" a firebase database
      firebaseConf.database().ref('form').push(params).then(() => {
        // Si todo es correcto, actualizamos nuestro estado para mostrar una alerta.
        this.showAlert('success', 'Your message was sent successfull');
      }).catch(() => {
        // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error 
        this.showAlert('danger', 'Your message could not be sent');
      });
      // limpiamos nuestro formulario llamando la funcion resetform
      this.resetForm();
    } else {
      // En caso de no llenar los elementos necesario despliega un mensaje de alerta
      this.showAlert('warning', 'Please fill the form');
    };
  }

  render() {
    return (
      <div id=>
        {this.state.alert && <div className={`alert alert-${this.state.alertData.type}`} role='alert'>
          <div className='container'>
            {this.state.alertData.message}
          </div>
        </div>}
        <div className='container' style={{ padding: `40px 0px` }}>
          <div className='row'>
            <div className='col-sm-12'>
              <h2>Contacto </h2>
              <form onSubmit={this.sendMessage.bind(this)} ref='contactForm' className="container" id="contact">
                <div className='form-group'>
                  <label htmlFor='name'>Nombre</label>
                  <input type='text' className='form-control' id='name' 
                    placeholder='Nombre completo' ref={name => this.inputName = name} 
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputEmail1'>Email</label>
                  <input type='email' className='form-control' id='email' 
                    placeholder='Email' ref={email => this.inputEmail = email} 
                  />
                </div>
               
                <div className='form-group'>
                  <label htmlFor='telephone'>Telefono</label>
                  <input type='number' className='form-control' id='telephone' 
                    placeholder='+57 4' ref={telephone => this.inputPhone = telephone} 
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='adress'>Dirección</label>
                  <input type='text' className='form-control' id='adress' 
                    placeholder='' ref={adress => this.inputPhone = adress} 
                  />
                </div>
                <button type='submit' className='btn btn-primary'>Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;