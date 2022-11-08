import React, { useEffect } from 'react'
import { useProducts } from '../Context/ProductsContext'
import FeaturedGrid from '../FeaturedGrid/FeaturedGrid'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import NewsBanner from '../NewsBanner/NewsBanner'
import OurSpeciality from '../OurSpeciality/OurSpeciality'
import PromoBanner from '../PromoBanner/PromoBanner'
import SaleGrid from '../SaleGrid/SaleGrid'
import Showcase from '../Showcase/Showcase'

function HomeView() {
  const { gridProducts, getGridProducts } = useProducts()

  useEffect(() => {
    getGridProducts(8)
  
  }, [])
  
  return (
    <>
        <Navbar />
        <Showcase />
        <PromoBanner />
        <FeaturedGrid title='Featured Grid' gridNr={8} products={gridProducts} />
        <NewsBanner />
        <OurSpeciality />
        {/* made a .slice due to API limitations, maybe fix later */}
        <SaleGrid products={gridProducts.slice(6)} />
        <SaleGrid products={gridProducts.slice(6)} imgRight={true} />
        <Footer />
    </>
  )
}

export default HomeView