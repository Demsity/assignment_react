import React from 'react'
import ButtonRound from '../Buttons/ButtonRound'
import ButtonSquare from '../Buttons/ButtonSquare'

function GridCard({ product }) {
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
            <img src={product.img} alt={product.imgAlt} />
        </div>
        <div className="__grid-card-text">
                <p className="__grid-card-text-category">{product.category}</p>
                <p className="__grid-card-text-product">{product.productName}</p>
                <div className="__grid-rating">
                    {/* make rating a component with prop */}
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                </div>
                <div className="__grid-price">
                    <p className="__grid-price-original">{product.discount ? '$'+ product.originalPrice.toFixed(2) : ''}</p>
                    <p className="__grid-price-discount">{'$'+ product.discountPrice.toFixed(2)}</p>
            </div>
        </div>
    </div>
  )
}

export default GridCard