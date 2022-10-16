import React, { useState, useEffect } from 'react'
import ButtonRound from '../Buttons/ButtonRound'





const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

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
      <a href='#' className='__navbar-logo'>Fixxo.</a>
        <nav className='__navbar-links'>
            <a href='#' className='__navbar-link __link-active'>Home</a>
            <a href='#' className='__navbar-link'>Categories</a>
            <a href='#' className='__navbar-link'>Products</a>
            <a href='#' className='__navbar-link'>Contacts</a>
        </nav>
        <nav className='__user-interface ms-4'>
            <ButtonRound icon='fa-regular fa-magnifying-glass'  />
            <ButtonRound icon='fa-light fa-code-compare'  />
            <ButtonRound icon='fa-light fa-heart' badge='1' />
            <ButtonRound icon='fa-light fa-bag-shopping' badge='3' />
        </nav>
      </div>
    </div>
  )
}

export default Navbar