import React from 'react'
import Product from '../Products/Product'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function ProductViewSingle() {
  return (
    <>
    <Navbar />
    <Breadcrumbs page='Products' />
    <Product />
    <Footer />
  </>
  )
}

export default ProductViewSingle