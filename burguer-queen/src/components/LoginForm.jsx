import React from 'react'
import Logo from '../img/logo.png'
import '../css/style.css';




const LoginForm =() => {
    return(
        <section className="section-login">
      <section className="section-forms">
        <aside className="wrapper-logo">
          <img className="logo-image" src={Logo} alt="" />
        </aside>
            <form action="" className= "form-inputs">
          <h2 className="tittle">INICIAR SESIÓN</h2>
          
          <div className="input-field">
          <i className="material-icons prefix">person_pin</i>
          <input type='email' placeholder="ingrese su correo electronico" className="form-input"/>
					</div>
          <div className="input-field">
          <i className="material-icons prefix">https</i>
          <input type='password' placeholder="ingrese su contraseña" className="form-input"/>
					</div>
          
          <button className="form-button">
            INGRESAR
          </button> 
				</form>
      </section>
    </section>
    );
};
export default LoginForm;