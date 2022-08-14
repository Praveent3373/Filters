import React from 'react'
import Filters from '../components/Filters';
import ProductsList from '../components/ProductsList';

const Products = () => {
    return (
        <div className='products-container'>
            {/* <FeaturedProducts/> */}
            <Filters/>
            <ProductsList/>
        </div>
    )
}

export default Products