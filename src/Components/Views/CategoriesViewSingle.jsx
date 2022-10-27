import React, { useState } from 'react'
import GridCard from '../Cards/GridCard'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ProductList from '../Products/ProductList'
import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

function CategoriesViewSingle( ) {
    const [products, setProducts] = useState(ProductList)
    const location = useLocation()
    let filtered = []

    filtered = products.filter((products) => {return products.category === location.state})
    return (
        <>
            <Navbar />
            <Breadcrumbs page={location.state} prevPage='categories' />
            <section className='__categories container'>
                <h2>{location.state}</h2>
                <div className='__categories-grid'>
                
                {
                    filtered.map(filtered => <GridCard key={filtered.id} product={filtered} />)
                }

                </div>
            </section>

            <Footer />
        </>
    )
}

export default CategoriesViewSingle