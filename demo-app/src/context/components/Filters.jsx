import React from 'react'
import { useFilterContext } from '../contextfiles/filterContext'
import { formatPrice, getUniqueValues } from '../utils/helpers'

const Filters = () => {
  const { 
    filters: {
    text,
    company,
    category,
    color,
    min_price,
    max_price,
    price,
    shipping
}, 
udpateFilters, 
clearFilters,
all_products} = useFilterContext()

const categories = getUniqueValues(all_products, 'category');
const companys = getUniqueValues(all_products, 'company');
const colors = getUniqueValues(all_products, 'colors');
console.log(colors);
  return (
    <div className='filters'>
        <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
                <input value={text} onChange={udpateFilters} type="text" name="text" placeholder='search' />
            </div>
            <div className="form-control">
                <h2>Category</h2>
                <div>
                    {categories.map((el, index) => {
                        return <button name='category' type='button' onClick={udpateFilters} key={index}>{el}</button>
                    })}
                </div>
            </div>
            <div className="form-control">
                    <h2>Company</h2>
                    <select name="company" value={company} onChange={udpateFilters}>
                        {companys.map((el, index) => {
                            return (
                                <option key={index} value={el}>
                                        {el}
                                </option>
                            )
                        })}
                    </select>
            </div>
            <div className="form-control">
                <h2>Colors</h2>
                {colors.map((el, index) => {
                    if(el === 'all'){
                        return <button key={index} data-color='all' onClick={udpateFilters} key={index} name="color" style={{background: el, width: '22px', overflow: 'hidden', color: el, margin: '3px'}}>all</button>
                    }
                    return <button data-color={el} onClick={udpateFilters} key={index} name="color" style={{background: el, width: '22px', overflow: 'hidden', color: el, margin: '3px'}}>{el}</button>
                })}
            </div>
            <div className="form-control">
                <h2>price</h2>
                <p>{formatPrice(price)}</p>
                <input type="range" name='price' onChange={udpateFilters} min={min_price} max={max_price} value={price} />
            </div>
            <div className="form-control">
                <label htmlFor="shipping">free shipping</label>
                <input type="checkbox" checked={shipping} name='shipping' id='shipping' onChange={udpateFilters} />
            </div>
        </form>
        <button onClick={clearFilters}>{' '} Clear Filters</button>
    </div>
  )
}

export default Filters