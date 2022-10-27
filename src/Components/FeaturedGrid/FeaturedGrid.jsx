import React, { useState } from 'react'
import GridCard from '../Cards/GridCard'
import ProductList from '../Products/ProductList'


function FeaturedGrid() {
    const [products, setProducts] = useState(ProductList)
    return (
        <div className="__grid-container">
            <h2>Featured Products</h2>
            <div className='__grid'>
                {
                   products.slice(0, 8).map(product => <GridCard key={product.id} product={product} />)
                }


            </div>
        </div>

    )
}

export default FeaturedGrid