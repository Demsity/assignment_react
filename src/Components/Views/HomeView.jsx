import React from 'react'
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
        <Footer />
    </>
  )
}

export default HomeView