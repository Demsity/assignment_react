import React from 'react'
import ButtonRound from '../Buttons/ButtonRound'

const Navbar = () => {
  return (
    <div className='container'>
      <div className='__navbar-wrapper container'>
      <a href='#' className='__navbar-logo'>Fixxo.</a>
        <nav className='__navbar-links'>
            <a href='#' className='__navbar-link __link-active'>Home</a>
            <a href='#' className='__navbar-link'>Categories</a>
            <a href='#' className='__navbar-link'>Products</a>
            <a href='#' className='__navbar-link'>Contacts</a>
        </nav>
        <nav className='__user-interface ms-4'>
            <ButtonRound icon='fa-regular fa-magnifying-glass' pill={false} />
            <ButtonRound icon='fa-light fa-code-compare' />
            <ButtonRound icon='fa-light fa-heart' />
            <ButtonRound icon='fa-light fa-bag-shopping' />
        </nav>
      </div>
    </div>
  )
}

export default Navbar