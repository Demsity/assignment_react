import React from 'react'
import { useCart } from '../Context/CartContext'

const ButtonRound = ({icon, cart, wish, hideOnMobile, id }) => {
  const { cartQuantity }= useCart()

  return (
    <button className={`__round-button ${hideOnMobile ? "hiddenOnMobile" : ""}` }  type='button' data-bs-toggle="offcanvas" data-bs-target={`#${id}`} aria-controls={id} >
      <i className={icon}></i>
      <span className='badge badge-pill badge-danger __badge-pill'>{cart || wish ? cartQuantity: ''}</span>
    </button>
  )
}

export default ButtonRound