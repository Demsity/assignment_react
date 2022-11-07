import React from 'react'
import CartProduct from './CartProduct'

function Cart() {
  return (
    <div className="__shoppingcart offcanvas offcanvas-end" tabIndex="-1" id="cart" aria-labelledby="cartLabel">
        <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Shopping Cart</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            <CartProduct />
        </div>
    </div>
  )
}

export default Cart