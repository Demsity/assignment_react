import React, { useState } from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import GridCategoryCard from '../Cards/GridCategoryCard'
import ProductList from '../Products/ProductList'

function Categories() {
    const [categorires, setCategorires] = useState([...new Set(ProductList.map(item => item.category))])
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