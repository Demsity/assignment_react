import React, { useState, useContext } from 'react'
import GridCard from '../Cards/GridCard'
import { ProductContext } from '../JS/Context'


function FeaturedGrid( {title, gridNr} ) {
    const product = useContext(ProductContext)

    return (
        <div className="__grid-container">
            <h2>{title}</h2>
            <div className='__grid'>
                {
                   product.slice(0, gridNr).map(product => <GridCard key={product.articleNumber} products={product} path={`/product/${product.articleNumber}/description`} />)
                }


            </div>
        </div>

    )
}

export default FeaturedGrid