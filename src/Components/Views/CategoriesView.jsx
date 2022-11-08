import React, { useEffect } from 'react'
import Categories from '../Categories/Categories'
import { useProducts } from '../Context/ProductsContext'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function CategoriesView() {

  const { products, getProducts } = useProducts()

  useEffect(() => {
    getProducts()
  
  }, [])

  return (
  <>
    <Navbar />
    <Categories products={products} />
    <Footer />
  </>
  )
}

export default CategoriesView