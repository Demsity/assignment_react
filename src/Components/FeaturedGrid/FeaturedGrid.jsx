import React from 'react'
import GridCard from '../Cards/GridCard'



function FeaturedGrid( {title, products} ) {


    return (
        <div className="__grid-container">
            <h2>{title}</h2>
            <div className='__grid'>
                {
                    // Render products passed throught props
                   products.map(product => <GridCard key={product.articleNumber} products={product} path={`/product/${product.articleNumber}/description`} />)
                }


            </div>
        </div>

    )
}

export default FeaturedGrid