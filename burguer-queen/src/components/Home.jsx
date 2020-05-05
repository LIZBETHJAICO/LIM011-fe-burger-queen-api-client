import React from 'react';
import Header from './Header'
import MenuProducts from './Menu/MenuProducts'
import ListProduct from '../components/ListProducts';
const Home = () => {

return(
    <section>
        <Header/>
        <MenuProducts/>
        <ListProduct/>
    </section>
)
}
export default Home;