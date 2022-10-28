import React from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Product from '../Products/Product'

function ProductView() {
  return (
    <>
      <Navbar />
      <Breadcrumbs page='Product' />
      <Product />
      <Footer />
    </>
  )
}

export default ProductView