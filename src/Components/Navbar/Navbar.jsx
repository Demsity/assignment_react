import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import ButtonRound from '../Buttons/ButtonRound'





const Navbar = () => {

  const [navbar, setNavbar] = useState(false)


  const changeBackground = () => {
    if (window.scrollY >= 300) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };


  useEffect(() => {
    window.addEventListener('scroll', changeBackground, true);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <div className={navbar ? '__navbar-container-scrolled' : '__navbar-container'} >
      <div className='__navbar-wrapper container'>
      <NavLink className='__navbar-logo' to='/'>Fixxo.</NavLink>
        <nav className='__navbar-links'>
            <NavLink end className='__navbar-link' to='/'>Home</NavLink>
            <NavLink end className='__navbar-link' to='/categories'>Categories</NavLink>
            <NavLink end className='__navbar-link' to='/products/'>Products</NavLink>
            <NavLink end className='__navbar-link' to='/contact/'>Contacts</NavLink>
        </nav>
        <nav className='__user-interface ms-4'>
            <ButtonRound link='/search' icon='fa-regular fa-magnifying-glass'  />
            <ButtonRound link='/compare' icon='fa-light fa-code-compare'  />
            <ButtonRound link='/favorites' icon='fa-light fa-heart' badge='1' />
            <ButtonRound link='/cart' icon='fa-light fa-bag-shopping' badge='3' />
        </nav>
      </div>
    </div>
  )
}

export default Navbar

