import React ,{useState, useEffect}from 'react';
import Header from './Header'
import GetProducts from '../controller/Getproducts'
import MenuProducts from './Menu/MenuProducts'

const Home = () => {
  const [category, setCategory] = useState('');
    const [dataProducts, setDataProducts] = useState([]);

    const handleClick = (type) => {
      setCategory(type);
    };
    
    const ShowProducts = () => GetProducts((localStorage.getItem('token'))).then((res) => (category !== '' ? setDataProducts(res.filter((obj) => obj.type === category))
      : setDataProducts(res)));
    useEffect(() => {
      ShowProducts();
    }, [category]);
  
   
  
   
  
  
   
   
return(
    <section>
        <Header/>
        <MenuProducts
        handleClick={handleClick}
        dataProducts={dataProducts}
/>
        
    </section>
)
}
export default Home;