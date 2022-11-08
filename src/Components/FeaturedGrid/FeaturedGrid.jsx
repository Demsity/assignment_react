import React from 'react'
import GridCard from '../Cards/GridCard'



function FeaturedGrid( {title, products} ) {
    // console.log(products)


    return (
        <div className="__grid-container">
            <h2>{title}</h2>
            <div className='__grid'>
                {
                   products.map(product => <GridCard key={product.articleNumber} products={product} path={`/product/${product.articleNumber}/description`} />)
                }


            </div>
        </div>

    )
}

export default FeaturedGrid