import React from 'react';
import Header from './Header'
import MenuProducts from './Menu/MenuProducts'
import GetProducts from '../controller/products'
const Home = () => {
    
const prueba = GetProducts(localStorage.getItem('token')).then((res)=>
        console.log(res,'productos')
        )
    
     
return(
    <section>
        <Header/>
        <MenuProducts/>
      <div></div>
    </section>
)
}
export default Home;