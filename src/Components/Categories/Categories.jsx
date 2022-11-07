import React, { useState, useContext } from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import GridCategoryCard from '../Cards/GridCategoryCard'
import { ProductContext } from '../Context/ProductsContext'

function Categories() {
    const products = useContext(ProductContext)
    const [categorires, setCategorires] = useState([...new Set(products.map(item => item.category))])
  return (
    <>
      <Breadcrumbs page='categories' />
      <section className='container __categories'>
          <h2>Categories</h2>
          <div className='__categories-grid'>
              {
                  categorires.map((categorires) => <GridCategoryCard key={categorires} category={categorires} />)
              
              }
          </div>

      </section>
    </>
  )
}

export default Categories