import React, { useContext }  from 'react'
import { useState } from 'react'
import ButtonRound from '../Buttons/ButtonRound'
import ButtonSquare from '../Buttons/ButtonSquare'
import { ProductContext } from '../JS/Context'

function GridCard( products ) {
    const [product, setProduct] = useState(products)
   
    console.log(product.products.name)
  return (
    <div className="__grid-card">
        <div className="__grid-card-image">
            <nav className="__grid-card-buttons">
            <div className="__grid-card-btn-round">
                <ButtonRound link='/compare' icon='fa-light fa-code-compare'  />
                <ButtonRound link='/favorites' icon='fa-light fa-heart' />
                <ButtonRound link='/cart' icon='fa-light fa-bag-shopping' />
            </div>
                <ButtonSquare title='QUICK VIEW' color='__btn-red' />
            </nav>
            <img src={product.products.imageName} alt={product.products.name} />
        </div>
        <div className="__grid-card-text">
                <p className="__grid-card-text-category">{product.products.category}</p>
                <p className="__grid-card-text-product">{product.products.name}</p>
                <div className="__grid-rating">
                    {/* make rating a component with prop */}
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                </div>
                <div className="__grid-price">
                    <p className="__grid-price-original">{'$'+ product.products.price.toFixed(2)}</p>
            </div>
        </div>
    </div>
  )
}

export default GridCard