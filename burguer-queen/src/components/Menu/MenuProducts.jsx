import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import ListProducts from '../ListProducts'
const MenuProducts = ({
  handleClick, dataProducts,
}) => {
  return(
    <Fragment>

  
    <nav className=''>
    <ul>
   <li><a href="#breakfast" id="desayuno"  onClick={() => handleClick('desayuno')}>Desayuno</a></li>
   <li><a href="#lunch" id="almuerzo"   onClick={() => handleClick('almuerzo')}>Almuerzo</a></li>
   <li><a href="#complements" id="complementos"  onClick={() => handleClick('complementos')}>Complementos</a></li>
   <li><a href="#drinks" id="bebida"  onClick={() => handleClick('bebida')}>Bebidas</a></li>
 </ul> 
 <div className="container-card">
      {dataProducts.map((objProduct) => (
        <ListProducts
          key={objProduct._id}
          id={objProduct._id}
          image={objProduct.image}
          name={objProduct.name}
          price={objProduct.price}
          
        />
      ))}
    </div>
 
   

 </nav>
 </Fragment>
  )
}
  MenuProducts.propTypes = {
    handleClick: PropTypes.func.isRequired,
    dataProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
   
  };
export default MenuProducts;