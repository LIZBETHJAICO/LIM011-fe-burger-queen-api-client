import React, {useState, Fragment}from 'react';
import PropTypes from 'prop-types';

const ListProduct= ({
  image, name, price,
}) =>{
  const [quantity, setQuantity] = useState(0);
  const addClicksPlus = () => {
    setQuantity(quantity + 1)
  }

  const addClicksMinus = () => {
    if(quantity>= 1){
      setQuantity(quantity -1)
    }
    else{
      setQuantity(0)
    }
  }
  return(
   <Fragment>
     <section className=" row card-product">
     <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
      <img
      src= {image}
      className ="photo-card-product"
      />
      <div className="section-name-price">
       <p className ="name-product">{name}</p>
        <p className="price-product">
         S/.{price}.00
        </p>
      </div>
    <div className="card-action btn-cantidad">
      <button
          type="button"
          className="waves-effect waves-light btn btn-menos"
          onClick={addClicksMinus}
        >
          -
        </button>
        <input className="quantity " value={quantity} onChange={() => {}} />
        <button
          type="button"
          className=" waves-effect waves-light btn btn-mas"
          onClick={addClicksPlus}
        >
          +
        </button>
      </div>
      </div>
      </div>
    </div>
     </section>
   </Fragment>
  )

}
ListProduct.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addProduct: PropTypes.func.isRequired,
};
export default ListProduct

