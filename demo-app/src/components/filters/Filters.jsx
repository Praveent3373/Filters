import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { cuisineList, dataList } from '../../constants';
import Filter from './Filter';

function Filters() {
    const [data, setData] = useState(dataList);
    const [cuisine, setCuisine] = useState(cuisineList);
    const [searchInput, setSearch] = useState('');
    const handleCheck = (id) => {
        setCuisine(cuisine.map((el) => el.id === id ? {...el, checked: !el.checked} : el))
    }
    const applyFilters = () => {
        let newData = dataList;
        // checkbox
        const cuisineChecked = cuisine.filter((el) => el.checked).map((el) => el.label.toLowerCase());
        if(cuisineChecked.length){
            newData = newData.filter((el) => cuisineChecked.includes(el.cuisine));
        }
        // Search input
        if(searchInput){
            newData = newData.filter((el) => el.title.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1)
        }
        

        setData(newData);
    }
    useEffect(() => {
        applyFilters();
    },[cuisine, searchInput])
    return (
        <div>
            <div className="serach-bar">
                <input type="text" value={searchInput} onChange={(e) => setSearch(e.target.value)} placeholder='search' />
            </div>
            {cuisine.map((el) => {
                return <div>
                    <label htmlFor={el.label}>{el.label}</label>
                    <input type="checkbox" checked={el.checked} onChange={() => handleCheck(el.id)} />
                </div>
            })}
           <Filter data = {data}/>
        </div>
    )
}

export default Filters