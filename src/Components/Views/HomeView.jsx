import React from 'react'
import FeaturedGrid from '../FeaturedGrid/FeaturedGrid'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import PromoBanner from '../PromoBanner/PromoBanner'
import Showcase from '../Showcase/Showcase'

function HomeView() {
  return (
    <>
        <Navbar />
        <Showcase />
        <PromoBanner />
        <FeaturedGrid />
        <Footer />
    </>
  )
}

export default HomeView