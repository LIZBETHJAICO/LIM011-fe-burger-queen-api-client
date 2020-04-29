import React,  {Fragment, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../img/logo.png';

import getToken from '../../controller/token'
import '../../css/style.css';

const LoginForm =() => {
  const history = useHistory();
  // esto es para cada uno crear un state para cada input
  /*const [email, setEmail] = useState('');
  const [password, setPassword]=useState('')
  const handleInputEmail =(event) => {
   console.log('funciona email')
   console.log(event.target.value)
   setEmail(event.target.value)
  }
  const handleInputPassword =(event) => {
   console.log('funciona pasword');
   console.log(event.target.value)
   setPassword(event.target.value)  
  }
*/
  const [data, setData] = useState({
    email :'',
    password :'',
  })
  const handleInputsChange =(event) => {
   console.log('funciona ambos');
   console.log(event.target.value)
    setData({
      ...data,
      [event.target.name]: event.target.value})
  }
  const sendData =(event) => {
  event.preventDefault();
  console.log(data.email + ' ' + data.password)
  getToken(data.email, data.password).then((res) => {
    if (res.getToken === undefined) {
      console.log('Email y contraseña incorrecto');
    } else {
      localStorage.setItem('token', res.getToken);
      console.log(`este es el token: ${localStorage.getItem('getToken')}`);
      history.push('/Home');
    }
  });
 }
    return(
      <Fragment> 
        <section className="section-login" onSubmit= {sendData}>
      <section className="section-forms">
        <aside className="wrapper-logo">
          <img className="logo-image" src={Logo} alt="" />
        </aside>
            <form action="" className= "form-inputs">
          <h2 className="tittle">INICIAR SESIÓN</h2>
          
          <div className="input-field">
          <i className="material-icons prefix">person_pin</i>
          <input 
          type='email' 
          placeholder="ingrese su correo electronico" 
          className="form-input"
          name='email'
          onChange={handleInputsChange}
         />
					</div>
          <div className="input-field">
          <i className="material-icons prefix">https</i>
          <input 
          type='password' 
          placeholder="ingrese su contraseña" 
          className="form-input"
          name='password'
          onChange= {handleInputsChange}
          />

					</div>
         {  /*
          <Link to="Home" className="btn-main">INGRESAR</Link>
          */
         } 
         
          <button className="form-button " type="submit">
            INGRESAR
          </button> 
          
				</form>
      </section>
    </section>
    </Fragment>
    );
};
export default LoginForm;