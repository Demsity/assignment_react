import React from 'react'
import ButtonRound from '../Buttons/ButtonRound'
import ButtonSquareNavLink from '../Buttons/ButtonSquareNavLink'


function GridCard( {products, path} ) {
    
  return (
    <div className="__grid-card">
        <div className="__grid-card-image">
            <nav className="__grid-card-buttons">
            <div className="__grid-card-btn-round">
                <ButtonRound link='/compare' icon='fa-light fa-code-compare'  />
                <ButtonRound link='/favorites' icon='fa-light fa-heart' />
                <ButtonRound link='/cart' icon='fa-light fa-bag-shopping' />
            </div>
                <ButtonSquareNavLink title='QUICK VIEW' color='__btn-red' path={path} />
            </nav>
            <img className='img-fluid' src={products.imageName} alt={products.name} />
        </div>
        <div className="__grid-card-text">
                <p className="__grid-card-text-category">{products.category}</p>
                <p className="__grid-card-text-product">{products.name}</p>
                <div className="__grid-rating">
                    {/* make rating a component with prop */}
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                    <i className="fa-sharp fa-solid fa-star-sharp"></i>
                </div>
                <div className="__grid-price">
                    <p className="__grid-price-original">{'$'+ products.price.toFixed(2)}</p>
            </div>
        </div>
    </div>
  )
}

export default GridCard