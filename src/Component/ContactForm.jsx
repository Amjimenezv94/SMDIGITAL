import React from 'react'

const Contactform = () => {
    return (
        <div>
             <div id="contact">
       
         
      
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <h2>Contacto </h2>
              <form  className="container" id="contact">
                <div className='form-group'>
                  <label htmlFor='name'>Nombre</label>
                  <input type='text' className='form-control' id='name' 
                    placeholder='Nombre completo'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='exampleInputEmail1'>Email</label>
                  <input type='email' className='form-control' id='email' 
                    placeholder='Email'/></div>
               
                <div className='form-group'>
                  <label htmlFor='telephone'>Telefono</label>
                  <input type='number' className='form-control' id='telephone' 
                    placeholder='+57 4'  
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='adress'>Dirección</label>
                  <input type='text' className='form-control' id='adress' 
                    placeholder=''  
                  />
                </div>
                <button type='submit' className='btn btn-primary'>Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div> 
        </div>
    )
}

export default Contactform;
