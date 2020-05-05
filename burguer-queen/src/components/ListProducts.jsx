/*import React, {useState}from 'react';
import PropTypes from 'prop-types';

const ListProduct= ({
  id, image, name, price, addProduct,
}) =>{
  const [quantity, setQuantity] = useState(0);

}
*/

import React, { useState, useEffect, Fragment} from 'react';

import GetProducts from '../controller/Getproducts'

const ListProduct = () => {
    const [dataProducts, setDataProducts] = useState([]);
    
    const prueba =()=>{
        GetProducts(localStorage.getItem('token')).then((res)=>
        //console.log(res,'productos'))
        setDataProducts(res))
      }
      useEffect(()=>{
        prueba()
        }, []);
         
        return(
          <Fragment>
       <ul>
        {dataProducts.name}
       </ul>
      
        </Fragment>)
};


export default ListProduct

