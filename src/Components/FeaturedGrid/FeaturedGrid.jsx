import React, { useState, useContext } from 'react'
import GridCard from '../Cards/GridCard'
import { ProductContext } from '../JS/Context'


function FeaturedGrid( {title, gridNr} ) {
    const product = useContext(ProductContext)

    console.log(product)
    return (
        <div className="__grid-container">
            <h2>{title}</h2>
            <div className='__grid'>
                {
                   product.slice(0, gridNr).map(product => <GridCard key={product.articleNumber} products={product} path={`/product/${product.name.replace(/\s/g, '-').toLowerCase()}`} />)
                }


            </div>
        </div>

    )
}

export default FeaturedGrid