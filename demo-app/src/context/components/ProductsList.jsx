import React from 'react'
import { useFilterContext } from '../contextfiles/filterContext';
import Product from '../pages/Product';
import Sort from './Sort';
    
const ProductsList = () => {
    const {filtered_products: products} = useFilterContext();
    console.log(products);
        return (
        <div className='products-list'>
            <Sort/>
            {products.map((el) => {
                return <Product key={el.id} {...el}/>
            })}
        </div>
    )
}
export default ProductsList