import React, { useContext } from 'react'
import GridCard from '../Cards/GridCard'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ProductList from '../Products/ProductList'
import { useLocation } from 'react-router-dom'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import { ProductContext } from '../Context/ProductsContext'

function CategoriesViewSingle( ) {
    const products = useContext(ProductContext)
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
                    filtered.map(filtered => <GridCard key={filtered.articleNumber} products={filtered} path={`../product/${filtered.articleNumber}/description`} />)
                }

                </div>
            </section>

            <Footer />
        </>
    )
}

export default CategoriesViewSingle