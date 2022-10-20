import React from 'react'
import FeaturedGrid from '../FeaturedGrid/FeaturedGrid'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import NewsBanner from '../NewsBanner/NewsBanner'
import PromoBanner from '../PromoBanner/PromoBanner'
import Showcase from '../Showcase/Showcase'

function HomeView() {
  return (
    <>
        <Navbar />
        <Showcase />
        <PromoBanner />
        <FeaturedGrid />
        <NewsBanner />
        <Footer />
    </>
  )
}

export default HomeView