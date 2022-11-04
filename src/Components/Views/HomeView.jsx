import React from 'react'
import FeaturedGrid from '../FeaturedGrid/FeaturedGrid'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import NewsBanner from '../NewsBanner/NewsBanner'
import OurSpeciality from '../OurSpeciality/OurSpeciality'
import PromoBanner from '../PromoBanner/PromoBanner'
import SaleGrid from '../SaleGrid/SaleGrid'
import Showcase from '../Showcase/Showcase'

function HomeView() {
  return (
    <>
        <Navbar />
        <Showcase />
        <PromoBanner />
        <FeaturedGrid title='Featured Grid' gridNr={8} />
        <NewsBanner />
        <OurSpeciality />
        <SaleGrid />
        <SaleGrid imgRight={true} />
        <Footer />
    </>
  )
}

export default HomeView