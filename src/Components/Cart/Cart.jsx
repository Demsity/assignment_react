import React from 'react'
import { useState } from 'react'
import { useCart } from '../Context/CartContext'
import CartProduct from './CartProduct'

function Cart() {
  const { cartItems } =useCart()
  return (
    <div className="__shoppingcart offcanvas offcanvas-end" tabIndex="-1" id="cart" aria-labelledby="cartLabel">
        <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Shopping Cart</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {
            cartItems.map(item => (<CartProduct key={item.articleNumber} name={item.name} price={item.price} img={item.imageName} articleNumber={item.articleNumber} />))
          }
        </div>
        <div className='.__total'>

        </div>
    </div>
  )
}

export default Cart