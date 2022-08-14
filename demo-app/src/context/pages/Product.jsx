import React from 'react'
import { formatPrice } from '../utils/helpers';

const Product = ({image, name, price, id}) => {
    return (
            <article key={id}>    
                <img src={image} alt={name} />
                <h5>{name}</h5>
                <p>{formatPrice(price)}</p>
            </article>
       )
}

export default Product