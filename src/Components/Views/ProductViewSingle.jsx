import React, { useContext } from 'react'
import Product from '../Products/Product'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../Context/ProductsContext'
import FeaturedGrid from '../FeaturedGrid/FeaturedGrid'

function ProductViewSingle() {
  const productId = useParams()
  const product = useContext(ProductContext).find((id) => id.articleNumber === productId.id )

  return (
    <>
    <Navbar />
    <Breadcrumbs page={product.name} prevPage='product' />
    <Product product={product} />
    <FeaturedGrid title='Related Products' gridNr={4} />
    <Footer />
  </>
  )
}

export default ProductViewSingle