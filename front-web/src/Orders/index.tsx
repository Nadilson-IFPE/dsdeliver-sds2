import './styles.css';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import { useEffect } from 'react';
import { useState } from 'react';
import { Product } from './types';
import { fetchProducts } from './../api';


function Orders() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
       // console.log('Componente Orders iniciou!')
       fetchProducts().then(response => 
          setProducts(response.data))
          .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
        </div>
    )
}

export default Orders;