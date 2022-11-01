import React, { useState, useContext } from 'react'
import GridCard from '../Cards/GridCard'
import { ProductContext } from '../JS/Context'


function FeaturedGrid() {
    const product = useContext(ProductContext)

    return (
        <div className="__grid-container">
            <h2>Featured Products</h2>
            <div className='__grid'>
                {
                   product.slice(0, 8).map(product => <GridCard key={product.articleNumber} products={product} />)
                }


            </div>
        </div>

    )
}

export default FeaturedGrid