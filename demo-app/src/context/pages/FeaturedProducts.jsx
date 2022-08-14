import React from 'react'
import { useProductsContext } from '../contextfiles/productsContext'
import { formatPrice } from '../utils/helpers';
import Product from './Product';

const FeaturedProducts = () => {
   const {products_loading: loading, products_error: error, featured_products: featured} = useProductsContext();
   if(loading){
      return <h1>Featured Products are loading</h1>
   }
   if(error){
      return <h1>there was error</h1>
   }
   return (
      <>
      <h2>Featured Products</h2>
      <div className='products'>
         {featured.slice(0, 4).map((el) => {
            return <Product key={el.id} {...el}/>
      })}</div>
      </>
   )
}

export default FeaturedProducts