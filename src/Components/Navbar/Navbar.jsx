import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ButtonRound from '../Buttons/ButtonRound'





const Navbar = () => {

  const [navbar, setNavbar] = useState(false)
  const [showMenu, setShowMenu] = useState(true)

// Fix background change on scrolling back up
  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  };

  const toggleMenu = () => {
      setShowMenu(!showMenu) 
  }

  useEffect(() => {
    // Make Menu appear hidden on app start, mobile view
    if (window.innerWidth >= 576) {
      setShowMenu(true)
    }else {
      setShowMenu(false)
    }

    window.addEventListener('scroll', changeBackground, true);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <div className='__navbar-container' style={navbar ? {'backgroundColor': 'white'} : {'backgroundColor': 'none'}} >
      <div className='__navbar-wrapper container'>
      <NavLink className='__navbar-logo' to='/'>Fixxo.</NavLink>
        <nav className='__navbar-links' style={showMenu ? {'right': '0'} : {'right': '-200px'}}>
            <NavLink end className='__navbar-link' to='/'>Home</NavLink>
            <NavLink end className='__navbar-link' to='/categories'>Categories</NavLink>
            <NavLink end className='__navbar-link' to='/product/'>Products</NavLink>
            <NavLink end className='__navbar-link' to='/contact'>Contacts</NavLink>
        </nav>
        <nav className='__user-interface ms-4'>
            <ButtonRound link='/search' icon='fa-regular fa-magnifying-glass'  />
            <ButtonRound hideOnMobile={true} link='/compare' icon='fa-light fa-code-compare'  />
            <ButtonRound hideOnMobile={true} link='/favorites' icon='fa-light fa-heart' badge='1' />
            <ButtonRound link='/cart' icon='fa-light fa-bag-shopping' badge='3' />
            <button className='__hide-menu __round-button' onClick={toggleMenu}><i className="fa-regular fa-bars"></i></button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

