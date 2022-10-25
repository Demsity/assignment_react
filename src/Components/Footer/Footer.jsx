import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='__footer'>
      <div className='container __footer-container'>
        <div className='__footer-links'>
          <a target='_blank' href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a>
          <a target='_blank' href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
          <a target='_blank' href="https://www.twitter.com"><i class="fa-brands fa-twitter"></i></a>
          <a target='_blank' href="https://www.google.com"><i class="fa-brands fa-google"></i></a>
          <a target='_blank' href="https://www.linkedin.com"><i class="fa-brands fa-linkedin"></i></a>
        </div>
        <div className='__footer-text'>
          <p>© 2022 Fixxo. All Rights Reserved</p>
        </div>
      </div>
    </section>
  )
}

export default Footer