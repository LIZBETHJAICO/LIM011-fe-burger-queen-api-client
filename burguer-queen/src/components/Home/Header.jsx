import  React from 'react';
import {Link} from 'react-router-dom';

const Header =() =>{
    return(
        <ul className="nav-header">
        <Link to="/products">
          <li className="li-header" id="productos">PRODUCTOS</li>
        </Link>
        <Link to="/Orderkitchen">
          <li className="li-header" id="cocina">COCINA </li>
        </Link>
        <Link to="/OrderWaiter">
          <li className="li-header" id="mesero">MESERO</li>
        </Link>
      </ul>
    
    )
}
   
export default Header
