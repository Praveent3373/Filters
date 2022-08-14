import React from 'react'

const Filter = ({data}) => {
    return (
        <div>{data.map((el) => {
            return <div>
                <h5>{el.id}- cusine: {el.cuisine} ===={'>'} {el.title} </h5>
            </div>
        })}</div>
    )
}

export default Filter