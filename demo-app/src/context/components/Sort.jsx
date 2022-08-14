
 import React from 'react'
import { useFilterContext } from '../contextfiles/filterContext'

const Sort = () => {
    const {filtered_products: products, sort, updateSort} = useFilterContext()
    return (
        <div className='sort'>
            <form action="">
                <label htmlFor="sort">Sort by</label>
                <select name="sort" id="sort" value={sort} onChange={updateSort}>
                    <option value="price-lowest">price (lowest)</option>
                    <option value="price-highest">price (highest)</option>
                    <option value="name-a">name (a-z)</option>
                    <option value="name-z">(name) (z-a)</option>
                </select>
            </form>
            <p>{products.length} products found</p>
        </div>
    )
}
 
export default Sort