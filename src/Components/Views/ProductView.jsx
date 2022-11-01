import React from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import FeaturedGrid from '../FeaturedGrid/FeaturedGrid'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Product from '../Products/Product'

function ProductView() {
  return (
    <>
      <Navbar />
      <Breadcrumbs page='Products' />
      <FeaturedGrid title='Products' />
      <Footer />
    </>
  )
}

export default ProductView